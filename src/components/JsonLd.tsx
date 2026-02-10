/**
 * JsonLd — A safe, centralized component for injecting JSON-LD structured data.
 *
 * This is the ONLY place in the codebase where `dangerouslySetInnerHTML` is
 * permitted. The data is always serialized via `JSON.stringify()`, which
 * escapes HTML entities, preventing script injection.
 *
 * Usage:
 *   <JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: "Omar" }} />
 */

interface JsonLdProps {
    data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
