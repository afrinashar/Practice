import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Freecodecamp.css"
export const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (geturrentIndex) => {
    setRating(geturrentIndex);
  };
  const handleMousehover = (geturrentIndex) => {
    setHover(geturrentIndex);
  };
  const handleMouseleave = () => {
    setHover(rating)
  };
  return (
    <>
      <div>Star</div>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMousehover(index)}
            onMouseLeave={() => handleMouseleave()}
            size={40}
          />
        );
      })}
    </>
  );
};
