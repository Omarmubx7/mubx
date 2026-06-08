import { Metadata } from 'next';
import { siteConfig } from '@/config/seo';

export const metadata: Metadata = {
    title: 'E-commerce Website Development in Amman, Jordan | MUBX',
    description: 'Custom e-commerce solutions for Jordanian businesses. Build fast, secure online stores accepting Zain Cash & CliQ. Own your data and stop paying monthly fees.',
    alternates: {
        canonical: `${siteConfig.url}/services/ecommerce`
    }
};

export default function EcommerceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
