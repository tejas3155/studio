
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Bot,
  Briefcase,
  ClipboardList,
  FileText,
  Handshake,
  HeartPulse,
  LayoutGrid,
  Settings,
  ShieldCheck,
  UserPlus,
  Users,
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
    href: '/dashboard/hr/coordinator', // Default link
  },
  {
    title: 'Recruiting',
    icon: UserPlus,
    subItems: [
      { title: 'Job Openings', href: '/dashboard/hr/recruiting/jobs' },
      { title: 'Candidate Pipeline', href: '/dashboard/hr/recruiting/pipeline' },
      { title: 'Offer Letters', href: '/dashboard/hr/recruiting/offers' },
    ],
  },
  {
    title: 'Employee Management',
    icon: Users,
    subItems: [
      { title: 'Employee Directory', href: '/dashboard/hr/employees/directory' },
      { title: 'Org Chart', href: '/dashboard/hr/employees/org-chart' },
      { title: 'Leave Tracker', href: '/dashboard/hr/employees/leave' },
      { title: 'Exit Interviews', href: '/dashboard/hr/employees/offboarding' },
    ],
  },
  {
    title: 'Culture & Engagement',
    icon: HeartPulse,
    subItems: [
      { title: 'Sentiment Analysis', href: '/dashboard/hr/culture/sentiment' },
      { title: 'DEI Dashboard', href: '/dashboard/hr/culture/dei' },
      { title: 'Surveys', href: '/dashboard/hr/culture/surveys' },
    ],
  },
  {
    title: 'Compliance & Docs',
    icon: ShieldCheck,
    subItems: [
      { title: 'Policy Hub', href: '/dashboard/hr/compliance/policies' },
      { title: 'SOP Tracker', href: '/dashboard/hr/compliance/sops' },
      { title: 'Compliance Tasks', href: '/dashboard/hr/compliance/tasks' },
    ],
  },
  {
    title: 'Analytics & Reports',
    icon: BarChart3,
    subItems: [
      { title: 'HR KPIs', href: '/dashboard/hr/analytics/kpis' },
      { title: 'Attrition Risk', href: '/dashboard/hr/analytics/attrition' },
      { title: 'Monthly Reports', href: '/dashboard/hr/analytics/reports' },
    ],
  },
  {
    title: 'AI Tools',
    icon: Bot,
    subItems: [
      { title: 'Ask CoperVise', href: '/dashboard/hr/ask-ai' },
      { title: 'Playbook Builder', href: '/dashboard/hr/playbook-builder' },
      { title: 'Voice Dashboard', href: '/dashboard/hr/voice-dashboard' },
    ],
  },
];

export function HrSidebar() {
  const pathname = usePathname();

  // Determine active dashboard for the main link
  const overviewHref = pathname.includes('/executive') 
    ? '/dashboard/hr/executive' 
    : '/dashboard/hr/coordinator';
  
  menuItems[0].href = overviewHref;

  const defaultOpen = menuItems.filter(item => item.subItems).map(item => item.title);

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <Accordion type="multiple" className="w-full" defaultValue={defaultOpen}>
        {menuItems.map((item) =>
          item.subItems ? (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
              <AccordionTrigger className="py-2 text-base hover:no-underline">
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
