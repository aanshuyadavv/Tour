import "./App.css";
import Cards from "./components/Cards";
import data from "./data";
import { useState } from "react";

function App() {
  const [tours, settours] = useState(data);
  function hideCardHandler(id) {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    settours(updatedTours);
  }

  function refreshTour() {
    settours(data);
  }

  if (tours.length === 0) {
    return (
      <div className="reset-center">
        <h2 className="reset">No more tours available. Enjoy your vacation!</h2>
        <button className="btn" onClick={refreshTour}>refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Plan with Love</h1>
      <Cards  tours={tours} hideCardHandler={hideCardHandler}></Cards>
    </div>
  );
}

export default App;
