import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([])
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      setSushiData(data)
    })
  }, [])
  


  return (
    <div className="app">
      <SushiContainer
        sushiData={sushiData}
        setPlates={setPlates}
        plates={plates}
        setMoney={setMoney}
        money={money}
      />
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
