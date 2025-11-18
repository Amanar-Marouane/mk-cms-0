import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoVariant = 'monkeyslegion' | 'monkeyscloud' | 'monkeysmail' | 'monkeyscms';

interface LogoProps {
    variant?: LogoVariant;
    width?: number;
    height?: number;
    className?: string;
}

export function Logo({
    variant = 'monkeyslegion',
    width = 180,
    height = 40,
    className,
}: LogoProps) {
    const logos = {
        monkeyslegion: '/logos/MonkeysLegion.svg',
        monkeyscloud: '/logos/monkeyscloud.svg',
        monkeysmail: '/logos/monkeysmailer.svg',
        monkeyscms: '/logos/monkeyscms.svg',
    };

    const logoSrc = logos[variant];
    const alt = `${variant.charAt(0).toUpperCase() + variant.slice(1)} logo`;

    return (
        <div className={cn('relative flex items-center', className)}>
            <Image
                src={logoSrc}
                alt={alt}
                width={width}
                height={height}
                className="object-contain"
                priority
            />
        </div>
    );
}
