import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiData }) {
  const [index, setIndex] = useState(0)

  const displayedSushi = sushiData.filter(sushi => {
    return (sushi.id > index && sushi.id < index + 5) ? true : false
  })

  const sushiComponents = displayedSushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} />)

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton setIndex={setIndex} index={index}/>
    </div>
  );
}

export default SushiContainer;
