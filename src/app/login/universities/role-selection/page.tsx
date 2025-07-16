
import Link from 'next/link';
import { UserCheck, Users, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export default function UniversitiesRoleSelectionPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute left-8 top-8">
        <Logo />
      </div>
      <div className="w-full max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Select Your Role for Universities
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Choose which dashboard you want to access for this session.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Link href="/dashboard/executive">
            <Card className="group cursor-pointer border-border/20 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
              <CardHeader className="flex flex-col items-center justify-center p-8 text-center">
                <UserCheck className="mb-6 h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="font-headline text-2xl">Executive</CardTitle>
                <CardDescription className="mt-2">Access the high-level strategic overview and reporting tools.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/dashboard/coordinator">
            <Card className="group cursor-pointer border-border/20 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
              <CardHeader className="flex flex-col items-center justify-center p-8 text-center">
                <Users className="mb-6 h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="font-headline text-2xl">Coordinator</CardTitle>
                <CardDescription className="mt-2">Manage day-to-day tasks, team coordination, and operational activities.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
        <div className="mt-12">
            <Button variant="ghost" asChild>
                <Link href="/login">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Sector Selection
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
