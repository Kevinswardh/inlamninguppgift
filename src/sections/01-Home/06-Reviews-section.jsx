import FilledStar from "../../assets/Pictures/filled-star.svg";
import UnfilledStar from "../../assets/Pictures/unfilled-star.svg";
import FannieImg from "../../assets/Pictures/fannie-img.png";
import AlbertImg from "../../assets/Pictures/albert-img.png";
const ReviewsSection = () => {
  return (
    <div className="background-widescreen-fixer-howitworks desktop-only-block">
      <section className="section-max-width desktop-only-block">
        <div className="review-flex">
          <div>
            <p>Clients are Loving Our App</p>
          </div>
          <div className="review-boxes">
            <div className="star-box">
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={UnfilledStar} />
            </div>
            <p>
              Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
              sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
              aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis
              sit amet.
            </p>
            <div className="user-img-box">
              <img src={FannieImg} />
              <div>
                {/* <!--Just a wrapper--> */}
                <h3>Fannie Summers</h3>
                <p>Designer</p>
              </div>
            </div>
          </div>
          <div className="review-boxes">
            <div className="star-box">
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={UnfilledStar} />
            </div>
            <p>
              Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin
              amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare
              dictumst sit amet. Dictum pretium dolor tincidunt egestas eget
              nunc.
            </p>
            <div className="user-img-box">
              <img src={AlbertImg} />
              <div>
                {/* <!--Just a wrapper--> */}
                <h3>Albert Flores</h3>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsSection;
