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

type PgLikeError = {
    code?: string;
    message?: string;
};

function isPgLikeError(error: unknown): error is PgLikeError {
    return typeof error === 'object' && error !== null && 'code' in error;
}

async function ensureContactSubmissionsTable() {
    await query(`
        CREATE TABLE IF NOT EXISTS public.contact_submissions (
            id BIGSERIAL PRIMARY KEY,
            name TEXT,
            email TEXT NOT NULL,
            brand_name TEXT,
            website TEXT,
            goal TEXT,
            budget TEXT,
            deadline TEXT,
            message TEXT NOT NULL,
            language TEXT DEFAULT 'en',
            created_at TIMESTAMPTZ DEFAULT NOW()
        )
    `);
}

async function insertSubmission(body: ContactPayload, email: string, message: string) {
    await query(
        `
        INSERT INTO contact_submissions (
            name,
            email,
            brand_name,
            website,
            goal,
            budget,
            "deadline",
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
}

export async function POST(req: Request) {
    try {
        const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

        if (!dbUrl) {
            return NextResponse.json(
                {
                    error: 'Database is not configured',
                    errorCode: 'DB_CONFIG_MISSING',
                },
                { status: 500 },
            );
        }

        const body = (await req.json()) as ContactPayload;
        const email = body.email?.trim();
        const message = body.message?.trim();

        if (!email || !message) {
            return NextResponse.json(
                { error: 'email and message are required' },
                { status: 400 },
            );
        }

        try {
            await insertSubmission(body, email, message);
        } catch (error: unknown) {
            if (isPgLikeError(error) && error.code === '42P01') {
                await ensureContactSubmissionsTable();
                await insertSubmission(body, email, message);
            } else {
                throw error;
            }
        }

        return NextResponse.json({ ok: true });
    } catch (error: unknown) {
        console.error('POST /api/contact failed:', error);

        const message = error instanceof Error ? error.message : 'Internal Server Error';

        if (isPgLikeError(error) && error.code === '42501') {
            return NextResponse.json(
                {
                    error: 'Database permission error',
                    errorCode: 'DB_PERMISSION_DENIED',
                },
                { status: 500 },
            );
        }

        if (isPgLikeError(error) && error.code === '28P01') {
            return NextResponse.json(
                {
                    error: 'Database authentication failed',
                    errorCode: 'DB_AUTH_FAILED',
                },
                { status: 500 },
            );
        }

        return NextResponse.json(
            {
                error: 'Internal Server Error',
                errorCode: 'CONTACT_INSERT_FAILED',
                details: message,
                fullError: String(error) + ' | ' + JSON.stringify(error, Object.getOwnPropertyNames(error))
            },
            { status: 500 },
        );
    }
}
