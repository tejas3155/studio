
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Bot,
  Briefcase,
  ClipboardList,
  DollarSign,
  FileText,
  LayoutGrid,
  Rocket,
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
    href: '/dashboard/startup/coordinator', // Points to coordinator, can be adapted for executive
  },
  {
    title: 'Product & Growth',
    icon: Rocket,
    subItems: [
      { title: 'Product Launch', href: '/dashboard/startup/product-launch' },
      { title: 'KPI Tracker', href: '/dashboard/startup/kpi-tracker' },
      { title: 'Customer Support', href: '/dashboard/startup/support' },
    ],
  },
  {
    title: 'Finance & Fundraising',
    icon: DollarSign,
    subItems: [
      { title: 'Revenue Risk', href: '/dashboard/startup/revenue-risk' },
      { title: 'Burn Rate Monitor', href: '/dashboard/startup/burn-rate' },
      { title: 'Fundraising CRM', href: '/dashboard/startup/fundraising' },
      { title: 'Cap Table', href: '/dashboard/startup/cap-table' },
    ],
  },
  {
    title: 'Operations',
    icon: ClipboardList,
    subItems: [
      { title: 'Tasks & Calendar', href: '/dashboard/startup/tasks' },
      { title: 'Documents Hub', href: '/dashboard/startup/docs' },
      { title: 'Vendor Evaluation', href: '/dashboard/startup/vendors' },
    ],
  },
   {
    title: 'Team & Compliance',
    icon: Users,
    subItems: [
      { title: 'Recruiting', href: '/dashboard/startup/recruiting' },
      { title: 'Employee Sentiment', href: '/dashboard/startup/sentiment' },
      { title: 'Legal & Compliance', href: '/dashboard/startup/legal' },
    ],
  },
  {
    title: 'AI Tools',
    icon: Bot,
    subItems: [
      { title: 'Ask CoperVise', href: '/dashboard/startup/ask-ai' },
      { title: 'Playbook Builder', href: '/dashboard/startup/playbook-builder' },
      { title: 'Voice Dashboard', href: '/dashboard/startup/voice-dashboard' },
      { title: 'Investor Email AI', href: '/dashboard/startup/investor-email' },
    ],
  },
  {
    title: 'Market Intelligence',
    icon: BarChart3,
    href: '/dashboard/startup/market-intel',
  },
];

export function StartupSidebar() {
  const pathname = usePathname();

  // Determine active dashboard for the main link
  const overviewHref = pathname.includes('/executive') 
    ? '/dashboard/startup/executive' 
    : '/dashboard/startup/coordinator';
  
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
