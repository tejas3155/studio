import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <BrainCircuit className="h-7 w-7 text-primary" />
      <span className="font-headline text-2xl font-bold text-foreground">
        CoperVise
      </span>
    </Link>
  );
}
