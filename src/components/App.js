import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [eatenSushi, setEatenSushi] = useState([]);
  const [money, setMoney] = useState(100)

  function handleEatenSushi(price) {
    let newArray = [...eatenSushi, price]
    setEatenSushi(newArray)
    setMoney(100 - newArray.reduce((a, b) => a + b, 0))
  }

  return (
    <div className="app">
      <SushiContainer sushis={API} handleEatenSushi={handleEatenSushi} moneyRemaining={money} />
      <Table plates={eatenSushi} />
    </div>
  );
}

export default App;
