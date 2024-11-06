import appFeaturesImg from "../../3-Assets/pictures/app-features-img.png";
import appIcon1 from "../../3-Assets/pictures/app-icons/d-app-icon-1.svg";
import appIcon2 from "../../3-Assets/pictures/app-icons/d-app-icon-2.svg";
import appIcon3 from "../../3-Assets/pictures/app-icons/d-app-icon-3.svg";
import appIcon4 from "../../3-Assets/pictures/app-icons/d-app-icon-4.svg";
import appIcon5 from "../../3-Assets/pictures/app-icons/d-app-icon-5.svg";
import appIcon6 from "../../3-Assets/pictures/app-icons/d-app-icon-6.svg";
const AppFeaturesSection = () => {
  return (
    <div className="background-widescreen-fixer-app-features">
      <section
        aria-label="App features section"
        className="section-max-width app-features-padding"
      >
        <div className="flex-wrapper">
          <img
            className="app-features-img"
            src={appFeaturesImg}
            alt="App Features"
          />
          <div className="app-features-grid">
            <h2>App Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
            {/* <!--Grid item--> */}
            <div className="app-features-grid-item">
              <img
                className="d-app-icon-1"
                src={appIcon1}
                alt="Easy Payments"
              />
              <div>
                <h3>Easy Payments</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>
            {/* <!--Grid item--> */}
            <div className="app-features-grid-item">
              <img
                className="d-app-icon-2"
                src={appIcon2}
                alt="Data Security"
              />
              <div>
                <h3>Data Security</h3>
                <p>
                  Augue pulvinar justo, fermentum fames aliquam accumsan
                  vestibulum non.
                </p>
              </div>
            </div>
            {/* <!--Grid item--> */}
            <div className="app-features-grid-item">
              <img
                className="d-app-icon-3"
                src={appIcon3}
                alt="Cost Statistics"
              />
              <div>
                <h3>Cost Statistics</h3>
                <p>
                  Mattis urna ultricies non amet, purus in auctor non. Odio
                  vulputate ac nibh.
                </p>
              </div>
            </div>
            {/* <!--Grid item--> */}
            <div className="app-features-grid-item">
              <img className="d-app-icon-4" src={appIcon4} alt="Support 24/7" />
              <div>
                <h3>Support 24/7</h3>
                <p>
                  A elementum, imperdiet enim, pretium etiam facilisi in aenean
                  quam mauris.
                </p>
              </div>
            </div>
            {/* <!--Grid item--> */}
            <div className="app-features-grid-item">
              <img
                className="d-app-icon-5"
                src={appIcon5}
                alt="Regular Cashback"
              />
              <div>
                <h3>Regular Cashback</h3>
                <p>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet eleifend.
                </p>
              </div>
            </div>
            {/* <!--Grid item--> */}
            <div className="app-features-grid-item">
              <img className="app-icon-6" src={appIcon6} alt="Top Standards" />
              <div>
                <h3>Top Standards</h3>
                <p>
                  Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
                  id. Sit facilisis dolor arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppFeaturesSection;
