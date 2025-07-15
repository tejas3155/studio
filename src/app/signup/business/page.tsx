import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft } from 'lucide-react';

export default function BusinessSignupPage() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <div className="relative hidden w-1/2 flex-col justify-between bg-gradient-to-br from-primary via-purple-700 to-accent p-8 text-white lg:flex">
        <Logo className="z-10" />
        <div className="z-10 mt-auto">
          <h2 className="font-headline text-4xl font-bold">
            The Ultimate Co-pilot for Your Business
          </h2>
          <p className="mt-4 text-lg text-purple-200">
            CoperVise transforms your operations, providing clarity and control over every task, meeting, and deadline.
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <Button variant="ghost" className="absolute left-4 top-4 md:left-auto md:right-4" asChild>
            <Link href="/signup">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Roles
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="font-headline text-3xl font-bold text-primary">For Business</h1>
            <p className="mt-2 text-muted-foreground">
              CoperVise helps businesses streamline operations, track key projects, and ensure team alignment effortlessly.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center text-foreground">Welcome</h2>
            <form className="mt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input id="email" type="email" placeholder="name@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-4">
                <Label>Choose your role</Label>
                <RadioGroup defaultValue="coordinator" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="executive" id="r1" />
                    <Label htmlFor="r1" className="cursor-pointer">Executive</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="coordinator" id="r2" />
                    <Label htmlFor="r2" className="cursor-pointer">Coordinator</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full" size="lg">Register</Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
