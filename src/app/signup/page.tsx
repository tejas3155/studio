import { ArrowRight, Briefcase, Building, Landmark, Rocket, School, Users } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const roles = [
  {
    icon: Briefcase,
    title: 'Business',
    href: '/signup/business',
  },
  {
    icon: Building,
    title: 'Corporate',
    href: '/signup/corporate',
  },
  {
    icon: Rocket,
    title: 'Founders/Startup',
    href: '/signup/startup',
  },
  {
    icon: Users,
    title: 'HR & Admin Team',
    href: '/signup/hr',
  },
  {
    icon: School,
    title: 'Universities',
    href: '/signup/universities',
  },
  {
    icon: Landmark,
    title: 'Government',
    href: '/signup/government',
  },
];

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute left-8 top-8">
        <Logo />
      </div>
      <div className="w-full max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Welcome to CoperVise
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Let's tailor your experience. What's your role?
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <Link key={role.title} href={role.href} passHref>
              <Card className="group cursor-pointer border-border/20 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center justify-center text-center">
                  <role.icon className="mb-4 h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle className="font-headline text-xl">{role.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12">
            <Button variant="ghost" asChild>
                <Link href="/">
                    Go back to landing page <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
