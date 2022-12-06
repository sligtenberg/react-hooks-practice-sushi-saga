import React, { useState } from "react";

function Sushi({ sushi, setPlates, plates }) {
  const [isEaten, setIsEaten] = useState(false)

  const handlePlateClick = () => {
    setIsEaten(true)
    setPlates([...plates, null])
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlateClick}>
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
