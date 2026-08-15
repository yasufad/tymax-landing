"use client";

import { usePathname } from "next/navigation";
import DashboardUtilities, { OrganisationControl } from "@/components/dashboard/DashboardUtilities";
import { SidebarTrigger } from "@/components/ui/sidebar";
import styles from "./DashboardHeader.module.css";

const pathLabels: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/channels": "Channels",
  "/dashboard/channels/k3-news": "K3 News",
  "/dashboard/channels/k3-news/schedule": "K3 News / Schedule",
  "/dashboard/channels/k3-news/sources": "K3 News / Sources",
  "/dashboard/channels/k3-news/distribution": "K3 News / Distribution",
  "/dashboard/channels/k3-news/media": "K3 News / Media",
  "/dashboard/channels/k3-news/recordings": "K3 News / Recordings",
  "/dashboard/channels/k3-news/analytics": "K3 News / Analytics",
  "/dashboard/channels/k3-news/access": "K3 News / Access",
  "/dashboard/channels/k3-news/settings": "K3 News / Settings",
  "/dashboard/media": "Media library",
  "/dashboard/recordings": "Recordings",
  "/dashboard/analytics": "Analytics",
  "/dashboard/usage": "Usage",
  "/dashboard/members": "Members",
  "/dashboard/members/invite": "Invite member",
  "/dashboard/roles": "Roles",
  "/dashboard/roles/weekend-operator": "Weekend Operator Role",
  "/dashboard/integrations": "Integrations",
  "/dashboard/nodes": "Nodes",
  "/dashboard/billing": "Billing and usage",
  "/dashboard/settings": "Settings",
  "/dashboard/account": "Account",
  "/dashboard/switcher": "Switch organisation",
  "/dashboard/organisation": "Create organisation",
  "/dashboard/invitations": "Invitation",
  "/dashboard/forbidden": "Access control",
};

export default function DashboardHeader() {
  const pathname = usePathname();
  const currentSection = pathLabels[pathname] || "Administration";

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <SidebarTrigger aria-label="Toggle dashboard navigation" />
        <OrganisationControl />
        <span className={styles.crumbs}>
          <span className={styles.separator}>/</span>
          <strong>{currentSection}</strong>
        </span>
      </div>
      <div className={styles.right}>
        <DashboardUtilities />
      </div>
    </header>
  );
}
