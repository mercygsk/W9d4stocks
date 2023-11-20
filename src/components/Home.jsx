import React from 'react'
import { Link } from "react-router-dom";




function Home() {
 
  const stocks = [
    {name: "Apple Inc.", symbol: "AAPL"},
    {name: "Microsoft Corporation", symbol: "MSFT"},
    {name: "Alphabet Inc.", symbol: "GOOGL"},
    {name: "Facebook, Inc.", symbol: "FB"},
    {name: "Oracle Corporation", symbol: "ORCL"},
    {name: "Intel Corporation", symbol: "INTL"}
   ];


return (
  <>

  <di><h1>"This is the Homepage page"</h1></di>
   <div>
      <h2>{stocks.map((stock) => {const {name, symbol} = stock;  
     return(
      <Link to = {`/stocks`}>
          <h2>{name} {symbol}</h2>
      </Link>
    )
    
    
     })}</h2>
    </div> 

    </> 
   
)
   
} 

export default Home