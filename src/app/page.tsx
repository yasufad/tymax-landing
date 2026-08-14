import Link from "next/link";

export default function HomePage() {
  return (
<main id="mxd-page-content" className="mxd-page-content">


      <div className="blur-container">
        <div className="blur-layer blur-1"></div>
        <div className="blur-layer blur-2"></div>
        <div className="blur-layer blur-3"></div>
        <div className="blur-layer blur-4"></div>
        <div className="blur-layer blur-5"></div>
        <div className="blur-layer blur-6"></div>
        <div className="blur-layer blur-7"></div>
        <div className="blur-layer blur-8"></div>
      </div>



      <div className="mxd-section mxd-hero-section no-padding loading-wrap">

        <div className="mxd-hero-03">
          <div className="mxd-hero-03__headline">
            <Link className="active-cursor-accent" data-cursor-text="Get Early Access" href="/sign-in">
              <h1 className="permanent loading-split">Run your channel from Tymax.</h1>
              <p className="t-medium t-permanent mt-3" style={{"fontSize":"1.25rem","fontWeight":"500","marginTop":"1rem","opacity":"0.8"}}>Broadcast live. Reach your audience wherever they already watch.</p>
            </Link>
            <div className="mxd-hero-media__small">
              <div className="mxd-hero-media__wrapper" data-flip-element="wrapper" data-flip-id="auto-2">
                <div className="mxd-hero-media__scaling-media" data-flip-element="target">
                  <video
                    className="scaling-media__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/video/1280x720_hero-03.webp">
                    <source src="/video/1280x720_hero-03.mp4" type="video/mp4" />
                    <source src="/video/1280x720_hero-03.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-hero-03__control-left loading-item">
            <a className="btn btn-line btn-line-small btn-line-medium" href="#about">
              <span className="btn-caption mxd-scramble">How it works</span>
            </a>
          </div>

          <div className="mxd-hero-03__control-right loading-item">
            <Link className="btn btn-line btn-line-small btn-line-medium" href="/sign-in">
              <span className="btn-caption mxd-scramble">Early access</span>
            </Link>
          </div>

          <div className="mxd-hero-03__bottom">
            <div className="mxd-hero-03__dataline loading-fade">
              <div className="mxd-hero-03__socials mxd-grid-item">
                <ul className="mxd-socials-line">
                  <li>
                    <a className="mxd-socials-line__link" href="https://youtube.com/" target="_blank">
                      <span className="mxd-scramble">YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://x.com/" target="_blank">
                      <span className="mxd-scramble">X</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://instagram.com/" target="_blank">
                      <span className="mxd-scramble">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://linkedin.com/" target="_blank">
                      <span className="mxd-scramble">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://github.com/" target="_blank">
                      <span className="mxd-scramble">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mxd-hero-03__controls mxd-grid-item">
                <a className="btn btn-line-icon btn-line-default slide-down" href="#about">
                  <span className="btn-caption mxd-scramble">Scroll to explore</span>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                      <path d="M18,10.8h-3.6v-3.6h3.6v3.6ZM7.2,14.4v3.6h3.6v-3.6h3.6v-3.6h-3.6V0h-3.6v10.8h-3.6v3.6s3.6,0,3.6,0ZM3.6,10.8v-3.6H0v3.6h3.6Z"/>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-hero-media">
          <div className="mxd-hero-media__contain">
            <div className="mxd-hero-media__large">
              <div className="mxd-hero-media__wrapper" data-flip-element="wrapper" data-flip-id="auto-1"></div>
              <div className="mxd-hero-media__placeholder"></div>
            </div>
          </div>
        </div>
      </div>



      <div id="about" className="mxd-section blur-section pinned-section padding-top-number padding-bottom-tag-m">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-number">
                      <div className="mxd-section-title__number pre-manifest anim-uni-in-up">
                        <span className="title-number mxd-scramble">A/01</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item">


                    <div className="mxd-section-title__manifest title-manifest-s no-padding-mobile">
                      <a className="manifest manifest-s mxd-split-lines active-cursor-accent" data-cursor-text="About Tymax" href="#about">
                        Tymax is a new way to build and operate an internet channel,
                        <span>bringing your programming, distribution and audience together without locking you into one destination.</span></a>
                    </div>



                    <div className="mxd-stats-lines manifest-title">

                      <div className="mxd-stats-lines__item">
                        <div className="mxd-stats-lines__divider divider-top"></div>
                        <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-1">5+</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Supported platforms and destinations</p>
                          </div>
                        </div>
                      </div>

                      <div className="mxd-stats-lines__item">
                        <div className="mxd-stats-lines__divider divider-top"></div>
                        <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-2">1</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Place to operate your channel</p>
                          </div>
                        </div>
                      </div>

                      <div className="mxd-stats-lines__item">
                        <div className="mxd-stats-lines__divider divider-top"></div>
                        <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-3">24/7</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Built for channels that keep moving</p>
                          </div>
                        </div>
                      </div>

                      <div className="mxd-stats-lines__item">
                        <div className="mxd-stats-lines__divider divider-top"></div>
                        <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-4">0</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Recording required by default</p>
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



      <div id="channels" className="mxd-section blur-section padding-bottom-grid-l-to-title">
        <div className="mxd-container grid-l-container">


          <div className="mxd-block">
            <div className="mxd-niche-cards">
              <div className="container-fluid p-0">
                <div className="row g-0">

                  <div className="col-12 col-xl-4 mxd-niche-cards__column mxd-grid-item animate-card-2">
                    <div className="mxd-niche-cards__item">
                      <div className="mxd-niche-cards__inner">
                        <div className="mxd-niche-cards__title">
                          <div className="mxd-niche-cards__name">
                            <p>Live</p>
                          </div>
                          <div className="mxd-niche-cards__tags">
                            <span className="tag tag-m tag-medium mxd-scramble">Broadcast</span>
                            <span className="tag tag-m tag-medium mxd-scramble">Sources</span>
                            <span className="tag tag-m tag-medium mxd-scramble">Go Live</span>
                          </div>
                        </div>
                        <div className="mxd-niche-cards__descr wide">
                          <p className="t-bold t-medium">Take your production on air
                            <span>without building the infrastructure behind it.</span>
                          </p>
                        </div>
                        <div className="mxd-niche-cards__image absolute-desktop-bottom">
                          <img src="/img/illustrations/niche01.webp" alt="Tymax Sample Image" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-xl-8 mxd-niche-cards__column animate-card-2">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 mxd-grid-item">
                          <div className="mxd-niche-cards__item">
                            <div className="mxd-niche-cards__inner fixed-height-desktop space-between-desktop">
                              <div className="mxd-niche-cards__title">
                                <div className="mxd-niche-cards__name">
                                  <p>Channels</p>
                                </div>
                                <div className="mxd-niche-cards__tags">
                                  <span className="tag tag-m tag-medium mxd-scramble">Identity</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Programming</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Schedule</span>
                                </div>
                              </div>
                              <div className="mxd-niche-cards__descr wide">
                                <p className="t-bold t-medium">Build something that exists
                                  <span>beyond a single broadcast.</span>
                                </p>
                              </div>
                              <div className="mxd-niche-cards__image absolute-desktop-full">
                                <img src="/img/illustrations/niche02.webp" alt="Tymax Sample Image" />
                                <div className="mxd-niche-cards__gradient gradient-linear"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item animate-card-2">
                          <div className="mxd-niche-cards__item">
                            <div className="mxd-niche-cards__inner permanent fixed-height-desktop space-between-desktop">
                              <div className="mxd-niche-cards__title">
                                <div className="mxd-niche-cards__name">
                                  <p className="permanent">Everywhere</p>
                                </div>
                                <div className="mxd-niche-cards__tags">
                                  <span className="tag tag-m tag-permanent mxd-scramble">Your Website</span>
                                  <span className="tag tag-m tag-permanent mxd-scramble">YouTube</span>
                                  <span className="tag tag-m tag-permanent mxd-scramble">TikTok</span>
                                </div>
                              </div>
                              <div className="mxd-niche-cards__descr wide">
                                <p className="t-bold t-medium t-permanent">Reach people where they already watch
                                  <span>without locking your channel to one destination.</span>
                                </p>
                              </div>
                              <div className="mxd-niche-cards__image absolute-desktop-full">
                                <img src="/img/illustrations/niche03.webp" alt="Tymax Sample Image" />
                                <div className="mxd-niche-cards__gradient gradient-radial"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item animate-card-2">
                          <div className="mxd-niche-cards__item">
                            <div className="mxd-niche-cards__inner fixed-height-desktop space-between-desktop">
                              <div className="mxd-niche-cards__title">
                                <div className="mxd-niche-cards__name">
                                  <p>Audience</p>
                                </div>
                                <div className="mxd-niche-cards__tags">
                                  <span className="tag tag-m tag-medium mxd-scramble">Free</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Events</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Subscriptions</span>
                                </div>
                              </div>
                              <div className="mxd-niche-cards__descr short">
                                <p className="t-bold t-medium">Give people somewhere to return to,
                                  <span>and more ways to access what you create.</span>
                                </p>
                              </div>
                              <div className="mxd-niche-cards__image absolute-desktop-aside">
                                <img src="/img/illustrations/niche04.webp" alt="Tymax Sample Image" />
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
      </div>



      <div id="capabilities" className="mxd-section blur-section padding-bottom-default">
        <div className="mxd-container grid-l-container">


          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-number">
                      <div className="mxd-section-title__number anim-uni-in-up">
                        <span className="title-number mxd-scramble">C/02</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title">
                      <a className="active-cursor-accent" data-cursor-text="Capabilities" href="#capabilities">
                        <h2 className="mxd-split-lines">Everything around<br />the broadcast.</h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="mxd-block">
            <div className="mxd-cpb-list mxd-perspective-list">

              <div className="mxd-cpb-list__item mxd-perspective-list__item">

                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[01]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Live broadcasting</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img src="/img/services/1200x980_cpb01.webp" alt="Tymax Services Image" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">Take your production on air without <span>building the infrastructure behind it.</span></p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Live</span>
                                <span className="meta-tag mxd-scramble">Sources</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Delivery</span>
                                <span className="meta-tag mxd-scramble">Broadcast</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-cpb-list__divider bottom"></div>
              </div>

              <div className="mxd-cpb-list__item mxd-perspective-list__item">

                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[02]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Channel operations</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img src="/img/services/1200x980_cpb02.webp" alt="Tymax Services Image" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">One place to operate the channel behind <span>everything you put on air.</span></p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Channel</span>
                                <span className="meta-tag mxd-scramble">Control</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Identity</span>
                                <span className="meta-tag mxd-scramble">Operations</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-cpb-list__divider bottom"></div>
              </div>

              <div className="mxd-cpb-list__item mxd-perspective-list__item">

                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[03]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Programming & scheduling</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img src="/img/services/1200x980_cpb03.webp" alt="Tymax Services Image" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">Plan what goes on air, when it starts <span>and what comes next.</span></p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Programming</span>
                                <span className="meta-tag mxd-scramble">Schedule</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Events</span>
                                <span className="meta-tag mxd-scramble">Playout</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-cpb-list__divider bottom"></div>
              </div>

              <div id="distribution" className="mxd-cpb-list__item mxd-perspective-list__item">

                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[04]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Multi-destination distribution</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img src="/img/services/1200x980_cpb04.webp" alt="Tymax Services Image" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">Reach your audience on Tymax, your own site <span>and the platforms they already use.</span></p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Website</span>
                                <span className="meta-tag mxd-scramble">YouTube</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">TikTok</span>
                                <span className="meta-tag mxd-scramble">Destinations</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-cpb-list__divider bottom"></div>
              </div>

              <div className="mxd-cpb-list__item mxd-perspective-list__item">

                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[05]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Broadcast monitoring</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img src="/img/services/1200x980_cpb05.webp" alt="Tymax Services Image" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">Know what is happening <span>while it matters.</span></p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Health</span>
                                <span className="meta-tag mxd-scramble">Status</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Reliability</span>
                                <span className="meta-tag mxd-scramble">Monitoring</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-cpb-list__divider bottom"></div>
              </div>

              <div id="live" className="mxd-cpb-list__item mxd-perspective-list__item">

                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[06]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Recording on your terms</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img src="/img/services/1200x980_cpb06.webp" alt="Tymax Services Image" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">Live comes first. Keep a recording <span>when you actually want one.</span></p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Live First</span>
                                <span className="meta-tag mxd-scramble">Recording</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Catch-up</span>
                                <span className="meta-tag mxd-scramble">Archive</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-cpb-list__divider bottom"></div>
              </div>

              <div id="audience" className="mxd-cpb-list__item mxd-perspective-list__item">

                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[07]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Audience & access</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img src="/img/services/1200x980_cpb07.webp" alt="Tymax Services Image" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">Decide how people watch: free, subscribed, <span>members-only or for an event.</span></p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Audience</span>
                                <span className="meta-tag mxd-scramble">Access</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Subscriptions</span>
                                <span className="meta-tag mxd-scramble">Events</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
            </div>
          </div>


          </div>
      </div>



      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image divider-image-4 parallax-img">

            </div>
          </div>
        </div>
      </div>



      <div id="how-it-works" className="mxd-section blur-section pinned-section padding-top-number padding-bottom-default">
        <div className="pinned-section__inner">
          <div className="mxd-container grid-l-container">


            <div className="mxd-block">
              <div className="mxd-section-title pre-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-number">
                        <div className="mxd-section-title__number anim-uni-in-up">
                          <span className="title-number mxd-scramble">W/03</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title">
                        <a className="active-cursor-accent" data-cursor-text="How it works" href="#how-it-works">
                          <h2 className="mxd-split-lines">How Tymax<br />comes together</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="mxd-block">
              <div className="mxd-projects-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-projects-grid__gallery">
                    <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-3">
                      <a className="mxd-project-item__media mxd-img-anim active-cursor-permanent" data-cursor-text="Tymax" href="#how-it-works">
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr01-05.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr01-04.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr01-03.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr01-02.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__main" src="/img/works/showcase-grid-x3/pr01-01.webp" alt="Project Preview Image" />
                      </a>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <a className="project-name-s" href="#how-it-works">From source to live</a>
                        </div>
                        <div className="mxd-project-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Source</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Tymax</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Live</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Delivery</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-3">
                      <a className="mxd-project-item__media mxd-img-anim active-cursor-permanent" data-cursor-text="Tymax" href="#how-it-works">
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr02-04.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr02-05.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr02-03.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr02-02.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__main" src="/img/works/showcase-grid-x3/pr02-01.webp" alt="Project Preview Image" />
                      </a>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <a className="project-name-s" href="#how-it-works">One channel, many destinations</a>
                        </div>
                        <div className="mxd-project-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Website</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Platforms</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Distribution</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-3">
                      <a className="mxd-project-item__media mxd-img-anim active-cursor-permanent" data-cursor-text="Tymax" href="#how-it-works">
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr03-06.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr03-02.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr03-05.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr03-04.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr03-03.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__main" src="/img/works/showcase-grid-x3/pr03-01.webp" alt="Project Preview Image" />
                      </a>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <a className="project-name-s" href="#how-it-works">Plan what goes on air</a>
                        </div>
                        <div className="mxd-project-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Programming</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Schedule</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Events</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-3">
                      <a className="mxd-project-item__media mxd-img-anim active-cursor-permanent" data-cursor-text="Tymax" href="#how-it-works">
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr04-02.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr04-03.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr04-04.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr04-05.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr04-06.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr04-07.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__main" src="/img/works/showcase-grid-x3/pr04-01.webp" alt="Project Preview Image" />
                      </a>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <a className="project-name-s" href="#how-it-works">Know what&apos;s happening</a>
                        </div>
                        <div className="mxd-project-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Health</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Monitoring</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Reliability</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-3">
                      <a className="mxd-project-item__media mxd-img-anim active-cursor-permanent" data-cursor-text="Tymax" href="#how-it-works">
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr05-04.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr05-05.webp" alt="Project Preview Image" />

                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr05-06.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr05-03.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr05-02.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__main" src="/img/works/showcase-grid-x3/pr05-01.webp" alt="Project Preview Image" />
                      </a>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <a className="project-name-s" href="#how-it-works">Keep what matters</a>
                        </div>
                        <div className="mxd-project-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Recording</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Catch-up</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Archive</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-3">
                      <a className="mxd-project-item__media mxd-img-anim active-cursor-permanent" data-cursor-text="Tymax" href="#how-it-works">
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr06-07.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr06-06.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr06-05.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr06-04.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr06-03.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__absolute" src="/img/works/showcase-grid-x3/pr06-02.webp" alt="Project Preview Image" />
                        <img className="mxd-img-anim__main" src="/img/works/showcase-grid-x3/pr06-01.webp" alt="Project Preview Image" />
                      </a>
                      <div className="mxd-project-item__caption">
                        <div className="mxd-project-item__name">
                          <a className="project-name-s" href="#how-it-works">Build the audience relationship</a>
                        </div>
                        <div className="mxd-project-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Audience</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Subscriptions</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">

                    <div className="mxd-object-link">
                      <div className="container-fluid p-0">
                        <div className="row g-0 mxd-object-link__wrap">
                          <div className="col-12 col-md-6 col-xl-4 mxd-object-link__item justify-start">
                            <div className="mxd-object-link__object mxd-slide-object">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 259 260">
                                <path d="M143.9,0v28.8h-28.8V0h28.8ZM143.9,28.8v28.8h28.8v-28.8h-28.8ZM172.7,57.6v28.8h28.8v-28.8h-28.8ZM230.2,115.2v-28.8h-28.8v28.8H0v28.8h201.4v28.8h28.8v-28.8h28.8v-28.8h-28.8ZM172.7,201.6h28.8v-28.8h-28.8v28.8ZM143.9,230.4h28.8v-28.8h-28.8v28.8ZM114.3,260h28.8v-28.8h-28.8v28.8Z"/>
                              </svg>

                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 mxd-object-link__item justify-end">
                            <div className="mxd-object-link__content">
                              <div className="mxd-object-link__btnholder anim-uni-in-up">
                                <a className="btn btn-line btn-line-default" href="#capabilities">
                                  <span className="btn-caption mxd-scramble">Explore Tymax</span>
                                </a>
                              </div>
                              <a className="mxd-object-link__media mxd-img-anim active-cursor-permanent anim-uni-in-up" data-cursor-text="Explore Tymax" href="#capabilities">
                                <img className="mxd-img-anim__absolute centered-y" src="/img/works/800x450_all02.webp" alt="Project Preview Image" />
                                <img className="mxd-img-anim__absolute centered-y" src="/img/works/800x450_all01.webp" alt="Project Preview Image" />
                                <img className="mxd-img-anim__absolute centered-y" src="/img/works/800x450_all04.webp" alt="Project Preview Image" />
                                <img className="mxd-img-anim__absolute centered-y" src="/img/works/800x450_all05.webp" alt="Project Preview Image" />
                                <img className="mxd-img-anim__absolute centered-y" src="/img/works/800x450_all06.webp" alt="Project Preview Image" />
                                <img className="mxd-img-anim__main" src="/img/works/800x450_all03.webp" alt="Project Preview Image" />
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
          <div className="pinned-section__trigger"></div>
        </div>
      </div>



      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">

            <div className="mxd-divider__image divider-image-1 parallax-img">

            </div>

            <div className="mxd-divider__cover cover-04"></div>

            <div className="mxd-divider__content">
              <div className="mxd-divider__btngroup anim-uni-slide-up">
                <a className="btn btn-line btn-line-permanent" href="#about">
                  <span className="btn-caption mxd-scramble">Why Tymax</span>
                </a>
              </div>
              <div className="mxd-divider__caption">
                <a className="active-cursor-accent" data-cursor-text="Why Tymax" href="#about">
                  <h2 className="reveal-type permanent">A livestream ends. Your channel shouldn&apos;t.</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="setup" className="mxd-section padding-top-number padding-bottom-default">
        <div className="mxd-container grid-l-container">


          <div className="mxd-block">
            <div className="mxd-section-title pre-grid-desktop">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-number">
                      <div className="mxd-section-title__number anim-uni-in-up">
                        <span className="title-number mxd-scramble">T/04</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title">
                      <h2 className="mxd-split-lines">Built to meet<br />your audience.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">

                <div className="col-12 col-xl-4 mxd-aside-descr mxd-grid-item">
                  <p className="t-bold t-large t-aside mxd-split-lines">Your channel <span>doesn&apos;t belong to one destination.</span></p>
                </div>

                <div className="col-12 col-xl-8">
                  <div className="container-fluid p-0">
                    <div className="row g-0 mxd-tech-stack">
                      <div className="col-12 col-md-4 mxd-grid-item">

                        <div className="mxd-tech-stack__column">

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V8h14v10zm-12-11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Your Website</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.516 3.5 12 3.5 12 3.5s-7.516 0-9.388.555a3.003 3.003 0 0 0-2.11 2.108C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.484 20.5 12 20.5 12 20.5s7.516 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>YouTube</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.14.99 1.1 2.37 1.79 3.86 1.94v3.91c-1.78-.07-3.5-.78-4.82-1.99-.29-.27-.56-.57-.8-.89v7.92c0 3.54-2.52 6.84-6.02 7.64-3.79.87-7.85-1.12-9.15-4.78C-.1 13.91 1.4 9.3 5.16 8.16c1.19-.36 2.45-.37 3.65-.03v3.98c-1.89-.52-3.97.16-5.07 1.76-.98 1.42-.92 3.48.16 4.8 1.16 1.41 3.33 1.83 4.96 1 .98-.5 1.58-1.5 1.61-2.61V0z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>TikTok</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Twitch</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mxd-grid-item">

                        <div className="mxd-tech-stack__column">

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1276 987" fill="currentColor">
                                <path d="M432 10 L479 10 L524 12 L567 16 L607 23 L645 32 L680 44 L715 56 L748 70 L780 85 L813 99 L845 114 L877 129 L909 144 L942 158 L976 171 L1010 184 L1045 196 L1082 206 L1122 213 L1166 214 L1203 204 L1231 185 L1245 152 L1231 119 L1234 105 L1256 130 L1265 168 L1252 202 L1226 223 L1194 238 L1155 246 L1112 246 L1071 240 L1034 230 L998 219 L964 206 L930 193 L897 179 L865 164 L832 150 L800 135 L768 120 L735 106 L702 92 L667 80 L630 70 L591 62 L549 57 L503 56 L458 58 L416 63 L376 70 L339 80 L304 92 L271 106 L240 122 L211 140 L184 160 L158 181 L135 205 L113 230 L97 261 L83 294 L72 330 L65 370 L65 413 L74 451 L92 480 L117 494 L137 467 L158 441 L181 417 L206 395 L232 374 L260 355 L290 338 L322 323 L357 311 L397 304 L442 302 L482 309 L512 326 L531 354 L535 395 L528 435 L515 469 L499 500 L481 529 L460 555 L438 580 L415 604 L391 627 L365 648 L338 668 L309 686 L278 702 L242 713 L199 717 L161 708 L141 681 L144 641 L169 619 L174 655 L212 664 L255 662 L291 651 L323 636 L352 618 L378 597 L403 575 L426 551 L448 526 L467 498 L485 469 L500 437 L509 399 L503 358 L476 338 L434 333 L393 339 L358 351 L327 367 L298 385 L272 406 L247 428 L223 451 L200 475 L179 501 L167 526 L207 533 L252 535 L296 538 L318 555 L279 563 L233 562 L191 557 L154 547 L132 568 L115 598 L99 629 L85 662 L72 696 L63 734 L56 774 L55 820 L60 862 L72 897 L91 925 L118 945 L155 955 L201 954 L239 945 L272 931 L302 914 L330 895 L355 873 L380 851 L403 827 L425 802 L446 776 L465 748 L484 720 L503 692 L522 664 L541 636 L559 607 L578 579 L597 551 L616 523 L635 495 L654 467 L673 439 L692 411 L711 383 L732 357 L753 331 L776 307 L800 284 L826 263 L855 245 L890 233 L930 234 L963 248 L975 283 L946 295 L903 295 L870 309 L842 328 L816 349 L793 373 L771 398 L749 423 L729 450 L709 477 L690 505 L670 532 L650 559 L631 587 L611 614 L592 642 L572 669 L552 696 L533 724 L513 751 L493 778 L473 805 L451 830 L428 854 L403 876 L378 898 L351 918 L322 936 L291 952 L257 965 L219 974 L174 976 L133 970 L98 958 L70 939 L50 912 L35 880 L26 842 L22 799 L23 753 L27 710 L35 671 L46 635 L59 601 L73 568 L90 538 L83 512 L58 490 L38 463 L22 432 L13 394 L10 350 L14 307 L24 270 L38 237 L55 207 L74 179 L96 154 L120 131 L145 109 L172 89 L202 72 L233 56 L266 42 L302 31 L339 21 L380 15 L423 11 Z" fillRule="evenodd" />
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Tymax</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.52 0-10 4.48-10 10h2c0-4.42 3.58-8 8-8s8 3.58 8 8h2c0-5.52-4.48-10-10-10zm0 4c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6zm0 4c-1.1 0-2 .9-2 2v8h4v-8c0-1.1-.9-2-2-2z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>RTMP</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 15l-3-3 1.41-1.41L10 13.17l5.59-5.59L17 9l-7 7z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>SRT</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>HLS</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mxd-grid-item">

                        <div className="mxd-tech-stack__column">

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Cameras</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17v2h6v-2H3zm0-8v2h10V9H3zm0-4v2h18V5H3zm14 8v2h4v-2h-4zM7 9v2h14V9H7zm4 8v2h10v-2H11z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>OBS</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Remote Feeds</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>

                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4z"/></svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Media Files</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
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



      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image divider-image-7 parallax-img">

            </div>
          </div>
        </div>
      </div>



      <div id="insights" className="mxd-section blur-section pinned-section padding-top-number padding-bottom-preview">
        <div className="pinned-section__inner">
          <div className="mxd-container grid-l-container">


            <div className="mxd-block">
              <div className="mxd-section-title pre-subtitle-s controls-bottom-mobile">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-number">
                        <div className="mxd-section-title__number anim-uni-in-up">
                          <span className="title-number mxd-scramble">I/05</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6 mxd-grid-item">
                      <div className="mxd-section-title__title pre-controls-mobile">
                        <a className="active-cursor-accent" data-cursor-text="From Tymax" href="#insights">
                          <h2 className="mxd-split-lines">Ideas behind<br />Tymax</h2>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 mxd-grid-item">
                      <div className="mxd-section-title__data top-controls">
                        <div className="mxd-section-title__controls justify-end anim-uni-in-up">
                          <a className="btn btn-line btn-line-default" href="#insights">
                            <span className="btn-caption mxd-scramble">From Tymax</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="mxd-block">
              <div className="mxd-blog-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-blog-grid__gallery">
                    <div className="col-12 col-lg-4 mxd-blog-item animate-card-3">
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">TYMAX / 01</span>
                      </div>
                      <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="From Tymax" href="#insights">
                        <img className="" src="/img/blog/preview/grid-x3/pr-01.webp" alt="Blog Preview Image" />
                      </a>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <a className="blog-name-m" href="#insights">A livestream ends. Your channel shouldn&apos;t.</a>
                        </div>
                        <div className="mxd-blog-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Channels</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Broadcasting</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Product</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 mxd-blog-item animate-card-3">
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">TYMAX / 02</span>
                      </div>
                      <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="From Tymax" href="#insights">
                        <img className="" src="/img/blog/preview/grid-x3/pr-02.webp" alt="Blog Preview Image" />
                      </a>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <a className="blog-name-m" href="#insights">Your audience shouldn&apos;t have to move.</a>
                        </div>
                        <div className="mxd-blog-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Distribution</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Audience</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Open</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 mxd-blog-item has-margin-bottom animate-card-3">
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">TYMAX / 03</span>
                      </div>
                      <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="From Tymax" href="#insights">
                        <img className="" src="/img/blog/preview/grid-x3/pr-03.webp" alt="Blog Preview Image" />
                      </a>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <a className="blog-name-m" href="#insights">Live first. Recording when you need it.</a>
                        </div>
                        <div className="mxd-blog-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">Live</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Recording</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Infrastructure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="pinned-section__trigger"></div>
        </div>
      </div>



      <div className="mxd-section">
        <div className="mxd-container fullwidth-container">


          <div id="early-access" className="mxd-block">
            <div className="mxd-promo mxd-gravity-section accent">
              <div className="mxd-promo__wrap">
                <div className="mxd-promo__objects object-container">
                  <div className="object object-permanent">
                    <p>Live</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Channels</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Your Website</p>
                  </div>
                  <div className="object object-permanent">
                    <p>YouTube</p>
                  </div>
                  <div className="object object-permanent">
                    <p>TikTok</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Twitch</p>
                  </div>
                  <div className="object object-permanent">
                    <p>SRT</p>
                  </div>
                  <div className="object object-permanent">
                    <p>RTMP</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Programming</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Scheduling</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Audience</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Events</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Recording</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Subscriptions</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Tymax</p>
                  </div>
                </div>
                <div className="mxd-promo__content">
                  <div className="mxd-promo__btngroup anim-uni-in-up">
                    <Link className="btn btn-line btn-line-permanent" href="/sign-in">
                      <span className="btn-caption mxd-scramble">Get Early Access</span>
                    </Link>
                  </div>
                  <div className="mxd-promo__caption">
                    <Link className="active-cursor-permanent" data-cursor-text="Get Early Access" href="/sign-in">
                      <h2 className="mxd-split-lines permanent">Build something worth tuning into.</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>


    </main>
  );
}
