import type { CSSProperties, ReactNode } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import styles from "./dashboard.module.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      className={`${styles.shell} dashboard-shell`}
      style={
        {
          "--sidebar-width": "28rem",
          "--sidebar-width-icon": "6.4rem",
        } as CSSProperties
      }
    >
      <DashboardSidebar />
      <SidebarInset className="flex flex-col min-w-0 min-h-svh flex-1">
        <DashboardHeader />
        <div className={styles.main}>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

