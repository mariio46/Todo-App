'use client';

import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
    href,
    children,
    className,
    ...props
}: LinkProps & { href?: string; children?: string; className?: string }) {
    const pathname = usePathname();
    const active = href === pathname;
    return (
        <Link
            href={href}
            className={cn(
                className,
                active ? 'font-semibold text-foreground' : 'font-normal text-muted-foreground',
            )}
            {...props}>
            {children}
        </Link>
    );
}
