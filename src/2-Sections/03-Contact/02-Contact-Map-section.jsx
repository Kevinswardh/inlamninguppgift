import ContactMap from "../../4-Components/ContactMap";
import { useLocation } from "../../5-Contexts/LocationContext";
import { useState, useEffect } from "react";

const ContactMapSection = () => {
  const { lat: initialLat, lng: initialLng, name: initialName } = useLocation();
  const [lat, setLat] = useState(initialLat);
  const [lng, setLng] = useState(initialLng);
  const [locationName, setLocationName] = useState(initialName);
  // useEffect to set the initial location from the context
  useEffect(() => {
    setLat(initialLat);
    setLng(initialLng);
    setLocationName(initialName);
  }, [initialLat, initialLng, initialName]);

  const handleAddressClick = (latitude, longitude, name) => {
    setLat(latitude);
    setLng(longitude);
    setLocationName(name);
  };
  const resetAdressBack = () => {
    setLat(initialLat);
    setLng(initialLng);
    setLocationName(initialName);
  };
  return (
    <section className="medical-centers-map">
      <p
        style={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          paddingBottom: "20px",
          cursor: "pointer",
        }}
      >
        <i
          className="fa-solid fa-location-crosshairs"
          onClick={resetAdressBack}
        ></i>
      </p>
      <div className="medical-centers-container">
        <ContactMap location={{ lat, lng, name: locationName }} />
        <div className="info-column">
          <div className="info-wrapper">
            <h2 className="center-title">Medical Center 1</h2>
            <div className="center-info">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a690953931432f822586f161f64da5c56b454230cfda3b1a7c24f7638d9a0caa?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                className="info-icon"
                alt=""
              />
              <p
                className="info-text"
                onClick={() =>
                  handleAddressClick(
                    40.7128,
                    -74.006,
                    "Royal Ln. Mesa, New Jersey"
                  )
                }
              >
                2464 Royal Ln. Mesa, New Jersey 45463
              </p>
            </div>
            <div className="phone-info">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c63b69866232051324f637c5108a6109acfc415cf74d34756f1b5d8c84da7736?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                className="info-icon"
                alt=""
              />
              <a href="tel:+14065550120" className="info-text">
                (406) 555-0120
              </a>
            </div>
            <div className="hours-info">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69cd273d05be4634b377561e589028fce67a1a25a58f046d5e7a1dd3b6ded51b?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                className="info-icon"
                alt=""
              />
              <p className="hours-text">
                <span className="bold-text">Mon – Fri:</span> 9:00 am – 22:00 pm
                <br />
                <span className="bold-text">Sat – Sun:</span> 9:00 am – 20:00 pm
              </p>
            </div>
            <h2 className="second-center-title">Medical Center 2</h2>
            <div className="center-info">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a690953931432f822586f161f64da5c56b454230cfda3b1a7c24f7638d9a0caa?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                className="info-icon"
                alt=""
              />
              <p
                className="info-text"
                onClick={() =>
                  handleAddressClick(
                    37.15367,
                    -83.76189,
                    "Washington Ave. Manchester, Kentucky"
                  )
                }
              >
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
            <div className="phone-info">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c63b69866232051324f637c5108a6109acfc415cf74d34756f1b5d8c84da7736?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                className="info-icon"
                alt=""
              />
              <a href="tel:+14065440123" className="info-text">
                (406) 544-0123
              </a>
            </div>
            <div className="hours-info">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69cd273d05be4634b377561e589028fce67a1a25a58f046d5e7a1dd3b6ded51b?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                className="info-icon"
                alt=""
              />
              <p className="hours-text">
                <span className="bold-text">Mon – Fri:</span> 9:00 am – 22:00 pm
                <br />
                <span className="bold-text">Sat – Sun:</span> 9:00 am – 20:00 pm
              </p>
            </div>
            <nav className="social-links" aria-label="Social Media Links">
              <a href="#" className="social-button" aria-label="Facebook">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a110245a440376ae09833c407ecc65b2776ebe1c993a5abb8122d864fb80f71?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                  className="social-icon"
                  alt=""
                />
              </a>
              <a href="#" className="social-button" aria-label="Twitter">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/223dedb3732cf2192646c0dc2b5544b97353d8b1f9865ad2e1b2c5d04cfd1684?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                  className="social-icon"
                  alt=""
                />
              </a>
              <a href="#" className="social-button" aria-label="Instagram">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4dcba57c438881cadb9e3c4735da3d8397e173d71e07ebf7c861900500af8f7?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                  className="social-icon"
                  alt=""
                />
              </a>
              <a href="#" className="social-button" aria-label="LinkedIn">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30981ee38594bd339a37129cd61726eb0309c15461647157097dcb196c141940?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                  className="social-icon"
                  alt=""
                />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
