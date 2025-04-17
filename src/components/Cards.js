import Card from "./Card";
function Cards({ tours, hideCardHandler }) {
  // console.log(tours);
  return (
    <>
      <div className="cards">
        {tours.map((tour) => {
          return (
            <Card key={tour.id} tour={tour} hideCardHandler={hideCardHandler} />
          );
        })}
      </div>
    </>
  );
}
export default Cards;
