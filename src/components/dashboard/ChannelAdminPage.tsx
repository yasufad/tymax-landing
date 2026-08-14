import Link from "next/link";
import styles from "./AdminPage.module.css";

type Screen = "schedule" | "sources" | "distribution" | "media" | "recordings" | "analytics" | "access" | "settings";

const tabs = ["Overview", "Schedule", "Sources", "Distribution", "Media", "Recordings", "Analytics", "Access", "Settings"];
const paths: Record<string, string> = { Overview: "/dashboard/channels/k3-news", Schedule: "/dashboard/channels/k3-news/schedule", Sources: "/dashboard/channels/k3-news/sources", Distribution: "/dashboard/channels/k3-news/distribution", Media: "/dashboard/channels/k3-news/media", Recordings: "/dashboard/channels/k3-news/recordings", Analytics: "/dashboard/channels/k3-news/analytics", Access: "/dashboard/channels/k3-news/access", Settings: "/dashboard/channels/k3-news/settings" };

const content: Record<Screen, { title: string; copy: string; action: string; rows: [string, string, string][] }> = {
  schedule: { title: "Schedule", copy: "Programme planning, publication, and durable timing for K3 News.", action: "Publish schedule", rows: [["Evening News", "18:00–19:00 · Live programme", "On air"], ["Business Tonight", "19:00–20:00 · Scheduled", "Ready"], ["Late Report", "20:00–20:30 · Scheduled", "Draft"]] },
  sources: { title: "Sources", copy: "Source configuration and readiness for the K3 News channel.", action: "Add source", rows: [["Studio Camera 2", "Camera · Main Studio", "Ready"], ["Weather remote", "Remote feed · Required in 44 minutes", "Unavailable"], ["News graphics", "Media source · Main Studio", "Ready"]] },
  distribution: { title: "Distribution", copy: "Destinations and delivery configuration. Live control remains in Studio.", action: "Add destination", rows: [["Tymax playback", "Primary playback · Global", "Healthy"], ["YouTube", "K3 News Live", "Healthy"], ["Twitch", "K3 News", "Reconnecting"]] },
  media: { title: "Channel media", copy: "Assets available to K3 News and their schedule usage.", action: "Add media", rows: [["Evening News opener", "Ready · 00:18", "In use"], ["Technical Difficulties Slate", "Ready · 00:30", "In use"], ["Business Tonight title", "Ready · 00:12", "Available"]] },
  recordings: { title: "Channel recordings", copy: "Archive policy and finalised recordings for K3 News.", action: "Manage recording policy", rows: [["Evening News — 13 August", "Finalised · 59:42", "Ready"], ["Evening News — 12 August", "Finalised · 58:51", "Ready"], ["Evening News — 11 August", "Finalisation failed", "Recovery available"]] },
  analytics: { title: "Channel analytics", copy: "Historical audience and playback performance for K3 News.", action: "Export report", rows: [["Viewer-minutes", "Current period", "910K"], ["Unique viewers", "Current period", "82K"], ["Playback success", "Delivered sessions", "99.5%"]] },
  access: { title: "Channel access", copy: "Role Grants that apply to K3 News. Effective access is shown here.", action: "Add role grant", rows: [["Yasu", "Owner · Organisation scope", "Full access"], ["Sarah", "Producer · Organisation scope", "Operations access"], ["Daniel", "Engineer · K3 News", "Infrastructure access"]] },
  settings: { title: "Channel settings", copy: "Identity, scheduling defaults, distribution defaults, and recording policy.", action: "Save changes", rows: [["Channel identity", "Name, artwork, and public details", "Configure"], ["Scheduling defaults", "Timezone and publication policy", "Configure"], ["Recording policy", "Optional recording entitlement", "Disabled"]] },
};

export default function ChannelAdminPage({ screen }: { screen: Screen }) {
  const page = content[screen];
  return <div className={styles.page}>
    <header className={styles.topbar}><span className={styles.crumbs}>K3 Media <strong>/ K3 News</strong></span><Link className={styles.buttonSecondary} href="/dashboard/channels/k3-news">Channel overview</Link></header>
    <nav className={styles.tabs} aria-label="K3 News administration">{tabs.map((tab) => <Link key={tab} className={`${styles.tab} ${tab.toLowerCase() === screen ? styles.tabActive : ""}`} href={paths[tab]}>{tab}</Link>)}</nav>
    <section className={styles.heading}><div><p className={styles.eyebrow}>K3 News</p><h1>{page.title}</h1></div><p>{page.copy}</p><button className={styles.button} type="button">{page.action}</button></section>
    <section className={styles.section}><div className={styles.list}>{page.rows.map(([name, detail, state]) => <article className={styles.row} key={name}><div><h3>{name}</h3><p>{detail}</p></div><span className={styles.status}>{state}</span><button className={styles.buttonQuiet} type="button">Inspect</button></article>)}</div></section>
  </div>;
}
