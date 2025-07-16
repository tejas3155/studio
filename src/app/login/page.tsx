'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="relative hidden w-1/2 lg:block">
        <img src="/images/CoperVise Left.png" alt="CoperVise Login" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="flex w-full items-center justify-center bg-card p-8 lg:w-1/2">
        <div className="w-full max-w-md">
            <div className="mb-8 flex justify-center">
              <Logo />
            </div>
          <div className="text-center">
            <h1 className="font-headline text-3xl font-bold text-foreground">Welcome Back</h1>
            <p className="mt-2 text-muted-foreground">
              Enter your credentials to access your account.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="name@company.com" required className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-sm font-medium text-primary hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="Enter your password" required className="pl-10"/>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">Login</Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                Register
              </Link>
            </p>
             <p className="mt-8 text-center text-xs text-muted-foreground">
              By logging in, you agree to our{' '}
              <Link href="#" className="underline hover:text-foreground">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="underline hover:text-foreground">
                Privacy Policy
              </Link>
              .
            </p>
        </div>
      </div>
    </div>
  );
}
