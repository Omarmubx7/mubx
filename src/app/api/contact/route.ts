import { NextResponse } from 'next/server';
import { query } from '@/lib/postgres';

type ContactPayload = {
    name?: string;
    email?: string;
    business?: string;
    website?: string;
    goal?: string;
    budget?: string;
    deadline?: string;
    message?: string;
    language?: string;
};

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as ContactPayload;
        const email = body.email?.trim();
        const message = body.message?.trim();

        if (!email || !message) {
            return NextResponse.json(
                { error: 'email and message are required' },
                { status: 400 },
            );
        }

        await query(
            `
            INSERT INTO contact_submissions (
                name,
                email,
                brand_name,
                website,
                goal,
                budget,
                deadline,
                message,
                language
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            `,
            [
                body.name?.trim() || null,
                email,
                body.business?.trim() || null,
                body.website?.trim() || null,
                body.goal?.trim() || 'General Inquiry',
                body.budget?.trim() || 'Not Specified',
                body.deadline?.trim() || 'Flexible',
                message,
                body.language?.trim() || 'en',
            ],
        );

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('POST /api/contact failed:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
