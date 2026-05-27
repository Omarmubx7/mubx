import { ImageResponse } from 'next/og';
import { projects } from '@/lib/projects';

export const runtime = 'edge';

export const alt = 'MUBX Project';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    const title = project?.title || 'MUBX Project';
    const description = project?.description || 'Web development by Omar Mubaidin';
    const tech = project?.tech?.slice(0, 3).join(' · ') || '';
    const metrics = project?.metrics || '';

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#000000',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Neon red glow — top right */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-120px',
                        right: '-120px',
                        width: '700px',
                        height: '700px',
                        background: '#E11D1D',
                        filter: 'blur(220px)',
                        opacity: 0.18,
                        borderRadius: '50%',
                    }}
                />

                {/* Bottom left subtle glow */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-80px',
                        left: '-60px',
                        width: '400px',
                        height: '400px',
                        background: '#E11D1D',
                        filter: 'blur(180px)',
                        opacity: 0.08,
                        borderRadius: '50%',
                    }}
                />

                {/* Thin top border in neon red */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: '#E11D1D',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '60px 72px',
                        height: '100%',
                        zIndex: 10,
                    }}
                >
                    {/* Top row — brand + metrics badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div
                            style={{
                                fontSize: 22,
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                color: '#E11D1D',
                                textTransform: 'uppercase',
                            }}
                        >
                            MUBX / Projects
                        </div>
                        {metrics && (
                            <div
                                style={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: '#E11D1D',
                                    border: '1.5px solid #E11D1D',
                                    padding: '6px 18px',
                                    borderRadius: '999px',
                                    opacity: 0.9,
                                }}
                            >
                                {metrics}
                            </div>
                        )}
                    </div>

                    {/* Main title */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div
                            style={{
                                fontSize: 84,
                                fontWeight: 900,
                                lineHeight: 1.0,
                                color: '#FFFFFF',
                                letterSpacing: '-0.02em',
                                textTransform: 'uppercase',
                                maxWidth: '900px',
                            }}
                        >
                            {title}
                        </div>
                        <div
                            style={{
                                fontSize: 26,
                                color: '#999999',
                                lineHeight: 1.4,
                                maxWidth: '800px',
                            }}
                        >
                            {description.length > 100 ? description.slice(0, 97) + '...' : description}
                        </div>
                    </div>

                    {/* Bottom row — tech stack + author */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: 20, color: '#666666', letterSpacing: '0.05em' }}>
                            {tech}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: '#1a1a1a',
                                    border: '2px solid #E11D1D',
                                }}
                            />
                            <div style={{ fontSize: 22, color: '#cccccc' }}>
                                Omar Mubaidin
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
