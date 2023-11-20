import React from 'react'
import Stock from './Stock';
import Home from './Home';

import { Link } from "react-router-dom";

function Dashboard() {
  // const [data, setData] = useState(stocks)
    const stocks = [
        {name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5},
        {name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12},
        {name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842},
        {name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08},
        {name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91},
        {name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58}
      ];
   
   return (
    <>
    <div><h1>All stocks</h1></div>
    <div >
        {stocks.map((stock) => {
            
            const { symbol , lastPrice, change, high,  low, open } = stock;

            return(
                <Link to={`/stocks/${symbol}`}>
                    <h2> {symbol} / {lastPrice} / {change}</h2>
                    <h3>{high} / {low} / {open}</h3>
                </Link>
            )
        })}

    </div>
    
    </>
  
  
  
    )
}

export default Dashboard