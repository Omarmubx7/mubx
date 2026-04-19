import { Pool, QueryResult } from 'pg';
import type { QueryResultRow } from 'pg';

let pool: Pool | null = null;

function getPool(): Pool {
    if (pool) return pool;

    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        throw new Error('DATABASE_URL is not configured.');
    }

    pool = new Pool({
        connectionString,
        ssl: connectionString.includes('sslmode=require') ? { rejectUnauthorized: false } : undefined,
    });

    return pool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(text: string, values: unknown[] = []): Promise<QueryResult<T>> {
    const activePool = getPool();
    return activePool.query<T>(text, values);
}
