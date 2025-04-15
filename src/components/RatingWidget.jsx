import React, { useState } from "react";
import PropTypes from "prop-types";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = value => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset after submission
    } else {
      alert("Please select a rating between 1 and 5.");
    }
  };

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map(value => (
        <span
          key={value}
          style={{
            cursor: "pointer",
            color:
              value <= (hoveredRating || rating) ? "gold" : "gray",
            fontSize: "24px",
          }}
          onMouseEnter={() => setHoveredRating(value)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => handleClick(value)}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
