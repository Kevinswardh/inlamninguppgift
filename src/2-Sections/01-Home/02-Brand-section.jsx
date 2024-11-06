import brand1 from "../../3-Assets/pictures/Brands/brand-1.png";
import brand2 from "../../3-Assets/pictures/Brands/brand-2.png";
import brand3 from "../../3-Assets/pictures/Brands/brand-3.png";
import brand4 from "../../3-Assets/pictures/Brands/brand-4.png";
import brand5 from "../../3-Assets/pictures/Brands/brand-5.png";
import brand6 from "../../3-Assets/pictures/Brands/brand-6.png";

import dBrand1 from "../../3-Assets/pictures/Brands/d-brand-1.png";
import dBrand2 from "../../3-Assets/pictures/Brands/d-brand-2.png";
import dBrand3 from "../../3-Assets/pictures/Brands/d-brand-3.png";
import dBrand4 from "../../3-Assets/pictures/Brands/d-brand-4.png";
import dBrand5 from "../../3-Assets/pictures/Brands/d-brand-5.png";
import dBrand6 from "../../3-Assets/pictures/Brands/d-brand-6.png";
const BrandSection = () => {
  return (
    <div className="background-widescreen-fixer-brand">
      <section
        aria-label="Brand section"
        className="section-max-width brand-padding"
      >
        <div className="brand-wrapper">
          {/* Normal logos */}
          <img className="brand-1" src={brand1} alt="Brand 1" />
          <img className="brand-2" src={brand2} alt="Brand 2" />
          <img className="brand-3" src={brand3} alt="Brand 3" />
          <img className="brand-4" src={brand4} alt="Brand 4" />
          <img className="brand-5" src={brand5} alt="Brand 5" />
          <img className="brand-6" src={brand6} alt="Brand 6" />

          {/* Dark mode logos */}
          <img className="d-brand-1" src={dBrand1} alt="Dark Brand 1" />
          <img className="d-brand-2" src={dBrand2} alt="Dark Brand 2" />
          <img className="d-brand-3" src={dBrand3} alt="Dark Brand 3" />
          <img className="d-brand-4" src={dBrand4} alt="Dark Brand 4" />
          <img className="d-brand-5" src={dBrand5} alt="Dark Brand 5" />
          <img className="d-brand-6" src={dBrand6} alt="Dark Brand 6" />
        </div>
      </section>
    </div>
  );
};

export default BrandSection;
