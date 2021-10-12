import React, {useState } from "react";
import "./cardcontainer.css";
import Card from "./Card";
import { useCar } from "../../context/CarContext";

function CardContainer() {
  const [page, setPage] = useState(3);

  const { filterData, location } = useCar();
  let carsData = null;

  if (location !== "All location")
    carsData = filterData.filter((elem) => elem.location === location);
  else carsData = filterData;

  // let finalCarData = useRef(carsData.slice(0, page));

  // useEffect(() => {
  //   function getData() {
  //     let temp = carsData.slice(0, page);

  //     if (temp) {
  //       finalCarData.current = temp;
  //     }
  //   }

  //   getData();

  //   console.log(finalCarData.current);
  // }, [page, carsData]);

  function scrollToEnd() {
    setPage(page + 2);
  }

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div className="card-container">
      {carsData.length === 0 ? (
        <h1>No cars at your location</h1>
      ) : (
        carsData.map((elem) => (
          <Card
            key={elem.id}
            id={elem.id}
            name={elem.name}
            km={elem.km}
            owner={elem.owner}
            fuel={elem.fuel}
            model={elem.model}
            emi={elem.emi}
            price={elem.price}
            img={elem.img}
            location={elem.location}
          />
        ))
      )}
    </div>
  );
}

export default CardContainer;
