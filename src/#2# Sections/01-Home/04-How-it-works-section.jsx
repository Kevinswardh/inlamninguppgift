import HowItWorksImgLeft from "../../assets/Pictures/Howitworks/HowItWorksImage-left.png";
import HowItWorksImg from "../../assets/Pictures/Howitworks/HowItWorksImage.png";
import HowItWorksImgRight from "../../assets/Pictures/Howitworks/HowItWorksImage-right.png";
const HowItWorksSection = () => {
  return (
    <div className="background-widescreen-fixer-howitworks">
      <section className="section-max-width">
        <grid className="howitworks-grid">
          <h2>How Does It Work?</h2>
          <div className="howitworks-img-wrapper">
            <img src={HowItWorksImgLeft} />
            <img src={HowItWorksImg} />
            <img src={HowItWorksImgRight} />
          </div>
          {/* <!--Mobile/Tablet version of textbox--> */}
          <div className="howitworks-textbox mobile-tablet-only">
            <h3>Transfers to people from your contact list</h3>
            <p>
              Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
          </div>
          {/* <!--Desktop verson of text--> */}
          <div className="howitworks-textbox desktop-only">
            <h3>Latest transaction history</h3>
            <p>
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
              Arcu sociis tristique quisque hac in consectetur condimentum.
            </p>
          </div>
        </grid>
      </section>
    </div>
  );
};

export default HowItWorksSection;
