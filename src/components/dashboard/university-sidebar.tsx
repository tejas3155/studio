
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Bot,
  Briefcase,
  ClipboardList,
  FileText,
  GraduationCap,
  HandCoins,
  LayoutGrid,
  Settings,
  ShieldCheck,
  Users,
  FlaskConical,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutGrid,
    href: '/dashboard/universities/coordinator', // Default link
  },
  {
    title: 'Accreditation & Compliance',
    icon: ShieldCheck,
    subItems: [
      { title: 'Accreditation Toolkit', href: '/dashboard/universities/accreditation' },
      { title: 'Policy Hub', href: '/dashboard/universities/policies' },
      { title: 'Plagiarism Shield', href: '/dashboard/universities/plagiarism' },
    ],
  },
  {
    title: 'Academics & Research',
    icon: FlaskConical,
    subItems: [
      { title: 'Grant Writer', href: '/dashboard/universities/grants' },
      { title: 'Research Tracker', href: '/dashboard/universities/research' },
      { title: 'Curriculum Mapper', href: '/dashboard/universities/curriculum' },
    ],
  },
  {
    title: 'Faculty & Students',
    icon: GraduationCap,
    subItems: [
      { title: 'Faculty Workload', href: '/dashboard/universities/faculty-workload' },
      { title: 'Student Success', href: '/dashboard/universities/student-success' },
      { title: 'Tenure Review', href: '/dashboard/universities/tenure' },
    ],
  },
  {
    title: 'Operations',
    icon: ClipboardList,
    subItems: [
      { title: 'Smart Calendar', href: '/dashboard/universities/calendar' },
      { title: 'Tasks & Deadlines', href: '/dashboard/universities/tasks' },
      { title: 'Space Optimizer', href: '/dashboard/universities/space-optimizer' },
    ],
  },
  {
    title: 'Alumni Relations',
    icon: HandCoins,
    href: '/dashboard/universities/alumni',
  },
  {
    title: 'AI Tools',
    icon: Bot,
    subItems: [
      { title: 'Ask CoperVise Academic', href: '/dashboard/universities/ask-ai' },
      { title: 'Voice Dashboard', href: '/dashboard/universities/voice-dashboard' },
    ],
  },
];

export function UniversitySidebar() {
  const pathname = usePathname();

  // Determine active dashboard for the main link
  const overviewHref = pathname.includes('/executive') 
    ? '/dashboard/universities/executive' 
    : '/dashboard/universities/coordinator';
  
  menuItems[0].href = overviewHref;

  const defaultOpen = menuItems.filter(item => item.subItems).map(item => item.title);

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <Accordion type="multiple" className="w-full" defaultValue={defaultOpen}>
        {menuItems.map((item) =>
          item.subItems ? (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
              <AccordionTrigger className="py-2 text-base hover:no-underline [&[data-state=open]>div>svg]:-rotate-180">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 transition-all group-hover:scale-110" />
                  {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-0 pl-6">
                <div className="flex flex-col space-y-1 py-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                        pathname === subItem.href && 'bg-primary/10 text-primary'
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ) : (
            <Link
              key={item.title}
              href={item.href || '#'}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-base text-foreground transition-all hover:bg-primary/10 hover:text-primary',
                (pathname === item.href) && 'bg-primary/10 text-primary font-bold'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          )
        )}
      </Accordion>
       <div className="mt-8 pt-4 border-t">
         <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-base text-foreground transition-all hover:bg-primary/10 hover:text-primary"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
           <Link
            href="/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-base text-foreground transition-all hover:bg-primary/10 hover:text-primary"
          >
            <Briefcase className="h-5 w-5" />
            Back to Sector
          </Link>
       </div>
    </nav>
  );
}
