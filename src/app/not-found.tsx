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

      <div className="relative">
        <span className='from-foreground bg-linear-to-b to-transparent bg-clip-text text-[8rem] leading-none font-extrabold text-transparent ml-gradient-text'>
          404
        </span>
        <span className="absolute -top-4 -right-8 text-4xl animate-bounce">🙈</span>
      </div>

      <h2 className='font-heading my-4 text-2xl font-bold'>
        Oops! This page went on vacation
      </h2>

      <p className='mb-8 text-muted-foreground max-w-md font-semibold'>
        Maybe AI can generate it... HAHA
      </p>

      <Button asChild>
        <Link href="/">
          Take Me Home
        </Link>
      </Button>
    </div>
  );
}