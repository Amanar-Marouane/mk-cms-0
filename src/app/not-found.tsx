'use client';

import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-4'>
      <div className="mb-8">
        <Logo variant="monkeyslegion" width={200} height={50} />
      </div>

      <span className='from-foreground bg-linear-to-b to-transparent bg-clip-text text-[8rem] leading-none font-extrabold text-transparent regal-gradient-text regal-glow'>
        404
      </span>

      <h2 className='font-heading my-4 text-2xl font-bold'>
        Something&apos;s missing
      </h2>

      <p className='mb-8 text-muted-foreground max-w-md'>
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Button asChild>
        <Link href="/">
          Return Home
        </Link>
      </Button>
    </div>
  );
}
