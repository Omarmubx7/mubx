
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Omar Mubaidin | MUBX - Web Developer & CS Student'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0a0a0a',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #202020 2%, transparent 0%), radial-gradient(circle at 75px 75px, #202020 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                }}
            >
                <div style={{ display: 'flex', border: '4px solid #333', borderRadius: 40, padding: 40, backgroundColor: 'rgba(0,0,0,0.8)', boxShadow: '0 0 80px rgba(255, 30, 30, 0.2)' }}>
                    <div style={{ display: 'flex' }}>
                        <span style={{ fontSize: 180, fontWeight: 900, color: 'white', letterSpacing: '-10px', lineHeight: 1 }}>M</span>
                        <span style={{ fontSize: 180, fontWeight: 900, color: '#FF1E1E', letterSpacing: '-10px', lineHeight: 1 }}>.</span>
                    </div>
                </div>
                <div style={{ marginTop: 60, fontSize: 60, color: 'white', fontWeight: 'bold', letterSpacing: '20px', textTransform: 'uppercase' }}>MUBX</div>
                <div style={{ marginTop: 20, fontSize: 24, color: '#888', letterSpacing: '2px', textTransform: 'uppercase' }}>Verified Web Developer</div>
            </div>
        ),
        {
            ...size,
        }
    )
}
