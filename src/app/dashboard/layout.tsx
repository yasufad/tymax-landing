import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./dashboard.module.css";

const navigationItems = [
  { label: "Overview", icon: "◉", href: "/dashboard", active: true },
  { label: "Channels", icon: "◌" },
  { label: "Usage", icon: "◫" },
  { label: "Billing", icon: "◇" },
  { label: "Settings", icon: "⋮" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.shell} dashboard-shell`}>
      <aside className={styles.sidebar} aria-label="Dashboard navigation">
        <Link className={styles.logo} href="/" aria-label="Tymax home">
          <img className={styles.logoMark} src="/img/tymax-logo.svg" alt="" />
          <span className={styles.logoName}>Tymax</span>
        </Link>

        <div className={styles.workspace}>
          <div>
            <span className={styles.workspaceLabel}>Workspace</span>
            <span className={styles.workspaceName}>Your channel</span>
          </div>
          <span className={styles.workspaceIcon} aria-hidden="true">⌄</span>
        </div>

        <nav className={styles.nav}>
          <p className={styles.navLabel}>Workspace</p>
          {navigationItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                className={`${styles.navLink} ${item.active ? styles.navLinkActive : ""}`}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
              >
                <span className={styles.navIcon} aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ) : (
              <span key={item.label} className={styles.navLink} aria-disabled="true">
                <span className={styles.navIcon} aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </span>
            ),
          )}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.accountLink}>
            <span className={styles.avatar} aria-hidden="true">YT</span>
            <span>Your account</span>
          </div>
        </div>
      </aside>

      <div className={styles.main}>{children}</div>
    </div>
  );
}
