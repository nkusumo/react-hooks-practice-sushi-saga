import React, { useState } from "react";

function Sushi({id, name, image, price, eatenSushi, moneyRemaining}) {

  const [eaten, setEaten] = useState(false)

  function handleClick(e) {
    if (!eaten && moneyRemaining > price) {
      setEaten(true)
      eatenSushi(price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
