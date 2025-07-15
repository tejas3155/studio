import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <div className="relative hidden w-1/2 flex-col justify-between bg-zinc-900 p-8 text-white lg:flex">
        <Logo className="z-10" />
        <div className="z-10 mt-auto">
          <h2 className="font-headline text-4xl font-bold">
            Welcome Back to CoperVise
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Your AI co-pilot for execution and coordination is ready to assist you.
          </p>
        </div>
        <Image
          src="https://placehold.co/1200x1800.png"
          alt="Abstract futuristic background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-20"
          data-ai-hint="futuristic abstract background"
        />
      </div>
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
           <Button variant="ghost" className="absolute left-4 top-4" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="font-headline text-3xl font-bold text-primary">Log In</h1>
            <p className="mt-2 text-muted-foreground">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center text-foreground">Welcome Back</h2>
            <form className="mt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input id="email" type="email" placeholder="name@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" size="lg">Login</Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}