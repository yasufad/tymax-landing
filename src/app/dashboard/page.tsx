import type { Metadata } from "next";
import DashboardUtilities, { OrganisationControl } from "@/components/dashboard/DashboardUtilities";
import { SidebarTrigger } from "@/components/ui/sidebar";
import styles from "./dashboard.module.css";

export const metadata: Metadata = {
  title: "K3 Media | Tymax",
  description: "Organisation administration for K3 Media.",
};

const channels = [
  { name: "K3 News", state: "On air", health: "Healthy", detail: "Evening News", meta: "2,481 viewers · Operators: Sarah, Yasu", actions: ["View channel", "Open in Studio"], tone: "healthy" },
  { name: "K3 Sports", state: "On air", health: "Degraded", detail: "YouTube reconnecting", meta: "Operator: Daniel", actions: ["Inspect"], tone: "degraded" },
  { name: "K3 Music", state: "Automated", health: "Healthy", detail: "Next: Headlines · 20:00", meta: "No intervention required", actions: ["View channel"], tone: "healthy" },
  { name: "K3 Culture", state: "Offline", health: "", detail: "Next scheduled broadcast: Tomorrow · 09:00", meta: "", actions: ["View channel"], tone: "offline" },
];

export default function DashboardPage() {
  return (
    <div>
      <header className={styles.topbar}>
        <div className={styles.topbarStart}>
          <SidebarTrigger aria-label="Toggle dashboard navigation" />
          <OrganisationControl />
        </div>
        <DashboardUtilities />
      </header>

      <section className={styles.pageHeading}>
        <div>
          <p className={styles.eyebrow}>K3 Media</p>
          <h1 className={styles.title}>Organisation overview</h1>
        </div>
        <p className={styles.introduction}>A clear view of your channels, infrastructure, and the work that needs attention.</p>
      </section>

      <section className={styles.section} aria-labelledby="channels-heading">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>Channels</p>
            <h2 id="channels-heading">What is happening now.</h2>
          </div>
          <button className={styles.primaryAction} type="button">Create channel</button>
        </div>
        <div className={styles.channelList}>
          {channels.map((channel) => (
            <article key={channel.name} className={styles.channelRow}>
              <div className={styles.channelState}>
                <span className={`${styles.statusDot} ${styles[channel.tone]}`} aria-hidden="true" />
                <span>{channel.state}{channel.health ? ` · ${channel.health}` : ""}</span>
              </div>
              <div className={styles.channelDetails}>
                <h3>{channel.name}</h3>
                <p>{channel.detail}</p>
                {channel.meta && <span>{channel.meta}</span>}
              </div>
              <div className={styles.rowActions}>
                {channel.actions.map((action) => <button key={action} type="button">{action}</button>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.lowerGrid}>
        <section className={`${styles.section} ${styles.attentionSection}`} aria-labelledby="attention-heading">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionLabel}>Requires attention</p>
              <h2 id="attention-heading">Two items need review.</h2>
            </div>
          </div>
          <div className={styles.attentionList}>
            <article className={styles.attentionItem}>
              <span className={`${styles.severity} ${styles.high}`}>High</span>
              <div><h3>K3 Sports — YouTube reconnecting</h3><p>Active for 2m 14s · Tymax playback remains healthy.</p></div>
              <button type="button">Inspect incident</button>
            </article>
            <article className={styles.attentionItem}>
              <span className={`${styles.severity} ${styles.warning}`}>Warning</span>
              <div><h3>OB Laptop — Media Runtime update required</h3><p>The node remains online and is operating K3 Sports.</p></div>
              <button type="button">Inspect node</button>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.activitySection}`} aria-labelledby="activity-heading">
          <div className={styles.sectionHeading}>
            <div><p className={styles.sectionLabel}>Recent activity</p><h2 id="activity-heading">Organisation changes.</h2></div>
          </div>
          <ol className={styles.activityList}>
            <li><time>18:42</time><span>Sarah took Studio Camera 2 to Programme</span></li>
            <li><time>18:31</time><span>Daniel acknowledged the YouTube incident</span></li>
            <li><time>17:54</time><span>Tomorrow&apos;s K3 News schedule was published</span></li>
            <li><time>16:08</time><span>Irene invited Alex to K3 Media</span></li>
          </ol>
        </section>
      </div>

      <section className={`${styles.section} ${styles.nodesSection}`} aria-labelledby="nodes-heading">
        <div className={styles.sectionHeading}>
          <div><p className={styles.sectionLabel}>Nodes</p><h2 id="nodes-heading">Infrastructure readiness.</h2></div>
          <button className={styles.secondaryAction} type="button">Register node</button>
        </div>
        <div className={styles.nodeGrid}>
          <article><span className={`${styles.statusDot} ${styles.healthy}`} aria-hidden="true" /><h3>Main Studio</h3><p>Online · Windows · Media Runtime ready</p><span>Operating K3 News</span></article>
          <article><span className={`${styles.statusDot} ${styles.degraded}`} aria-hidden="true" /><h3>OB Laptop</h3><p>Online · Media Runtime update available</p><span>Operating K3 Sports</span></article>
          <article><span className={`${styles.statusDot} ${styles.offline}`} aria-hidden="true" /><h3>Backup Encoder</h3><p>Offline · Last seen 2 days ago</p><span>No channel assignment</span></article>
        </div>
      </section>
    </div>
  );
}
