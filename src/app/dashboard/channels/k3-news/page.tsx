import type { Metadata } from "next";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import styles from "./channel.module.css";

export const metadata: Metadata = {
  title: "K3 News | K3 Media | Tymax",
  description: "Administrative overview for the K3 News channel.",
};

const health = [
  { label: "Programme", state: "Healthy", tone: "healthy" },
  { label: "Tymax playback", state: "Healthy", tone: "healthy" },
  { label: "YouTube", state: "Healthy", tone: "healthy" },
  { label: "Twitch", state: "Reconnecting", tone: "warning" },
];

const channelTabs = [
  ["Overview", "/dashboard/channels/k3-news"], ["Schedule", "/dashboard/channels/k3-news/schedule"], ["Sources", "/dashboard/channels/k3-news/sources"], ["Distribution", "/dashboard/channels/k3-news/distribution"], ["Media", "/dashboard/channels/k3-news/media"], ["Recordings", "/dashboard/channels/k3-news/recordings"], ["Analytics", "/dashboard/channels/k3-news/analytics"], ["Access", "/dashboard/channels/k3-news/access"], ["Settings", "/dashboard/channels/k3-news/settings"],
];

export default function K3NewsOverviewPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.channelNavigation} aria-label="Channel administration">
        {channelTabs.map(([label, href]) => <Link key={label} className={label === "Overview" ? styles.active : undefined} href={href}>{label}</Link>)}
      </nav>

      <section className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>Channel administration</p>
          <h1>K3 News</h1>
        </div>
        <div className={styles.liveState}>
          <span className={styles.statusDot} aria-hidden="true" />
          <div><strong>On air</strong><span>Evening News · Started 18:00</span></div>
        </div>
      </section>

      <div className={styles.overviewGrid}>
        <section className={styles.healthCard} aria-labelledby="health-heading">
          <div className={styles.cardHeading}>
            <div><p>Current health</p><h2 id="health-heading">Live delivery is stable.</h2></div>
            <span className={styles.healthSummary}>3 healthy · 1 warning</span>
          </div>
          <dl className={styles.healthList}>
            {health.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd><span className={`${styles.healthDot} ${styles[item.tone]}`} aria-hidden="true" />{item.state}</dd>
              </div>
            ))}
          </dl>
        </section>

        <aside className={styles.nextCard}>
          <p>Next</p>
          <h2>Business Tonight</h2>
          <span>19:00 · Scheduled</span>
          <div className={styles.cardRule} />
          <p className={styles.riskLabel}>Next risk</p>
          <h3>Weather remote source unavailable</h3>
          <span>Needed in 44 minutes</span>
          <button type="button">Inspect source</button>
        </aside>
      </div>

      <section className={styles.section} aria-labelledby="programme-heading">
        <div className={styles.sectionHeading}>
          <div><p>Programme</p><h2 id="programme-heading">Now and next.</h2></div>
          <button type="button">View schedule</button>
        </div>
        <div className={styles.programmeList}>
          <article><span>Now</span><div><h3>Evening News</h3><p>18:00–19:00 · Live programme</p></div><strong>On air</strong></article>
          <article><span>Next</span><div><h3>Business Tonight</h3><p>19:00–20:00 · Scheduled</p></div><strong>Ready</strong></article>
        </div>
      </section>

      <section className={styles.notice}>
        <div><p>Administrative boundary</p><h2>Tymax Studio controls the live production.</h2><span>This workspace reports channel state and manages durable configuration. Preview, Take, and production-switching controls remain in Studio.</span></div>
        <button className={styles.studioAction} type="button">Open in Tymax Studio <ArrowSquareOutIcon weight="bold" aria-hidden="true" /></button>
      </section>
    </div>
  );
}
