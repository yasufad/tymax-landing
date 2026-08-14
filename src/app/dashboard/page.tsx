import type { Metadata } from "next";
import styles from "./dashboard.module.css";

export const metadata: Metadata = {
  title: "Dashboard | Tymax",
  description: "Manage your Tymax channel.",
};

export default function DashboardPage() {
  return (
    <main>
      <header className={styles.topbar}>
        <span className={styles.metaLabel}>Dashboard / Overview</span>
        <span className={styles.date}>Channel control</span>
      </header>

      <div className={styles.pageHeading}>
        <div>
          <p className={styles.eyebrow}>Your workspace</p>
          <h1 className={styles.title}>Your channel, at a glance.</h1>
        </div>
      </div>

      <section className={styles.overviewGrid} aria-label="Channel overview">
        <article className={`${styles.card} ${styles.statusCard}`}>
          <p className={styles.cardTitle}>Channel status</p>
          <div className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            Ready to set up
          </div>
          <p className={styles.cardCopy}>
            Add a channel when you are ready to bring your first programme on air.
          </p>
        </article>

        <article className={`${styles.card} ${styles.usageCard}`}>
          <p className={styles.cardTitle}>Usage this period</p>
          <p className={styles.usageValue}>0 <span>used</span></p>
          <div className={styles.progress} aria-label="No usage recorded">
            <span className={styles.progressValue} />
          </div>
        </article>

        <article className={`${styles.card} ${styles.planCard}`}>
          <p className={styles.cardTitle}>Current plan</p>
          <p className={styles.planValue}>Not set</p>
          <p className={styles.planMeta}>Plan details will appear here.</p>
        </article>
      </section>

      <section className={styles.lowerGrid}>
        <article className={styles.emptyState}>
          <div className={styles.cardHeader}>
            <p className={styles.cardTitle}>Channels</p>
            <span className={styles.metaLabel}>0 total</span>
          </div>
          <div className={styles.emptyContent}>
            <h2 className={styles.emptyTitle}>Nothing is on air yet.</h2>
            <p className={styles.emptyCopy}>
              Your channels, schedules, destinations, and audience activity will live here.
            </p>
          </div>
        </article>

        <article className={styles.activity}>
          <div className={styles.cardHeader}>
            <p className={styles.cardTitle}>Recent activity</p>
            <span className={styles.metaLabel}>Latest</span>
          </div>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div>
                <p className={styles.activityName}>Your workspace is ready</p>
                <p className={styles.activityCopy}>Channel activity will appear here.</p>
              </div>
              <span className={styles.activityTime}>Now</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
