import PropTypes from "prop-types";
import FilledStar from "../3-Assets/Pictures/filled-star.svg";
import UnfilledStar from "../3-Assets/Pictures/unfilled-star.svg";

const ReviewBox = ({ reviewText, rating, userImg, userName, userTitle }) => {
  const filledStars = Array(rating).fill(FilledStar);
  const unfilledStars = Array(5 - rating).fill(UnfilledStar);

  return (
    <div className="review-boxes">
      <div className="star-box">
        {filledStars.map((star, index) => (
          <img key={`filled-${index}`} src={star} alt="Filled Star" />
        ))}
        {unfilledStars.map((star, index) => (
          <img key={`unfilled-${index}`} src={star} alt="Unfilled Star" />
        ))}
      </div>
      <p>{reviewText}</p>
      <div className="user-img-box">
        <img src={userImg} alt={userName} />
        <div>
          <h3>{userName}</h3>
          <p>{userTitle}</p>
        </div>
      </div>
    </div>
  );
};

// Define the expected prop types
ReviewBox.propTypes = {
  reviewText: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  userImg: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTitle: PropTypes.string.isRequired,
};
export default ReviewBox;
