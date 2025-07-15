"use client";

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  {
    title: 'Product',
    href: '#',
    subLinks: [
      { title: 'AI Assistant', href: '#' },
      { title: 'AI-Powered Meetings', href: '#' },
      { title: 'AI Daily Briefing', href: '#' },
      { title: 'AI Event Prioritization', href: '#' },
      { title: 'Documents Vault', href: '#' },
      { title: 'Institutional Frameworks', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    href: '#',
    subLinks: [
      { title: 'For Business', href: '#'},
      { title: 'For Corporate', href: '#'},
      { title: 'For Founders & CXOs', href: '#'},
      { title: 'For HR & Admin Teams', href: '#'},
      { title: 'For Universities & Colleges', href: '#'},
      { title: 'For Government & Compliance', href: '#'},
    ],
  },
  { title: 'Pricing', href: '#' },
];

function NavLink({ title, href, subLinks }: { title: string; href: string; subLinks?: { title: string; href: string; description?: string }[] }) {
  if (subLinks) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1 text-base">
            {title} <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64 bg-background/80 backdrop-blur-md">
          {subLinks.map((link) => (
            <DropdownMenuItem key={link.title} asChild>
              <Link href={link.href} className="flex flex-col items-start">
                <div className="font-medium">{link.title}</div>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <Button variant="ghost" asChild className="text-base">
      <Link href={href}>{title}</Link>
    </Button>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.title} {...link} />
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Register</Link>
          </Button>
          <ThemeToggle />
        </div>
        
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background/95 backdrop-blur">
                <SheetHeader>
                <div className="flex items-center justify-between">
                    <Logo />
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col justify-between p-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                        <Link key={link.title} href={link.href} className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                            {link.title}
                        </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-2 border-t pt-4">
                        <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" asChild>
                                <Link href="/login">Log In</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/signup">Register</Link>
                            </Button>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
