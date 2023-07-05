import { useState } from "react";
import reviews from "./data";
import Review from "./Review";

const App = () => {
  const [index, setIndex] = useState(0);
  const person = reviews[index];

  const handlePreview = () => {
    if (index < 1) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNextView = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handleRandomView = () => {
    setIndex(Math.floor(Math.random(0) * reviews.length));
  };
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2></h2>
        </div>
        <div className="underline"></div>
        <Review
          person={person}
          handlePreview={handlePreview}
          handleNextView={handleNextView}
          handleRandomView={handleRandomView}
        />
      </section>
    </main>
  );
};
export default App;
