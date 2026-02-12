import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const event = await request.json();

        console.log('📬 Resend Webhook Event Received:', event.type);

        // Log the full payload for debugging (you can check this in Vercel logs)
        console.log('Event Data:', JSON.stringify(event, null, 2));

        // Handle specific event types
        switch (event.type) {
            case 'email.received':
                console.log('📨 New inbound email received!');
                // You can add logic here to save to database or notify a Slack channel
                break;

            case 'email.delivered':
                console.log('✅ Email delivered successfully!');
                break;

            case 'email.bounced':
                console.warn('⚠️ Email bounced!');
                break;

            case 'email.complained':
                console.error('🚫 Email marked as spam!');
                break;

            default:
                console.log('ℹ️ Received other Resend event:', event.type);
        }

        return NextResponse.json({ received: true }, { status: 200 });
    } catch (error) {
        console.error('❌ Webhook processing error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
