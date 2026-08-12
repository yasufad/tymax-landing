export default function Loader() {
  return (
    <>
      <div className="mxd-page-transition"></div>
      <div className="mxd-loader" suppressHydrationWarning>
        <div className="mxd-loader__top" suppressHydrationWarning>
          <span>Tymax Broadcasting</span>
        </div>
        <div className="mxd-loader__images" suppressHydrationWarning>
          <img src="/img/loa_01.webp" alt="Tymax Loader Image" />
          <img src="/img/loa_02.webp" alt="Tymax Loader Image" />
          <img src="/img/loa_03.webp" alt="Tymax Loader Image" />
          <img src="/img/loa_04.webp" alt="Tymax Loader Image" />
          <img src="/img/loa_05.webp" alt="Tymax Loader Image" />
          <img src="/img/loa_06.webp" alt="Tymax Loader Image" />
          <img src="/img/loa_07.webp" alt="Tymax Loader Image" />
        </div>
        <div className="mxd-loader__bottom" suppressHydrationWarning>
          <div className="mxd-loader__count" suppressHydrationWarning>
            <span className="count__text" suppressHydrationWarning>0</span>
            <span className="count__percent">%</span>
          </div>
          <span className="mxd-loader__caption">Loading</span>
        </div>
      </div>
    </>
  );
}
