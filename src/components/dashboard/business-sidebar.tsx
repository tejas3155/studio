'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Bell,
  Bot,
  Briefcase,
  Building,
  Calendar,
  ClipboardList,
  FileText,
  HeartHandshake,
  LayoutGrid,
  Settings,
  ShieldCheck,
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
    href: '/dashboard/business/coordinator', // Points to coordinator, can be adapted for executive
  },
  {
    title: 'Tasks & Calendar',
    icon: ClipboardList,
    subItems: [
      { title: 'Task Manager', href: '/dashboard/business/tasks' },
      { title: 'Smart Calendar', href: '/dashboard/business/calendar' },
    ],
  },
  {
    title: 'Revenue & Risks',
    icon: Wallet,
    subItems: [
      { title: 'Revenue Risk Radar', href: '/dashboard/business/revenue-risk' },
      { title: 'KPI Tracker', href: '/dashboard/business/kpi-tracker' },
      { title: 'Forecast Variance', href: '/dashboard/business/forecast-variance' },
    ],
  },
  {
    title: 'Clients & Vendors',
    icon: HeartHandshake,
    subItems: [
      { title: 'Client Sentiment', href: '/dashboard/business/client-sentiment' },
      { title: 'Vendor Evaluation', href: '/dashboard/business/vendor-evaluation' },
      { title: 'Contract Health', href: '/dashboard/business/contract-health' },
    ],
  },
  {
    title: 'Reports & Docs',
    icon: FileText,
    subItems: [
      { title: 'Monthly Reports', href: '/dashboard/business/reports' },
      { title: 'SOP Tracker', href: '/dashboard/business/sop-tracker' },
      { title: 'Policy Hub', href: '/dashboard/business/policy-hub' },
    ],
  },
  {
    title: 'AI Tools',
    icon: Bot,
    subItems: [
      { title: 'Ask CoperVise', href: '/dashboard/business/ask-ai' },
      { title: 'Playbook Builder', href: '/dashboard/business/playbook-builder' },
      { title: 'Voice Dashboard', href: '/dashboard/business/voice-dashboard' },
    ],
  },
  {
    title: 'Team Management',
    icon: Users,
    href: '/dashboard/business/team',
  },
    {
    title: 'Competitive Feed',
    icon: BarChart3,
    href: '/dashboard/business/competitive-feed',
  },
];

export function BusinessSidebar() {
  const pathname = usePathname();

  // Determine active dashboard for the main link
  const overviewHref = pathname.includes('/executive') 
    ? '/dashboard/business/executive' 
    : '/dashboard/business/coordinator';
  
  menuItems[0].href = overviewHref;


  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <Accordion type="multiple" className="w-full" defaultValue={['Tasks & Calendar', 'Revenue & Risks', 'Clients & Vendors', 'Reports & Docs', 'AI Tools']}>
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
