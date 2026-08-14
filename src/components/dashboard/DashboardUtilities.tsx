"use client";

import { BellIcon, CaretDownIcon, QuestionIcon, UserCircleIcon } from "@phosphor-icons/react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./DashboardUtilities.module.css";

export function OrganisationControl() {
  return (
    <Dialog>
      <DialogTrigger className={styles.organisationButton}>
        K3 Media <CaretDownIcon weight="bold" aria-hidden="true" />
      </DialogTrigger>
      <DialogContent className={styles.dialog}>
        <DialogHeader>
          <DialogTitle className={styles.dialogTitle}>Switch organisation</DialogTitle>
          <DialogDescription className={styles.dialogDescription}>Organisation context determines the channels, team, and infrastructure you administer.</DialogDescription>
        </DialogHeader>
        <div className={styles.dialogList}>
          <Link className={styles.dialogItem} href="/dashboard"><span><strong>K3 Media</strong><br />4 Channels · Owner</span><span>Current</span></Link>
          <Link className={styles.dialogItem} href="/dashboard/switcher"><span><strong>Tymax Demo</strong><br />2 Channels · Administrator</span><span>Switch</span></Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function DashboardUtilities() {
  return (
    <div className={styles.utilities}>
      <Dialog>
        <DialogTrigger className={styles.utilityButton}><BellIcon weight="regular" aria-hidden="true" /><span>Alerts</span></DialogTrigger>
        <DialogContent className={styles.dialog}>
          <DialogHeader><DialogTitle className={styles.dialogTitle}>Alerts</DialogTitle><DialogDescription className={styles.dialogDescription}>Current operational events needing awareness.</DialogDescription></DialogHeader>
          <div className={styles.dialogList}>
            <div className={styles.dialogItem}><span><strong>K3 Sports</strong><br />YouTube is reconnecting</span><span>2m ago</span></div>
            <div className={styles.dialogItem}><span><strong>OB Laptop</strong><br />Media Runtime update required</span><span>Today</span></div>
          </div>
          <Link className={styles.dialogLink} href="/dashboard">View organisation overview</Link>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger className={styles.utilityButton}><QuestionIcon weight="regular" aria-hidden="true" /><span>Help</span></DialogTrigger>
        <DialogContent className={styles.dialog}>
          <DialogHeader><DialogTitle className={styles.dialogTitle}>Help and support</DialogTitle><DialogDescription className={styles.dialogDescription}>Find the right place for operational and administrative work.</DialogDescription></DialogHeader>
          <div className={styles.dialogList}>
            <div className={styles.dialogItem}><span><strong>Live production</strong><br />Open Tymax Studio for Preview, Take, and switching.</span></div>
            <div className={styles.dialogItem}><span><strong>Administration</strong><br />Manage channels, access, nodes, and billing here.</span></div>
          </div>
          <a className={styles.dialogLink} href="mailto:hello@k3hq.com?subject=Tymax%20support">Contact support</a>
        </DialogContent>
      </Dialog>
      <Link className={styles.accountLink} href="/dashboard/account"><UserCircleIcon weight="regular" aria-hidden="true" /><span>Yasu</span><CaretDownIcon weight="bold" aria-hidden="true" /></Link>
    </div>
  );
}
