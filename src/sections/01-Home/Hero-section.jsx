const HeroSection = () => {
  return (
    <div className="background-widescreen-fixer-hero">
      <div className="hero-section">
        {/* <!--Text section--> */}
        <h1>Manage All Your Money in one App</h1>
        <p className="hero-paragarph">
          We offer you a new generation of the mobile banking. Save, spend &
          manage money in your pocket.
        </p>
        <div className="main-btn-wrapper">
          {/* <!--First button--> */}
          <a
            className="btn-link"
            href="//apps.apple.com/se/app/revolut/id932493382"
          >
            <div className="download-btn d-btn-1">
              <div className="button-wrapper">
                <div className="icon-fix">
                  <svg
                    className="apple-icon-top"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.26604 4.58035C6.26857 3.39555 6.90654 1.75505 6.72426 0.023407C5.26604 0.114546 3.5344 1.02593 2.44073 2.21074C1.52934 3.21327 0.709093 4.94491 0.891371 6.58541C2.53187 6.67655 4.26351 5.76516 5.26604 4.58035Z" />
                  </svg>

                  <svg
                    className="apple-icon"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.9116 9.06133C19.9116 5.50691 22.9191 3.77528 23.0103 3.68414C21.2786 1.22339 18.6356 0.949971 17.7242 0.858832C15.5369 0.585415 13.3496 2.13478 12.1648 2.13478C10.9799 2.13478 9.24831 0.858832 7.33439 0.858832C4.87364 0.858832 2.59517 2.22591 1.41036 4.41325C-1.14153 8.78791 0.77239 15.1676 3.23314 18.6309C4.50909 20.3626 5.87617 22.2765 7.79009 22.1853C9.61286 22.0942 10.342 21.0005 12.5293 21.0005C14.7166 21.0005 15.3546 22.1853 17.2685 22.0942C19.2736 22.0942 20.4584 20.3626 21.6432 18.6309C23.1014 16.6259 23.6483 14.7119 23.6483 14.6208C23.7394 14.7119 19.9116 13.3449 19.9116 9.06133Z" />
                  </svg>
                </div>
                <div style={{ width: "fit-content", marginLeft: "4px" }}>
                  <p className="download-text-apple-top">Download on the</p>
                  <p className="download-text-apple">App Store</p>
                </div>
              </div>
            </div>
          </a>
          {/* <!--Second button--> */}

          <a
            aria-label="Downlaod on Google play"
            href="//play.google.com/store/apps/details?id=com.paypal.android.p2pmobile&hl=en"
            className="btn-link"
          >
            <div className="download-btn d-btn-2">
              <h2 className="visually-hidden"></h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef175e3dd13c2953add0ad3a9f072928aa11e0ec97082e3e75dcfb9a787e1ee4?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                className="link-image"
                alt="Link image"
              />
            </div>
          </a>
        </div>

        {/* <!--Discover more button--> */}
        <div className="discover-wrapper">
          <button aria-label="to next section" className="discover-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5742 7.5L10 11.0742L6.42578 7.5L5.25391 8.67188L10 13.4375L14.7461 8.67188L13.5742 7.5Z" />
            </svg>
          </button>
          <p>Discover more</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
