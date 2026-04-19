import { query } from '@/lib/postgres';

export default async function Notes() {
    try {
        const { rows: notes } = await query('SELECT * FROM notes ORDER BY id DESC');

        return (
            <div className="p-8 bg-black min-h-screen text-neon font-mono">
                <h1 className="text-2xl font-bold mb-4">Postgres Notes Table</h1>
                <pre className="bg-white/5 p-6 rounded-xl border border-white/10 overflow-auto">
                    {JSON.stringify(notes, null, 2)}
                </pre>
            </div>
        );
    } catch (error) {
        return (
            <div className="p-8 bg-black min-h-screen text-red-500 font-mono">
                <h1 className="text-2xl font-bold mb-4">Error Fetching Notes</h1>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </div>
        );
    }
}
