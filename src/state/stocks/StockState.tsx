import React, { PropsWithChildren } from 'react';
import { Observable } from 'rxjs';
import { StockContext } from './StockContext';
import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { ENDPOINT } from '../../variables';

const StockState = (props: PropsWithChildren<any>) => {
  const [StockObservableObject, setStockObservableState] = useState<
    Observable<any>
  >();

  useEffect(() => {
    // debugger;
    const _socket = socketIOClient(ENDPOINT);
    const stockObservable = new Observable((observer) => {
      _socket.on('appleStocks', (appleStock: object) =>
        observer.next(appleStock)
      );
    });
    setStockObservableState(stockObservable);
  }, []);

  return (
    <StockContext.Provider value={StockObservableObject}>
      {props.children}
    </StockContext.Provider>
  );
};

export default StockState;
