import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleEatenSushi, moneyRemaining}) {

  const [sushiArray, setSushiArray] = useState([]);
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(4)

  useEffect(() => {
    fetch(sushis)
    .then(res => res.json())
    .then(data => setSushiArray(data))
  },[])

  const sushiDiv = sushiArray.slice(startIndex,endIndex).map(sushi => <Sushi key={sushi.id} id={sushi.id} name={sushi.name} image={sushi["img_url"]} price={sushi.price} eatenSushi={handleEatenSushi} moneyRemaining={moneyRemaining} />)

  function moreClick(e) {
    let newStartIndex = startIndex + 4;
    let newEndIndex = endIndex + 4;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }

  return (
    <div className="belt">
      {sushiDiv}
      <MoreButton moreClick={moreClick} />
    </div>
  );
}

export default SushiContainer;
