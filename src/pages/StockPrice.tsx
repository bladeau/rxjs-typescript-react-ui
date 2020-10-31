import React from 'react';
import Stocks from '../components/stocks/Stocks';
import StockState from '../state/stocks/StockState';

const StockPrice = () => {
  return (
    <>
      <strong>Stock Prices</strong>
      <StockState>
        <Stocks />
      </StockState>
    </>
  );
};

export default StockPrice;
