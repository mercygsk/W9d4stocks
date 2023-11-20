import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Stock() {
  const apiKey = "a165b050d657c4ab48fba95d2031793d";

  const params = useParams();
  console.log(params);
  const symbol = params.symbol;

  //const url = `http://rest.stockssapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  const url = `https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL?apikey=a165b050d657c4ab48fba95d2031793d`
  const [stockss, setStockss] = useState("null");

  const getstockss = async () => {
    try {
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        setStockss(data);
    } catch (e) {
        console.error(e);
    }
}

useEffect(() => {
  getstockss();
}, []);

const loaded = () => {
  return (
      <div>
          <h1>
              {stockss.companiesPriceList.symbol}
          </h1>
          {/* <h2>{stockss.companiesPriceLists.price}</h2> */}
      </div>
  )
}

  // function for when data doesn't exist yet
  const loading = () => {
    return <h1>Loading...</h1>
}

  return (
  stockss && stockss.companiesPriceList ? loaded() : loading()
  )
}

export default Stock