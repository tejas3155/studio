
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  FileText,
  LayoutGrid,
  Settings,
  ShieldCheck,
  Users,
  Wallet,
  ClipboardList,
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
    href: '/dashboard/corporate/coordinator', // Points to coordinator, can be adapted for executive
  },
  {
    title: 'Compliance & Risk',
    icon: ShieldCheck,
    subItems: [
      { title: 'Compliance Dashboard', href: '/dashboard/corporate/compliance' },
      { title: 'Revenue Risk', href: '/dashboard/corporate/revenue-risk' },
      { title: 'Vendor Risk Matrix', href: '/dashboard/corporate/vendor-risk' },
      { title: 'Regulatory Tracker', href: '/dashboard/corporate/regulatory-tracker' },
    ],
  },
  {
    title: 'Operations',
    icon: Building2,
    subItems: [
      { title: 'Tasks & Meetings', href: '/dashboard/corporate/tasks' },
      { title: 'Department Heatmaps', href: '/dashboard/corporate/heatmaps' },
      { title: 'SOP Tracker', href: '/dashboard/corporate/sop-tracker' },
    ],
  },
  {
    title: 'Strategy & Reporting',
    icon: BarChart3,
    subItems: [
      { title: 'Boardroom Briefings', href: '/dashboard/corporate/briefings' },
      { title: 'Executive Snapshots', href: '/dashboard/corporate/snapshots' },
      { title: 'Scenario Planner', href: '/dashboard/corporate/scenario-planner' },
      { title: 'KPI Tracker', href: '/dashboard/corporate/kpi-tracker' },
    ],
  },
  {
    title: 'Documents & Contracts',
    icon: FileText,
    subItems: [
      { title: 'Contract Summarizer', href: '/dashboard/corporate/contracts' },
      { title: "Policy Hub", href: "/dashboard/corporate/policy-hub" },
    ],
  },
   {
    title: 'AI Tools',
    icon: Bot,
    subItems: [
      { title: 'Ask CoperVise', href: '/dashboard/corporate/ask-ai' },
      { title: 'Playbook Builder', href: '/dashboard/corporate/playbook-builder' },
      { title: 'Voice Dashboard', href: '/dashboard/corporate/voice-dashboard' },
    ],
  },
  {
    title: 'Team Management',
    icon: Users,
    href: '/dashboard/corporate/team',
  },
];

export function CorporateSidebar() {
  const pathname = usePathname();

  // Determine active dashboard for the main link
  const overviewHref = pathname.includes('/executive') 
    ? '/dashboard/corporate/executive' 
    : '/dashboard/corporate/coordinator';
  
  menuItems[0].href = overviewHref;

  const defaultOpen = menuItems.filter(item => item.subItems).map(item => item.title);

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <Accordion type="multiple" className="w-full" defaultValue={defaultOpen}>
        {menuItems.map((item) =>
          item.subItems ? (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
              <AccordionTrigger
                className="py-2 text-base hover:no-underline [&_svg]:h-5 [&_svg]:w-5"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="transition-all group-hover:scale-110" />
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
