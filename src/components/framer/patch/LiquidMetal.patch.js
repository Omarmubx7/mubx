import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, useCallback } from "react";
import { addPropertyControls, ControlType } from "@/lib/framer-mock";

const liquidFragSource = `#version 300 es
#ifdef GL_ES
precision highp float;
#else
precision mediump float;
#endif

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D u_image_texture;
uniform float u_time;
uniform float u_ratio;
uniform float u_img_ratio;
uniform float u_patternScale;
uniform float u_refraction;
uniform float u_edge;
uniform float u_patternBlur;
uniform float u_liquid;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec3 mod289(vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 permute(vec3 x) { return mod289(((x*34.)+1.)*x); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1., 0.) : vec2(0., 1.);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.);
    m = m*m;
    m = m*m;
    vec3 x = 2. * fract(p * C.www) - 1.;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130. * dot(m, g);
}

vec2 get_img_uv() {
    vec2 img_uv = vUv;
    img_uv -= .5;
    if (u_ratio > u_img_ratio) {
        img_uv.x = img_uv.x * u_ratio / u_img_ratio;
    } else {
        img_uv.y = img_uv.y * u_img_ratio / u_ratio;
    }
    float scale_factor = 1.;
    img_uv *= scale_factor;
    img_uv += .5;
    img_uv.y = 1. - img_uv.y;
    return img_uv;
}

vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float get_color_channel(float c1, float c2, float stripe_p, vec3 w, float extra_blur, float b) {
    float ch = c2;
    float stripe = stripe_p;
    float blur = u_patternBlur + extra_blur;

    ch = mix(ch, c1, smoothstep(.0, blur, stripe));

    float border = w[0];
    ch = mix(ch, c2, smoothstep(border - blur, border + blur, stripe));

    float b_val = smoothstep(.2, .8, b);
    border = w[0] + .4 * (1. - b_val) * w[1];
    ch = mix(ch, c1, smoothstep(border - blur, border + blur, stripe));

    border = w[0] + .5 * (1. - b_val) * w[1];
    ch = mix(ch, c2, smoothstep(border - blur, border + blur, stripe));

    border = w[0] + w[1];
    ch = mix(ch, c1, smoothstep(border - blur, border + blur, stripe));

    float gradient_t = (stripe - w[0] - w[1]) / w[2];
    float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
    ch = mix(ch, gradient, smoothstep(border - blur, border + blur, stripe));

    return ch;
}

float get_img_frame_alpha(vec2 uv, float img_frame_width) {
    float img_frame_alpha = smoothstep(0., img_frame_width, uv.x) * smoothstep(1., 1. - img_frame_width, uv.x);
    img_frame_alpha *= smoothstep(0., img_frame_width, uv.y) * smoothstep(1., 1. - img_frame_width, uv.y);
    return img_frame_alpha;
}

void main() {
    vec2 uv = vUv;
    uv.y = 1. - uv.y;
    uv.x *= u_ratio;

    float diagonal = uv.x - uv.y;
    float t = .001 * mod(u_time, 10000.0);
    
    vec2 img_uv = get_img_uv();
    vec4 img = texture(u_image_texture, img_uv);

    vec3 color1 = vec3(.98, 0.98, 1.);
    vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, uv.x + uv.y));

    float edge = img.r;
    vec2 grad_uv = uv - .5;

    float dist = length(grad_uv + vec2(0., .2 * diagonal));
    grad_uv = rotate(grad_uv, (.25 - .2 * diagonal) * PI);

    float bulge = pow(1.8 * dist, 1.2);
    bulge = 1. - bulge;
    bulge *= pow(uv.y, .3);

    float cycle_width = u_patternScale;
    float thin_strip_1_ratio = .12 / cycle_width * (1. - .4 * bulge);
    float thin_strip_2_ratio = .07 / cycle_width * (1. + .4 * bulge);
    float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

    float thin_strip_1_width = cycle_width * thin_strip_1_ratio;
    float thin_strip_2_width = cycle_width * thin_strip_2_ratio;

    float opacity = 1. - smoothstep(.9 - .5 * u_edge, 1. - .5 * u_edge, edge);
    opacity *= get_img_frame_alpha(img_uv, 0.01);

    float noise = snoise(uv - t);
    edge += (1. - edge) * u_liquid * noise;

    float refr = clamp(1. - bulge, 0., 1.);
    float dir = grad_uv.x + diagonal - 2. * noise * diagonal * (smoothstep(0., 1., edge) * smoothstep(1., 0., edge));

    bulge *= clamp(pow(uv.y, .1), .3, 1.);
    dir *= (.1 + (1.1 - edge) * bulge);
    dir *= smoothstep(1., .7, edge);
    dir += .18 * (smoothstep(.1, .2, uv.y) * smoothstep(.4, .2, uv.y));
    dir += .03 * (smoothstep(.1, .2, 1. - uv.y) * smoothstep(.4, .2, 1. - uv.y));
    dir *= (.5 + .5 * pow(uv.y, 2.));
    dir *= cycle_width;
    dir -= t;

    float refr_r = refr + .03 * bulge * noise;
    float refr_b = 1.3 * refr;

    refr_r += 5. * (smoothstep(-.1, .2, uv.y) * smoothstep(.5, .1, uv.y)) * (smoothstep(.4, .6, bulge) * smoothstep(1., .4, bulge));
    refr_r -= diagonal;

    refr_b += (smoothstep(0., .4, uv.y) * smoothstep(.8, .1, uv.y)) * (smoothstep(.4, .6, bulge) * smoothstep(.8, .4, bulge));
    refr_b -= .2 * edge;

    refr_r *= u_refraction;
    refr_b *= u_refraction;

    vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
    w[1] -= .02 * smoothstep(.0, 1., edge + bulge);

    float r = get_color_channel(color1.r, color2.r, mod(dir + refr_r, 1.), w, 0.02 + .03 * u_refraction * bulge, bulge);
    float g = get_color_channel(color1.g, color2.g, mod(dir, 1.), w, 0.01 / (1. - diagonal), bulge);
    float b = get_color_channel(color1.b, color2.b, mod(dir - refr_b, 1.), w, .01, bulge);

    fragColor = vec4(r, g, b, opacity);
}
`;

