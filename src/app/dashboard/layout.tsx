import {
  BroadcastIcon,
  CaretDownIcon,
  ChartLineUpIcon,
  CreditCardIcon,
  GearIcon,
  HouseIcon,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./dashboard.module.css";

const navigationItems = [
  { label: "Overview", icon: HouseIcon, href: "/dashboard", active: true },
  { label: "Channels", icon: BroadcastIcon },
  { label: "Usage", icon: ChartLineUpIcon },
  { label: "Billing", icon: CreditCardIcon },
  { label: "Settings", icon: GearIcon },
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
          <CaretDownIcon className={styles.workspaceIcon} size={16} weight="bold" aria-hidden="true" />
        </div>

        <nav className={styles.nav}>
          <p className={styles.navLabel}>Workspace</p>
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return item.href ? (
              <Link
                key={item.label}
                className={`${styles.navLink} ${item.active ? styles.navLinkActive : ""}`}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
              >
                <Icon className={styles.navIcon} size={18} weight="regular" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            ) : (
              <span key={item.label} className={styles.navLink} aria-disabled="true">
                <Icon className={styles.navIcon} size={18} weight="regular" aria-hidden="true" />
                <span>{item.label}</span>
              </span>
            );
          })}
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
