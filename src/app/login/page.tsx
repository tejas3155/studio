'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Mail, Lock, Briefcase, Building, Landmark, Rocket, School, Users } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

const roles = [
  { name: 'Business', icon: Briefcase },
  { name: 'Corporate', icon: Building },
  { name: 'Startup', icon: Rocket },
  { name: 'HR', icon: Users },
  { name: 'Universities', icon: School },
  { name: 'Government', icon: Landmark },
];

// Dummy user data to simulate a database
const dummyUsers = {
  'executive@business.com': { sector: 'Business', role: 'executive', password: 'password123' },
  'coordinator@corporate.com': { sector: 'Corporate', role: 'coordinator', password: 'password123' },
};

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = React.useState(roles[0].name);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = dummyUsers[email as keyof typeof dummyUsers];

    if (user) {
      if (user.sector === selectedRole && user.password === password) {
        // Successful login
        if (user.role === 'executive') {
          router.push('/dashboard/executive');
        } else if (user.role === 'coordinator') {
          router.push('/dashboard/coordinator');
        }
      } else if (user.sector !== selectedRole) {
        // Correct user, wrong sector
        toast({
            variant: "destructive",
            title: "Login Failed",
            description: "Invalid credentials for selected sector. Please check your details.",
        });
      } else {
        // Wrong password
        toast({
            variant: "destructive",
            title: "Login Failed",
            description: "Invalid email or password.",
        });
      }
    } else {
      // User not found
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid email or password.",
      });
    }
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
              Select your role and enter your credentials to access your account.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div>
                <Label className="mb-3 block">Select Your Sector</Label>
                <RadioGroup 
                  value={selectedRole}
                  onValueChange={setSelectedRole}
                  className="grid grid-cols-3 gap-2"
                >
                  {roles.map((role) => (
                    <div key={role.name}>
                      <RadioGroupItem value={role.name} id={role.name} className="peer sr-only" />
                      <Label
                        htmlFor={role.name}
                        className={cn(
                          "flex h-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 text-sm hover:bg-accent hover:text-accent-foreground",
                          "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 [&:has([data-state=checked])]:border-primary"
                        )}
                      >
                        <role.icon className="mb-1 h-5 w-5" />
                        {role.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="e.g., executive@business.com" 
                      required 
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password" 
                      required 
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
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
