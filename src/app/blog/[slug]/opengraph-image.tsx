import { ImageResponse } from 'next/og';
import { blogPosts } from '@/lib/blog-data';

export const runtime = 'edge';

export const alt = 'Blog Post Cover';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    const title = post?.title || 'MUBX Blog';

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    border: '20px solid #202020',
                }}
            >
                {/* Background Decor */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '600px',
                        height: '600px',
                        background: '#ff2a2a', // Neon Red
                        filter: 'blur(200px)',
                        opacity: 0.2,
                        borderRadius: '50%',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        maxWidth: '900px',
                        padding: '40px',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 'bold',
                            letterSpacing: '0.1em',
                            color: '#ff2a2a', // Neon
                            marginBottom: 20,
                            textTransform: 'uppercase',
                        }}
                    >
                        MUBX / Blog
                    </div>
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            lineHeight: 1.1,
                            color: 'white',
                            marginBottom: 40,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                        }}
                    >
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: '#333',
                                border: '2px solid #ff2a2a',
                            }}
                        />
                        <div style={{ fontSize: 24, color: '#aaa' }}>Omar Mubaidin</div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