const vertexShaderSource = `#version 300 es
precision mediump float;
in vec2 a_position;
out vec2 vUv;
void main() {
    vUv = .5 * (a_position + 1.);
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

export default function LiquidMetalLogo(props) {
    const { imageSource, speed, dispersion, edge, patternBlur, liquify, patternScale } = props;
    const canvasRef = useRef(null);
    const [gl, setGl] = useState(null);
    const [uniforms, setUniforms] = useState({});
    const [imageData, setImageData] = useState(null);
    const [processing, setProcessing] = useState(false);
    const totalAnimationTime = useRef(0);
    const lastRenderTime = useRef(0);

    const parseLogoImage = useCallback(file => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        return new Promise((resolve, reject) => {
            if (!file || !ctx) { reject(new Error("Invalid file or context")); return; }
            const img = new Image();
            img.onload = function () {
                if (file.type === "image/svg+xml") { img.width = 1000; img.height = 1000; }
                const MAX_SIZE = 1000;
                const MIN_SIZE = 500;
                let width = img.naturalWidth;
                let height = img.naturalHeight;
                if (width > MAX_SIZE || height > MAX_SIZE || width < MIN_SIZE || height < MIN_SIZE) {
                    if (width > height) {
                        if (width > MAX_SIZE) { height = Math.round(height * MAX_SIZE / width); width = MAX_SIZE; }
                        else if (width < MIN_SIZE) { height = Math.round(height * MIN_SIZE / width); width = MIN_SIZE; }
                    } else {
                        if (height > MAX_SIZE) { width = Math.round(width * MAX_SIZE / height); height = MAX_SIZE; }
                        else if (height < MIN_SIZE) { width = Math.round(width * MIN_SIZE / height); height = MIN_SIZE; }
                    }
                }
                canvas.width = width; canvas.height = height;
                const shapeCanvas = document.createElement("canvas");
                shapeCanvas.width = width; shapeCanvas.height = height;
                const shapeCtx = shapeCanvas.getContext("2d");
                shapeCtx.drawImage(img, 0, 0, width, height);
                const shapeImageData = shapeCtx.getImageData(0, 0, width, height);
                const data = shapeImageData.data;
                const shapeMask = new Array(width * height).fill(false);
                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        const idx4 = (y * width + x) * 4;
                        if (!(data[idx4] === 255 && data[idx4 + 1] === 255 && data[idx4 + 2] === 255 && data[idx4 + 3] === 255 || data[idx4 + 3] === 0)) {
                            shapeMask[y * width + x] = true;
                        }
                    }
                }
                const boundaryMask = new Array(width * height).fill(false);
                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        if (!shapeMask[y * width + x]) continue;
                        let isBoundary = false;
                        for (let ny = y - 1; ny <= y + 1 && !isBoundary; ny++) {
                            for (let nx = x - 1; nx <= x + 1 && !isBoundary; nx++) {
                                if (nx < 0 || nx >= width || ny < 0 || ny >= height || !shapeMask[ny * width + nx]) isBoundary = true;
                            }
                        }
                        if (isBoundary) boundaryMask[y * width + x] = true;
                    }
                }
                const u = new Float32Array(width * height).fill(0);
                const newU = new Float32Array(width * height).fill(0);
                const C = 0.01;
                const ITERATIONS = 300;
                for (let iter = 0; iter < ITERATIONS; iter++) {
                    for (let y = 0; y < height; y++) {
                        for (let x = 0; x < width; x++) {
                            const idx = y * width + x;
                            if (!shapeMask[idx] || boundaryMask[idx]) { newU[idx] = 0; continue; }
                            const sumN = (x + 1 < width && shapeMask[idx + 1] ? u[idx + 1] : 0) +
                                (x - 1 >= 0 && shapeMask[idx - 1] ? u[idx - 1] : 0) +
                                (y + 1 < height && shapeMask[idx + width] ? u[idx + width] : 0) +
                                (y - 1 >= 0 && shapeMask[idx - width] ? u[idx - width] : 0);
                            newU[idx] = (C + sumN) / 4;
                        }
                    }
                    u.set(newU);
                }
                let maxVal = 0; for (let i = 0; i < width * height; i++) if (u[i] > maxVal) maxVal = u[i];
                const outImg = ctx.createImageData(width, height);
                for (let i = 0; i < width * height; i++) {
                    const px = i * 4;
                    if (!shapeMask[i]) { outImg.data[px] = 255; outImg.data[px + 1] = 255; outImg.data[px + 2] = 255; outImg.data[px + 3] = 255; }
                    else {
                        const raw = u[i] / (maxVal || 1);
                        const remapped = Math.pow(raw, 2);
                        const gray = 255 * (1 - remapped);
                        outImg.data[px] = gray; outImg.data[px + 1] = gray; outImg.data[px + 2] = gray; outImg.data[px + 3] = 255;
                    }
                }
                resolve(outImg);
            };
            img.onerror = () => reject(new Error("Failed to load image"));
            img.src = URL.createObjectURL(file);
        });
    }, []);

    const createDefaultSVGImage = useCallback(async () => {
        const svgString = `<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M127.571 97.1191H272.428V169.545H200L127.571 97.1191ZM127.571 169.545H200L272.428 241.973H127.571V169.545ZM127.571 241.973H200V314.402L127.571 241.973Z" fill="black"/>
        </svg>`;
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        return parseLogoImage(new File([blob], "default.svg", { type: "image/svg+xml" }));
    }, [parseLogoImage]);

    useEffect(() => {
        setProcessing(true);
        const source = imageSource || "";
        if (!source) {
            createDefaultSVGImage().then(data => { setImageData(data); setProcessing(false); });
        } else {
            fetch(source).then(r => r.blob()).then(blob => parseLogoImage(new File([blob], "image", { type: blob.type })))
                .then(data => { setImageData(data); setProcessing(false); })
                .catch(() => setProcessing(false));
        }
    }, [imageSource, parseLogoImage, createDefaultSVGImage]);

    useEffect(() => {
        if (!canvasRef.current) return;
        const glCtx = canvasRef.current.getContext("webgl2", { antialias: true, alpha: true });
        if (!glCtx) return;

        const createShader = (source, type) => {
            const shader = glCtx.createShader(type);
            glCtx.shaderSource(shader, source);
            glCtx.compileShader(shader);
            return shader;
        };
        const program = glCtx.createProgram();
        glCtx.attachShader(program, createShader(vertexShaderSource, glCtx.VERTEX_SHADER));
        glCtx.attachShader(program, createShader(liquidFragSource, glCtx.FRAGMENT_SHADER));
        glCtx.linkProgram(program);
        glCtx.useProgram(program);

        const uniformLocs = {};
        const count = glCtx.getProgramParameter(program, glCtx.ACTIVE_UNIFORMS);
        for (let i = 0; i < count; i++) {
            const info = glCtx.getActiveUniform(program, i);
            uniformLocs[info.name] = glCtx.getUniformLocation(program, info.name);
        }

        const buffer = glCtx.createBuffer();
        glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buffer);
        glCtx.bufferData(glCtx.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), glCtx.STATIC_DRAW);
        const pos = glCtx.getAttribLocation(program, "a_position");
        glCtx.enableVertexAttribArray(pos);
        glCtx.vertexAttribPointer(pos, 2, glCtx.FLOAT, false, 0, 0);

        glCtx.enable(glCtx.BLEND);
        glCtx.blendFunc(glCtx.SRC_ALPHA, glCtx.ONE_MINUS_SRC_ALPHA);
        setGl(glCtx); setUniforms(uniformLocs);
    }, []);

    useEffect(() => {
        if (gl && uniforms.u_time) {
            gl.uniform1f(uniforms.u_patternScale, patternScale);
            gl.uniform1f(uniforms.u_refraction, dispersion);
            gl.uniform1f(uniforms.u_edge, edge);
            gl.uniform1f(uniforms.u_patternBlur, patternBlur);
            gl.uniform1f(uniforms.u_liquid, liquify);
        }
    }, [gl, uniforms, dispersion, edge, patternBlur, liquify, patternScale]);

    useEffect(() => {
        if (!gl || !imageData) return;
        const canvas = canvasRef.current;
        const size = Math.min(canvas.clientWidth, canvas.clientHeight) * window.devicePixelRatio;
        canvas.width = size; canvas.height = size;
        gl.viewport(0, 0, size, size);
        gl.uniform1f(uniforms.u_ratio, 1);
        gl.uniform1f(uniforms.u_img_ratio, imageData.width / imageData.height);

        const tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imageData.width, imageData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData.data);
        gl.uniform1i(uniforms.u_image_texture, 0);
    }, [gl, imageData, uniforms]);

    useEffect(() => {
        if (!gl || !imageData) return;
        let id;
        const render = time => {
            const delta = time - lastRenderTime.current;
            lastRenderTime.current = time;
            totalAnimationTime.current += delta * speed;
            gl.uniform1f(uniforms.u_time, totalAnimationTime.current % 10000);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            id = requestAnimationFrame(render);
        };
        id = requestAnimationFrame(render);
        return () => cancelAnimationFrame(id);
    }, [gl, imageData, speed, uniforms]);

    return _jsxs("div", {
        style: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
        children: [
            processing && _jsx("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 10 }, children: _jsx("div", { className: "animate-spin", style: { width: "32px", height: "32px", border: "3px solid white", borderTopColor: "transparent", borderRadius: "50%" } }) }),
            _jsx("canvas", { ref: canvasRef, style: { width: "100%", height: "100%", objectFit: "contain" } })
        ]
    });
}

LiquidMetalLogo.displayName = "LiquidMetal";
addPropertyControls(LiquidMetalLogo, {
    imageSource: { type: ControlType.Image },
    dispersion: { type: ControlType.Number, defaultValue: 0.015, min: 0, max: 0.06 },
    edge: { type: ControlType.Number, defaultValue: 0.4, min: 0, max: 1 },
    patternBlur: { type: ControlType.Number, defaultValue: 0.005, min: 0, max: 0.05 },
    liquify: { type: ControlType.Number, defaultValue: 0.07, min: 0, max: 1 },
    speed: { type: ControlType.Number, defaultValue: 0.3, min: 0, max: 1 },
    patternScale: { type: ControlType.Number, defaultValue: 2, min: 1, max: 10 }
});
