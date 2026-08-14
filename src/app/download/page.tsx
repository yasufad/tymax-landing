import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Tymax",
  description: "Download Tymax for Windows, macOS, or Linux.",
};

const platforms = [
  {
    name: "Windows",
    tag: "Windows 10+",
    description: "A broadcast workstation for your Windows setup.",
    button: "Download for Windows",
    details: ["Windows 10 or later", "64-bit Intel or AMD processor", "Installer coming soon"],
  },
  {
    name: "macOS",
    tag: "macOS 13+",
    description: "A native Tymax workspace for Mac, ready for the studio.",
    button: "Download for macOS",
    details: ["macOS Ventura or later", "Apple silicon and Intel", "Installer coming soon"],
  },
  {
    name: "Linux",
    tag: "Linux",
    description: "A flexible desktop client for Linux broadcast environments.",
    button: "Download for Linux",
    details: ["Ubuntu 22.04+ and compatible distributions", "64-bit Intel or AMD processor", "Package coming soon"],
  },
];

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
    </svg>
  );
}

export default function DownloadPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      <div className="blur-container">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className={`blur-layer blur-${index + 1}`} />
        ))}
      </div>

      <div className="mxd-section blur-section">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block loading-wrap">
            <div className="inner-headline margin-bottom-subtitle">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="inner-headline__breadcrumbs loading-fade">
                      <div className="breadcrumbs__nav">
                        <span>
                          <Link href="/"><span className="mxd-scramble">Home</span></Link>
                        </span>
                        <span className="current-item">Download</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="inner-headline__content has-large-title">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-xl-9 mxd-grid-item">
                            <div className="inner-headline__title pre-subtitle-large">
                              <h1 className="large loading-split">Get Tymax Studio</h1>
                            </div>
                            <div className="inner-headline__subtitle loading-item">
                              <p>Broadcast from your desktop. <span>Choose your platform.</span></p>
                            </div>
                          </div>
                          <div className="col-12 col-xl-3 mxd-grid-item">
                            <div className="inner-headline__tags align-end-desktop tags-large-subtitle">
                              <span className="tag tag-m meta-tag mxd-scramble loading-item">Windows</span>
                              <span className="tag tag-m meta-tag mxd-scramble loading-item">macOS</span>
                              <span className="tag tag-m meta-tag mxd-scramble loading-item">Linux</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mxd-section">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-pricing-table loading-fade">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {platforms.map((platform, index) => (
                    <div key={platform.name} className="col-12 col-xl-4 mxd-pricing-table__item mxd-grid-item animate-card-3">
                      <div className="mxd-pricing-table__inner">
                        <div className="mxd-pricing-table__bg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
                            <g filter={`url(#download-blur-${index})`}>
                              <path fill="var(--highlight)" d="M200,200c0,55.2-44.8,100-100,100S0,255.2,0,200s44.8-100,100-100,100,44.8,100,100Z" />
                            </g>
                            <defs>
                              <filter id={`download-blur-${index}`} x="0" y="0" width="3000" height="5000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feGaussianBlur stdDeviation="60" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                        <div className="mxd-pricing-table__tag">
                          <span className={`tag tag-m tag-bg ${index === 0 ? "accent" : "muted"}`}>{platform.tag}</span>
                        </div>
                        <div className="mxd-pricing-table__data">
                          <div className="pricing-data__header">
                            <p className="pricing-header__title anim-uni-in-up">Tymax <span>{platform.name}</span></p>
                            <p className="pricing-header__descr t-bold anim-uni-in-up">{platform.description}</p>
                          </div>
                          <div className="pricing-data__info">
                            <div className="pricing-data__price">
                              <div className="pricing-data__num anim-uni-in-up">
                                <span className="pricing-data__amount">Free</span>
                              </div>
                              <p className="pricing-data__caption t-small t-muted t-140 anim-uni-in-up">Included with your Tymax account</p>
                            </div>
                            <div className="pricing-data__btnholder anim-uni-in-up">
                              <button className="btn btn-default-icon btn-default-outline btn-default-fullwidth slide-right" type="button">
                                <span className="btn-caption mxd-scramble">{platform.button}</span>
                                <i className="btn-icon"><PlusIcon /></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mxd-pricing-table__plan">
                          <p className="pricing-plan__caption t-bold anim-uni-in-up">Requirements:</p>
                          <div className="pricing-plan__list">
                            <ul className="mxd-check-list">
                              {platform.details.map((detail) => (
                                <li key={detail} className="anim-uni-in-up">
                                  <PlusIcon />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mxd-pricing-table__link anim-uni-in-up">
                          <span>Download availability will be announced with early access.</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
