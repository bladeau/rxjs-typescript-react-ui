import React, { useContext, useEffect, useState } from 'react';
import { StockContext } from '../../state/stocks/StockContext';

console.log(StockContext);
const Stocks = () => {
  const [AppleStockValue, setAppleStockValue] = useState(0);
  console.log('import ' + StockContext);
  const StockObservableObject = useContext(StockContext);

  useEffect(() => {
    console.log(StockContext);

    StockObservableObject?.subscribe((appleStock) => {
      debugger;
      setAppleStockValue(appleStock);
    });
  }, [StockObservableObject]);

  return <p>{AppleStockValue}</p>;
};

export default Stocks;
