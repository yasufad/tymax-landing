import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sign in | Tymax",
  description: "Sign in to Tymax with Google.",
};

export default function SignInPage() {
  return (
    <main className={`${styles.page} auth-page`}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.wash} aria-hidden="true" />

      <Link className={`${styles.brand} mxd-logo`} href="/" aria-label="Tymax home">
        <img className={`${styles.brandMark} mxd-logo__image`} src="/img/tymax-logo.svg" alt="" />
        <div className="mxd-logo__text">
          <span className="mxd-scramble">Tymax</span>
        </div>
      </Link>

      <section className={styles.content} aria-labelledby="sign-in-heading">
        <div>
          <p className={styles.eyebrow}>TYMAX / ACCESS</p>
          <h1 id="sign-in-heading" className={styles.heading}>
            Your channel starts here.
          </h1>
        </div>

        <button type="button" className={`btn btn-default-icon btn-default-outline btn-default-fullwidth slide-right ${styles.button}`}>
          <span className="btn-caption mxd-scramble">Continue with Google</span>
          <i className={styles.googleMark}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M21.8 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.5a4.7 4.7 0 0 1-2 3.1v2.4h3.2c1.9-1.8 3.1-4.3 3.1-7.2Z" />
            <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.6L15.5 17A6 6 0 0 1 6.6 14l-3.3 2.5A10 10 0 0 0 12 22Z" />
            <path fill="#FBBC05" d="M6.6 14a6 6 0 0 1 0-4L3.3 7.5a10 10 0 0 0 0 9L6.6 14Z" />
            <path fill="#EA4335" d="M12 6.1c1.5 0 2.9.5 3.9 1.5l2.9-2.9A10 10 0 0 0 3.3 7.5L6.6 10a6 6 0 0 1 5.4-3.9Z" />
            </svg>
          </i>
        </button>
      </section>
    </main>
  );
}
