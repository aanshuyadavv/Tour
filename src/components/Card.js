import { useState } from "react";
function Card({ tour, hideCardHandler }) {
  console.log(tour);
  const [readMore, setReadMore] = useState(false);
  const description = readMore
    ? tour.description
    : tour.description.substring(0, 150);
  function readmoreHandler() {
    setReadMore(!readMore);
  }
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={tour.image_link} alt="" />
        </div>
        <div className="cardDetails">
          <h2>{tour.price}</h2>
          <h2>{tour.title}</h2>
          <p>
            {description}
            <span onClick={readmoreHandler}>
              {" "}
              {readMore ? "show less" : "read more"}{" "}
            </span>
          </p>
          <button className="btn" onClick={() => hideCardHandler(tour.id)}>
            Not Interested
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
