import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service Agreement | MUBX',
    description: 'Professional Service Agreement for MUBX clients.',
};

export default function ContractLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
