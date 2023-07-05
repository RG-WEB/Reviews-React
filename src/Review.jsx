/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/Bi";

const Review = ({
  person,
  handleNextView,
  handlePreview,
  handleRandomView,
}) => {
  const { name, job, image, id, text } = person;

  return (
    <article key={id} className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <BiSolidQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePreview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNextView}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn-hipster btn" onClick={handleRandomView}>
        Surprise Me
      </button>
    </article>
  );
};
export default Review;
