import { UserCheck, Crown, Landmark, Briefcase, UserCog, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const audiences = [
  {
    icon: UserCheck,
    title: 'Compliance Officers',
    description: 'Gain complete visibility and get automated reminders to mitigate risks effectively.'
  },
  {
    icon: Crown,
    title: 'Founders & CXOs',
    description: 'Avoid costly legal slip-ups during audits, funding rounds, and day-to-day operations.'
  },
  {
    icon: Landmark,
    title: 'Legal & Finance Teams',
    description: 'Track notices, SOPs, regulatory changes, and tax filings to avoid fines.'
  },
  {
    icon: Briefcase,
    title: 'HR & ESG Leads',
    description: 'Monitor labor laws, ESG norms, and internal policies with a clear, auditable trail.'
  },
   {
    icon: UserCog,
    title: 'Cybersecurity Managers',
    description: 'Ensure ISO 27001, NIST, or SOC2 documentation compliance with structured workflows.'
  },
  {
    icon: Building,
    title: 'VC-funded Startups',
    description: 'Demonstrate regulatory maturity and readiness to investors and stakeholders.'
  },
]

export function WhoIsItFor() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for the Guardians of Governance
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From startups to enterprise teams, CoperVise provides role-specific views to empower every stakeholder in the compliance chain.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <Card key={audience.title}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <audience.icon className="h-8 w-8 text-primary" />
                <CardTitle>{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
