import React, { useContext, useEffect, useState } from 'react';
import { StockContext } from '../../state/stocks/StockContext';

const Stocks = () => {
  const [AppleStockValue, setAppleStockValue] = useState(0);

  const StockObservableObject = useContext(StockContext);

  useEffect(() => {
    StockObservableObject?.subscribe((appleStock) => {
      //debugger;
      setAppleStockValue(appleStock);
    });
  }, [StockObservableObject]);

  return <p>{AppleStockValue}</p>;
};

export default Stocks;
