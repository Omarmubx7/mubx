import { Pool, QueryResult } from 'pg';
import type { QueryResultRow } from 'pg';

let pool: Pool | null = null;

function getPool(): Pool {
    if (pool) return pool;

    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

    if (!connectionString) {
        throw new Error('DATABASE_URL or POSTGRES_URL is not configured.');
    }

    pool = new Pool({
        connectionString,
        ssl: { rejectUnauthorized: false },
    });

    return pool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(text: string, values: unknown[] = []): Promise<QueryResult<T>> {
    const activePool = getPool();
    return activePool.query<T>(text, values);
}
