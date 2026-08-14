import type { Metadata } from "next";
import {
  ArrowUpRightIcon,
  BroadcastIcon,
  CheckIcon,
  LightningIcon,
  WaveformIcon,
} from "@phosphor-icons/react/ssr";
import { SidebarTrigger } from "@/components/ui/sidebar";
import styles from "./dashboard.module.css";

export const metadata: Metadata = {
  title: "Dashboard | Tymax",
  description: "Manage your Tymax channel.",
};

export default function DashboardPage() {
  return (
    <div>
      <header className={styles.topbar}>
        <div className="flex items-center gap-3">
          <SidebarTrigger aria-label="Toggle dashboard navigation" />
          <span className={styles.metaLabel}>Overview</span>
        </div>
        <span className={styles.date}>Workspace control</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Control room</p>
          <h1 className={styles.title}>Set up your first channel.</h1>
          <p className={styles.introduction}>
            Bring together your programme, destinations, and audience activity in one place.
          </p>
          <button className={styles.primaryAction} type="button">
            <BroadcastIcon weight="bold" aria-hidden="true" />
            Create a channel
            <ArrowUpRightIcon weight="bold" aria-hidden="true" />
          </button>
        </div>
        <div className={styles.heroSignal} aria-hidden="true">
          <div className={styles.signalMark}>
            <WaveformIcon weight="light" />
          </div>
          <span>Awaiting signal</span>
        </div>
      </section>

      <section className={styles.lowerGrid}>
        <article className={styles.setupCard}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardTitle}>Getting started</p>
              <h2 className={styles.sectionTitle}>A considered first broadcast.</h2>
            </div>
            <LightningIcon className={styles.cardIcon} weight="regular" aria-hidden="true" />
          </div>
          <ol className={styles.checklist}>
            <li className={styles.checklistItem}>
              <span className={styles.stepNumber}>01</span>
              <div>
                <h3>Create your channel</h3>
                <p>Give your programme a home before you go live.</p>
              </div>
            </li>
            <li className={styles.checklistItem}>
              <span className={styles.stepNumber}>02</span>
              <div>
                <h3>Connect a destination</h3>
                <p>Choose where your audience will watch and listen.</p>
              </div>
            </li>
            <li className={styles.checklistItem}>
              <span className={styles.stepNumber}>03</span>
              <div>
                <h3>Schedule your first broadcast</h3>
                <p>Set the time, then let Tymax handle the delivery.</p>
              </div>
            </li>
          </ol>
          <p className={styles.setupNote}>
            <CheckIcon weight="bold" aria-hidden="true" /> No setup has been started yet.
          </p>
        </article>

        <aside className={styles.workspaceCard}>
          <div className={styles.cardHeader}>
            <p className={styles.cardTitle}>Workspace</p>
            <span className={styles.metaLabel}>Current period</span>
          </div>
          <dl className={styles.summaryList}>
            <div>
              <dt>Channels</dt>
              <dd>0</dd>
            </div>
            <div>
              <dt>Usage</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt>Plan</dt>
              <dd>Not selected</dd>
            </div>
          </dl>
          <p className={styles.summaryFootnote}>Usage will be measured once your channel is active.</p>
        </aside>
      </section>
    </div>
  );
}
