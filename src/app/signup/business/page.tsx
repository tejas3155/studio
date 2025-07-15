import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, User, Mail, Lock } from 'lucide-react';

export default function BusinessSignupPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="relative hidden w-1/2 flex-col justify-between bg-gradient-to-br from-purple-600 to-teal-500 p-8 text-white lg:flex">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="z-10">
          <Logo className="text-white" />
        </div>
        <div className="z-10 m-auto flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-white/20 p-4">
                <Logo className="text-white" />
            </div>
          <h1 className="font-headline text-5xl font-bold">CoperVise</h1>
          <p className="mt-4 text-2xl text-zinc-200">
            Your AI-Powered Executive Assistant
          </p>
        </div>
        <div className="z-10 mt-auto text-center text-sm text-zinc-300">
          <p>© {new Date().getFullYear()} CoperVise Inc. All Rights Reserved.</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-card p-8 lg:w-1/2">
        <div className="w-full max-w-md">
            <Button variant="ghost" className="absolute left-4 top-4 md:left-auto md:right-4 text-muted-foreground" asChild>
                <Link href="/signup">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Roles
                </Link>
            </Button>

          <div className="text-left">
            <h1 className="font-headline text-3xl font-bold text-foreground">Get Started with CoperVise</h1>
            <p className="mt-2 text-muted-foreground">
              Create an account to streamline your business operations.
            </p>
          </div>

          <form className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="name" type="text" placeholder="e.g., Alex Doe" required className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="name@company.com" required className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="Create a strong password" required className="pl-10"/>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Choose your role</Label>
                <RadioGroup defaultValue="coordinator" className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="executive" id="r1" className="text-teal-500 border-muted-foreground"/>
                    <Label htmlFor="r1" className="cursor-pointer font-medium text-foreground">Executive</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="coordinator" id="r2" className="text-teal-500 border-muted-foreground"/>
                    <Label htmlFor="r2" className="cursor-pointer font-medium text-foreground">Coordinator</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white" size="lg">Create Account</Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-teal-500 hover:underline">
                Login
              </Link>
            </p>
             <p className="mt-8 text-center text-xs text-muted-foreground">
              By creating an account, you agree to our{' '}
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
