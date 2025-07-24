
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/settings/sidebar-nav";
import { AccountSettings } from "@/components/settings/account";
import { WorkspaceSettings } from "@/components/settings/workspace";
import { NotificationsSettings } from "@/components/settings/notifications";
import { IntegrationsSettings } from "@/components/settings/integrations";
import { BillingSettings } from "@/components/settings/billing";
import { SecuritySettings } from "@/components/settings/security";
import { AdvancedSettings } from "@/components/settings/advanced";


export default function SettingsPage({ searchParams }: { searchParams: { tab: string } }) {

    const sidebarNavItems = [
      {
        title: "Account",
        href: "/settings",
      },
      {
        title: "Workspace",
        href: "/settings?tab=workspace",
      },
      {
        title: "Notifications",
        href: "/settings?tab=notifications",
      },
      {
        title: "Integrations",
        href: "/settings?tab=integrations",
      },
       {
        title: "Billing",
        href: "/settings?tab=billing",
      },
       {
        title: "Security",
        href: "/settings?tab=security",
      },
       {
        title: "Advanced",
        href: "/settings?tab=advanced",
      },
    ]

    const activeTab = searchParams.tab || "account";

  return (
    <div className="space-y-6 p-4 md:p-10 pb-16 block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-4xl">
            {activeTab === 'account' && <AccountSettings />}
            {activeTab === 'workspace' && <WorkspaceSettings />}
            {activeTab === 'notifications' && <NotificationsSettings />}
            {activeTab === 'integrations' && <IntegrationsSettings />}
            {activeTab === 'billing' && <BillingSettings />}
            {activeTab === 'security' && <SecuritySettings />}
            {activeTab === 'advanced' && <AdvancedSettings />}
        </div>
      </div>
    </div>
  )
}
