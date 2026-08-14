import type { Metadata } from "next";
import { ArrowSquareOutIcon, CaretRightIcon } from "@phosphor-icons/react/ssr";
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

export default function K3NewsOverviewPage() {
  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <span>K3 Media</span>
          <CaretRightIcon aria-hidden="true" />
          <strong>K3 News</strong>
        </nav>
        <button className={styles.studioAction} type="button">
          Open in Tymax Studio <ArrowSquareOutIcon weight="bold" aria-hidden="true" />
        </button>
      </header>

      <nav className={styles.channelNavigation} aria-label="Channel administration">
        <button className={styles.active} type="button">Overview</button>
        <button type="button">Schedule</button>
        <button type="button">Sources</button>
        <button type="button">Distribution</button>
        <button type="button">Media</button>
        <button type="button">Recordings</button>
        <button type="button">Analytics</button>
        <button type="button">Access</button>
        <button type="button">Settings</button>
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
