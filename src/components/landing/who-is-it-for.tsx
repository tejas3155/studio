import { School, University, Shield, Crown, UserCheck, Briefcase, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const audiences = [
  {
    icon: Briefcase,
    title: 'Business',
    description: 'Streamline operations, track key projects, and ensure team alignment effortlessly.'
  },
  {
    icon: Building,
    title: 'Corporate',
    description: 'Manage cross-departmental workflows and maintain operational excellence at scale.'
  },
  {
    icon: Crown,
    title: 'Founders & CXOs',
    description: 'Avoid costly slip-ups with a clear view of all operations and compliance obligations.'
  },
  {
    icon: UserCheck,
    title: 'HR & Admin Teams',
    description: 'Monitor labor laws, internal policies, and SOPs with a clear, auditable trail.'
  },
  {
    icon: University,
    title: 'Universities & Colleges',
    description: 'Track NAAC, NBA, faculty submissions, and internal tasks seamlessly.'
  },
  {
    icon: School,
    title: 'School Institutions',
    description: 'Manage administrative workflows, compliance, and reporting with ease.'
  },
  {
    icon: Shield,
    title: 'Government & Compliance',
    description: 'Oversee policy implementation, manage public records, and ensure regulatory adherence.'
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
            <Card key={audience.title} className="transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <audience.icon className="h-8 w-8 text-accent" />
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
