import React, { useState } from "react";
import SushiContainer from "./SushiContainer";

function Sushi({ sushi, setPlates, plates, setMoney, money }) {
  const [isEaten, setIsEaten] = useState(false)

  const handlePlateClick = () => {
    if (money >= sushi.price) {
      setIsEaten(true)
      setPlates([...plates, null])
      setMoney(money - sushi.price)
    }

    else alert("Out of money")
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={isEaten ? null : handlePlateClick}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
