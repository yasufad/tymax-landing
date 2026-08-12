import Link from "next/link";

export default function Footer() {
  return (
    <footer id="mxd-footer" className="mxd-footer blur-section">
      <div className="mxd-container grid-l-container">

        {/* Footer Block - Navigation v2 Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-footer__item">
                <nav className="mxd-footer__nav02">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-md-6 mxd-footer-nav02__item mxd-grid-item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down">
                              <span>/ Discover</span>
                            </p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li><Link className="anim-uni-slide-down" href="/"><span>Home</span></Link></li>
                              <li><Link className="anim-uni-slide-down" href="/#how-it-works"><span>How it works</span></Link></li>
                              <li><Link className="anim-uni-slide-down" href="/#live"><span>Live</span></Link></li>
                              <li><Link className="anim-uni-slide-down" href="/#distribution"><span>Distribution</span></Link></li>
                              <li><Link className="anim-uni-slide-down" href="/#audience"><span>Audience</span></Link></li>
                              <li><Link className="anim-uni-slide-down" href="/pricing"><span>Pricing</span></Link></li>
                              <li><Link className="anim-uni-slide-down" href="/#early-access"><span>Early Access</span></Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mxd-footer-nav02__item mxd-grid-item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down">
                              <span>/ Contact</span>
                            </p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li>
                                <a className="anim-uni-slide-down" href="mailto:hello@k3hq.com?subject=Message%20from%20your%20site">
                                  <span>hello@k3hq.com</span>
                                </a>
                              </li>
                              <li>
                                <span className="anim-uni-slide-down">
                                  <span>A K3HQ product</span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down">
                              <span>/ Info</span>
                            </p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li>
                                <Link className="anim-uni-slide-down" href="/pricing"><span>Pricing</span></Link>
                              </li>
                              <li>
                                <Link className="anim-uni-slide-down" href="/#faq"><span>FAQ</span></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__socials-list">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 mxd-footer-nav02__item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down">
                              <span>/ Ecosystem</span>
                            </p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <a className="socials-list__item slide-right-up" href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                              <div className="socials-list__divider divider-top anim-uni-clip-in"></div>
                              <div className="socials-list__info">
                                <div className="socials-list__number anim-uni-slide-down"><span>[01]</span></div>
                                <div className="socials-list__name anim-uni-slide-down"><span>YouTube</span></div>
                              </div>
                              <div className="socials-list__arrow anim-uni-slide-down">
                                <i>
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                    <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z"/>
                                  </svg>
                                </i>
                              </div>
                              <div className="socials-list__divider divider-bottom anim-uni-clip-in"></div>
                            </a>
                            <a className="socials-list__item slide-right-up" href="https://x.com/" target="_blank" rel="noopener noreferrer">
                              <div className="socials-list__divider divider-top anim-uni-clip-in"></div>
                              <div className="socials-list__info">
                                <div className="socials-list__number anim-uni-slide-down"><span>[02]</span></div>
                                <div className="socials-list__name anim-uni-slide-down"><span>X</span></div>
                              </div>
                              <div className="socials-list__arrow anim-uni-slide-down">
                                <i>
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                    <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z"/>
                                  </svg>
                                </i>
                              </div>
                              <div className="socials-list__divider divider-bottom anim-uni-clip-in"></div>
                            </a>
                            <a className="socials-list__item slide-right-up" href="https://twitch.tv/" target="_blank" rel="noopener noreferrer">
                              <div className="socials-list__divider divider-top anim-uni-clip-in"></div>
                              <div className="socials-list__info">
                                <div className="socials-list__number anim-uni-slide-down"><span>[03]</span></div>
                                <div className="socials-list__name anim-uni-slide-down"><span>Twitch</span></div>
                              </div>
                              <div className="socials-list__arrow anim-uni-slide-down">
                                <i>
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                    <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z"/>
                                  </svg>
                                </i>
                              </div>
                              <div className="socials-list__divider divider-bottom anim-uni-clip-in"></div>
                            </a>
                            <a className="socials-list__item slide-right-up" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                              <div className="socials-list__divider divider-top anim-uni-clip-in"></div>
                              <div className="socials-list__info">
                                <div className="socials-list__number anim-uni-slide-down"><span>[04]</span></div>
                                <div className="socials-list__name anim-uni-slide-down"><span>LinkedIn</span></div>
                              </div>
                              <div className="socials-list__arrow anim-uni-slide-down">
                                <i>
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                    <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z"/>
                                  </svg>
                                </i>
                              </div>
                              <div className="socials-list__divider divider-bottom anim-uni-clip-in"></div>
                            </a>
                            <a className="socials-list__item slide-right-up" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                              <div className="socials-list__divider divider-top anim-uni-clip-in"></div>
                              <div className="socials-list__info">
                                <div className="socials-list__number anim-uni-slide-down"><span>[05]</span></div>
                                <div className="socials-list__name anim-uni-slide-down"><span>GitHub</span></div>
                              </div>
                              <div className="socials-list__arrow anim-uni-slide-down">
                                <i>
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                    <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z"/>
                                  </svg>
                                </i>
                              </div>
                              <div className="socials-list__divider divider-bottom anim-uni-clip-in"></div>
                            </a>
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
        {/* Footer Block - Navigation v2 End */}

        {/* Footer Block - Controls Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-footer__item"></div>
              <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__controls-middle">
                  <div className="anim-uni-slide-down">
                    <a id="to-top" className="btn btn-line-icon btn-line-default slide-up" href="#">
                      <span className="btn-caption mxd-scramble">Back to Top</span>
                      <i>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                          <path d="M0,7.2h3.6v3.6H0V7.2z M10.8,3.6V0H7.2v3.6H3.6v3.6h3.6V18h3.6V7.2h3.6V3.6H10.8z M14.4,7.2v3.6H18V7.2H14.4z"/>
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Controls End */}

        {/* Footer Block - Fullwidth Text Start */}
        <div className="mxd-block">
          <div className="mxd-footer__fw-mark mxd-grid-item">
            <div className="fw-mark__wrap">
              <div className="fw-mark__content">
                <span className="anim-uni-chars">Tymax</span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Fullwidth Text End */}

        {/* Footer Block - Data Start */}
        <div className="mxd-block">
          <div className="mxd-footer__data">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                  <div className="mxd-footer__data-item anim-uni-fade-in">
                    <p className="footer-data">
                      <span>Copyright K3HQ. All rights reserved.</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-footer__item">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item">
                        <div className="mxd-footer__data-item anim-uni-fade-in">
                          <p className="footer-data">
                            <span>Tymax is a K3HQ product.</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item">
                        <div className="mxd-footer__data-item anim-uni-fade-in justify-end">
                          <p className="footer-data">
                            <span>©2026</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Data End */}

      </div>
    </footer>
  );
}
