
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

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
  'user@business.com': { sector: 'Business', password: 'password123' },
  'user@corporate.com': { sector: 'Corporate', password: 'password123' },
  'user@startup.com': { sector: 'Startup', password: 'password123' },
  'user@hr.com': { sector: 'HR', password: 'password123' },
  'user@universities.com': { sector: 'Universities', password: 'password123' },
  'user@government.com': { sector: 'Government', password: 'password123' },
};

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = React.useState(roles[0].name);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRoleSelectionOpen, setIsRoleSelectionOpen] = React.useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = dummyUsers[email as keyof typeof dummyUsers];

    if (user && user.sector === selectedRole && user.password === password) {
      // Successful login, open role selection dialog
      setIsRoleSelectionOpen(true);
    } else {
        // User not found, wrong sector, or wrong password
        toast({
            variant: "destructive",
            title: "Login Failed",
            description: "Invalid credentials. Please check your sector, email, and password.",
        });
    }
  };
  
  const handleRoleRedirect = (role: 'executive' | 'coordinator') => {
    router.push(`/dashboard/${role}`);
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
              Select your sector and enter your credentials to access your account.
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
                      placeholder="e.g., user@business.com" 
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
      
      <AlertDialog open={isRoleSelectionOpen} onOpenChange={setIsRoleSelectionOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login Successful</AlertDialogTitle>
            <AlertDialogDescription>
              Please select the role you want to log in as for this session.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center flex-col sm:flex-col sm:space-x-0 gap-2">
            <Button onClick={() => handleRoleRedirect('executive')}>Log in as Executive</Button>
            <Button variant="secondary" onClick={() => handleRoleRedirect('coordinator')}>Log in as Coordinator</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}
