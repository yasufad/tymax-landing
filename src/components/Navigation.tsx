import Link from "next/link";

export default function Navigation() {
  return (
    <>
      {/* Menu Hamburger Start */}
      <div className="mxd-menu__contain loading-fade">
        <div className="mxd-menu__toggle">
          <a href="#0" className="mxd-menu__hamburger" aria-label="Menu">
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </a>
        </div>
      </div>
      {/* Menu Hamburger End */}

      {/* Navigation Start */}
      <nav className="mxd-menu">
        <div className="mxd-menu__backdrop"></div>

        {/* Menu Overlay Start */}
        <div className="mxd-menu__overlay">
          <div className="mxd-menu__content" data-lenis-prevent>

            {/* Menu Logo Start */}
            <div className="mxd-menu__logo">
              <Link href="/" className="menu-logo">
                <svg className="menu-logo__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1276 987" fill="currentColor">
                  <path d="M432 10 L479 10 L524 12 L567 16 L607 23 L645 32 L680 44 L715 56 L748 70 L780 85 L813 99 L845 114 L877 129 L909 144 L942 158 L976 171 L1010 184 L1045 196 L1082 206 L1122 213 L1166 214 L1203 204 L1231 185 L1245 152 L1231 119 L1234 105 L1256 130 L1265 168 L1252 202 L1226 223 L1194 238 L1155 246 L1112 246 L1071 240 L1034 230 L998 219 L964 206 L930 193 L897 179 L865 164 L832 150 L800 135 L768 120 L735 106 L702 92 L667 80 L630 70 L591 62 L549 57 L503 56 L458 58 L416 63 L376 70 L339 80 L304 92 L271 106 L240 122 L211 140 L184 160 L158 181 L135 205 L113 230 L97 261 L83 294 L72 330 L65 370 L65 413 L74 451 L92 480 L117 494 L137 467 L158 441 L181 417 L206 395 L232 374 L260 355 L290 338 L322 323 L357 311 L397 304 L442 302 L482 309 L512 326 L531 354 L535 395 L528 435 L515 469 L499 500 L481 529 L460 555 L438 580 L415 604 L391 627 L365 648 L338 668 L309 686 L278 702 L242 713 L199 717 L161 708 L141 681 L144 641 L169 619 L174 655 L212 664 L255 662 L291 651 L323 636 L352 618 L378 597 L403 575 L426 551 L448 526 L467 498 L485 469 L500 437 L509 399 L503 358 L476 338 L434 333 L393 339 L358 351 L327 367 L298 385 L272 406 L247 428 L223 451 L200 475 L179 501 L167 526 L207 533 L252 535 L296 538 L318 555 L279 563 L233 562 L191 557 L154 547 L132 568 L115 598 L99 629 L85 662 L72 696 L63 734 L56 774 L55 820 L60 862 L72 897 L91 925 L118 945 L155 955 L201 954 L239 945 L272 931 L302 914 L330 895 L355 873 L380 851 L403 827 L425 802 L446 776 L465 748 L484 720 L503 692 L522 664 L541 636 L559 607 L578 579 L597 551 L616 523 L635 495 L654 467 L673 439 L692 411 L711 383 L732 357 L753 331 L776 307 L800 284 L826 263 L855 245 L890 233 L930 234 L963 248 L975 283 L946 295 L903 295 L870 309 L842 328 L816 349 L793 373 L771 398 L749 423 L729 450 L709 477 L690 505 L670 532 L650 559 L631 587 L611 614 L592 642 L572 669 L552 696 L533 724 L513 751 L493 778 L473 805 L451 830 L428 854 L403 876 L378 898 L351 918 L322 936 L291 952 L257 965 L219 974 L174 976 L133 970 L98 958 L70 939 L50 912 L35 880 L26 842 L22 799 L23 753 L27 710 L35 671 L46 635 L59 601 L73 568 L90 538 L83 512 L58 490 L38 463 L22 432 L13 394 L10 350 L14 307 L24 270 L38 237 L55 207 L74 179 L96 154 L120 131 L145 109 L172 89 L202 72 L233 56 L266 42 L302 31 L339 21 L380 15 L423 11 Z" fillRule="evenodd" />
                </svg>
                {/* logo text */}
                <div className="menu-logo__text">
                  <span>Tymax</span>
                </div>
              </Link>
            </div>
            {/* Menu Logo End */}

            {/* Menu Media Start */}
            <div className="mxd-menu__media">
              <div className="menu-media__wrapper">
                <video preload="auto" autoPlay muted loop playsInline poster="/video/900x1280_menu.webp">
                  <source type="video/mp4" src="/video/900x1280_menu.mp4" />
                  <source type="video/webm" src="/video/900x1280_menu.webm" />
                </video>
              </div>
            </div>
            {/* Menu Media End */}

            {/* Main Navigation Start */}
            <div className="mxd-menu__navigation">
              <div className="mxd-menu__inner">
                <div className="mxd-menu__shadow shadow-top"></div>
                <div className="mxd-menu__caption">
                  <p>Broadcast live.<br />Build something people come back to.</p>
                </div>
                {/* left side */}
                <div className="mxd-menu__left">
                  <div className="main-menu">
                    <div className="main-menu__content">
                      <ul id="main-menu" className="main-menu__accordion">
                        <li className="main-menu__item">
                          <div className="main-menu__divider divider-top"></div>
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 01</span>
                              <span className="main-menu__caption">Explore</span>
                            </p>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z"/>
                              </svg>
                            </div>
                          </div>
                          <ul className="submenu">
                            <li className="submenu__item"><Link href="/#about">Overview</Link></li>
                            <li className="submenu__item"><Link href="/#live">Live Broadcasting</Link></li>
                            <li className="submenu__item"><Link href="/#channels">Channels</Link></li>
                            <li className="submenu__item"><Link href="/#distribution">Distribution</Link></li>
                            <li className="submenu__item"><Link href="/#setup">Your Setup</Link></li>
                            <li className="submenu__item"><Link href="/#grow">Grow From There</Link></li>
                            <li className="submenu__item"><Link href="/#broadcasters">For Broadcasters</Link></li>
                            <li className="submenu__item"><Link href="/#audience">Audience</Link></li>
                            <li className="submenu__item"><Link href="/pricing">Pricing</Link></li>
                            <li className="submenu__item"><Link href="/download">Download</Link></li>
                            <li className="submenu__item"><Link href="/sign-in">Early Access</Link></li>
                          </ul>
                          <div className="main-menu__divider divider-top"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 02</span>
                              <span className="main-menu__caption">Product</span>
                            </p>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z"/>
                              </svg>
                            </div>
                          </div>
                          <ul className="submenu">
                            <li className="submenu__item"><Link href="/#how-it-works">How Tymax Works</Link></li>
                            <li className="submenu__item"><Link href="/#live">Tymax Live</Link></li>
                            <li className="submenu__item"><Link href="/#distribution">Distribution</Link></li>
                            <li className="submenu__item"><Link href="/#setup">Ecosystem</Link></li>
                            <li className="submenu__item"><Link href="/#audience">Audience relationship</Link></li>
                          </ul>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 03</span>
                              <span className="main-menu__caption">Tymax</span>
                            </p>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z"/>
                              </svg>
                            </div>
                          </div>
                          <ul className="submenu">
                            <li className="submenu__item"><Link href="/#about">About Tymax</Link></li>
                            <li className="submenu__item"><Link href="/#capabilities">Capabilities</Link></li>
                            <li className="submenu__item"><Link href="/#broadcasters">Broadcasters</Link></li>
                            <li className="submenu__item"><Link href="/pricing">Pricing</Link></li>
                            <li className="submenu__item"><Link href="/download">Download</Link></li>
                            <li className="submenu__item"><Link href="/#faq">FAQ</Link></li>
                            <li className="submenu__item"><Link href="/sign-in">Early Access</Link></li>
                          </ul>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 04</span>
                              <span className="main-menu__caption">Updates</span>
                            </p>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z"/>
                              </svg>
                            </div>
                          </div>
                          <ul className="submenu">
                            <li className="submenu__item"><Link href="/#insights">From Tymax</Link></li>
                            <li className="submenu__item"><Link href="/#insights">Product Updates</Link></li>
                            <li className="submenu__item"><Link href="/#insights">Broadcasting</Link></li>
                          </ul>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <Link className="main-menu__link" href="/sign-in">
                              <span className="main-menu__number">/ 05</span>
                              <span className="main-menu__caption">Early Access</span>
                            </Link>
                          </div>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* right side */}
                <div className="mxd-menu__right">
                  <div className="menu-contact">
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <Link className="tag tag-m" href="/sign-in">
                            <span className="mxd-scramble">Get Early Access</span>
                          </Link>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://k3hq.com" target="_blank" rel="noopener noreferrer">
                            <span className="mxd-scramble">Tymax by K3HQ</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <span className="tag tag-m">
                            <span>A K3HQ product</span>
                          </span>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://k3hq.com" target="_blank" rel="noopener noreferrer">
                            <span className="mxd-scramble">k3hq.com</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <a className="tag tag-m" href="mailto:hello@k3hq.com?subject=Message%20from%20your%20site">
                            <span className="mxd-scramble">hello@k3hq.com</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li><a className="tag tag-m" href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><span className="mxd-scramble">YouTube</span></a></li>
                        <li><a className="tag tag-m" href="https://x.com/" target="_blank" rel="noopener noreferrer"><span className="mxd-scramble">X</span></a></li>
                        <li><a className="tag tag-m" href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><span className="mxd-scramble">Instagram</span></a></li>
                        <li><a className="tag tag-m" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><span className="mxd-scramble">LinkedIn</span></a></li>
                        <li><a className="tag tag-m" href="https://github.com/" target="_blank" rel="noopener noreferrer"><span className="mxd-scramble">GitHub</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* data bottom line */}
                <div className="mxd-menu__shadow"></div>
                <div className="mxd-menu__data">
                  <div className="menu-data__left">
                    <p className="menu-data__text">Tymax by K3HQ</p>
                  </div>
                  <div className="menu-data__right">
                    <p className="menu-data__text">Copyright K3HQ</p>
                    <p className="menu-data__text">©2026</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Navigation End */}

          </div>
        </div>
        {/* Menu Overlay End */}
      </nav>
      {/* Navigation End */}
    </>
  );
}
