import { Pool, QueryResult } from 'pg';
import type { QueryResultRow } from 'pg';

let pool: Pool | null = null;

function getPool(): Pool {
    if (pool) return pool;

    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_URL_NO_SSL;

    if (!connectionString) {
        throw new Error('DATABASE_URL or POSTGRES_URL is not configured.');
    }

    const isSslUrl = connectionString.includes('sslmode=require') || connectionString.includes('sslmode=verify');
    pool = new Pool({
        connectionString,
        ssl: isSslUrl ? { rejectUnauthorized: false } : false,
    });

    return pool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(text: string, values: unknown[] = []): Promise<QueryResult<T>> {
    const activePool = getPool();
    return activePool.query<T>(text, values);
}
