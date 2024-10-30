const ContactHeroSection = () => {
  return (
    <section className="contact-hero">
      <div className="contact-bg">
        <div className="contact-content">
          <div className="contact-info">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="home-link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/607393db1989538bf407ffb50df017cca23f3cbd88d8db1907ac116a20477a8e?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                  alt=""
                  className="icon"
                />
                <span className="breadcrumb-text">Homepage</span>
              </a>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e85ec1381f5d5f18a7e8f41f2cc57f6f448899ab95a7a04a63b5bd2e8bbf8a2?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                alt=""
                className="icon"
              />
              <span className="breadcrumb-text">Contact</span>
            </nav>
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-option">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a2142247906fd4df4128c0fbb895629ad4af9954197b3a6cb24baa5b4b7a7b8?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                alt="Email icon"
                className="option-icon"
              />
              <div className="option-text">
                <h2 className="option-title">Email us</h2>
                <p className="option-description">
                  Please feel free to drop us a line. We will respond as soon as
                  possible.
                </p>
                <a href="#" className="option-button" role="button">
                  <span className="button-text">Leave a message</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/54c5b2d6298512cc80d229c053acb39f16b545468197b3792d3d201de1d5d011?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                    alt=""
                    className="button-icon"
                  />
                </a>
              </div>
            </div>
            <div className="contact-option">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54c485c6d2e84a82f2644376ad595e899a1ad317a556e8662044fd7255c37c28?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                alt="Careers icon"
                className="option-icon"
              />
              <div className="option-text">
                <h2 className="option-title">Careers</h2>
                <p className="option-description">
                  Sit ac ipsum leo lorem magna nunc mattis maecenas non
                  vestibulum.
                </p>
                <a href="#" className="option-button" role="button">
                  <span className="button-text">Send an application</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/54c5b2d6298512cc80d229c053acb39f16b545468197b3792d3d201de1d5d011?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                    alt=""
                    className="button-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <form className="consultation-form">
            <h2 className="form-title">Get Online Consultation</h2>
            <label htmlFor="fullName" className="form-label">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              required
            />
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
            />
            <label htmlFor="specialist" className="form-label">
              Specialist
            </label>
            <div className="form-select">
              <select id="specialist" name="specialist" required>
                <option value="">Select a specialist</option>
              </select>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed27a2432d437a678a33cb708104422de7e125b14ec1bd29b90f5085b2c025ec?placeholderIfAbsent=true&apiKey=2a274513ffcd4318aca721aa009fe223"
                alt="Dropdown icon"
                className="select-icon"
              />
            </div>
            <button type="submit" className="submit-button">
              Make an appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
