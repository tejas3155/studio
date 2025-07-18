
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Archive,
  Bot,
  Briefcase,
  Calendar,
  ClipboardList,
  FileText,
  Flag,
  Gauge,
  Landmark,
  LayoutGrid,
  Megaphone,
  MessageSquare,
  Scale,
  Settings,
  ShieldCheck,
  Siren,
  Target,
  Users,
  Wallet,
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
    href: '/dashboard/government/coordinator', // Default link
  },
  {
    title: 'Operations',
    icon: ClipboardList,
    subItems: [
      { title: 'File Tracker', href: '/dashboard/government/files' },
      { title: 'Tasks & Calendar', href: '/dashboard/government/tasks' },
      { title: 'SOP Tracker', href: '/dashboard/government/sops' },
    ],
  },
  {
    title: 'Public Interface',
    icon: Megaphone,
    subItems: [
      { title: 'Grievance Heatmap', href: '/dashboard/government/grievances' },
      { title: 'Citizen Sentiment', href: '/dashboard/government/sentiment' },
      { title: 'RTI Generator', href: '/dashboard/government/rti' },
      { title: 'Public Notices', href: '/dashboard/government/notices' },
    ],
  },
  {
    title: 'Schemes & Finance',
    icon: Wallet,
    subItems: [
      { title: 'Scheme Tracker', href: '/dashboard/government/schemes' },
      { title: 'Revenue & Fiscal Risk', href: '/dashboard/government/revenue-risk' },
      { title: 'KPI Tracker', href: '/dashboard/government/kpis' },
    ],
  },
  {
    title: 'Governance & Compliance',
    icon: Landmark,
    subItems: [
      { title: 'Legislative Tracker', href: '/dashboard/government/legislative' },
      { title: 'Policy Hub', href: '/dashboard/government/policies' },
      { title: 'Vendor Management', href: '/dashboard/government/vendors' },
    ],
  },
  {
    title: 'Crisis Management',
    icon: Siren,
    subItems: [
        { title: 'Disaster Response', href: '/dashboard/government/disaster-response' },
        { title: 'Election Integrity', href: '/dashboard/government/election-integrity' },
    ],
  },
  {
    title: 'AI Tools',
    icon: Bot,
    subItems: [
      { title: 'Ask CoperVise Govt', href: '/dashboard/government/ask-ai' },
      { title: 'Policy Simulator', href: '/dashboard/government/policy-simulator' },
      { title: 'Statement Builder', href: '/dashboard/government/statement-builder' },
      { title: 'Voice Dashboard', href: '/dashboard/government/voice-dashboard' },
    ],
  },
];

export function GovernmentSidebar() {
  const pathname = usePathname();

  // Determine active dashboard for the main link
  const overviewHref = pathname.includes('/executive') 
    ? '/dashboard/government/executive' 
    : '/dashboard/government/coordinator';
  
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
