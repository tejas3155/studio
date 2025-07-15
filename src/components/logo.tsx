import { Briefcase } from 'lucide-react';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Briefcase className="h-7 w-7" />
      <span className="font-headline text-2xl font-bold">
        CoperVise
      </span>
    </Link>
  );
}
