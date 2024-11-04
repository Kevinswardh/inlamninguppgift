import { useEffect, useState } from "react";
import ReviewBox from "../../components/ReviewBox";

const ReviewsSection = () => {
  const [stateVar, setStateVar] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://win24-assignment.azurewebsites.net/api/testimonials"
      );
      const dataInJson = await response.json();
      setStateVar(dataInJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="background-widescreen-fixer-howitworks desktop-only-block">
      <section className="section-max-width desktop-only-block">
        <div className="review-flex">
          <div>
            <p>Clients are Loving Our App</p>
          </div>
          {stateVar.map((review) => (
            <ReviewBox
              key={review.id}
              reviewText={review.comment || "No review text available"}
              rating={review.starRating}
              userImg={review.avatarUrl}
              userName={review.author}
              userTitle={review.jobRole}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewsSection;
