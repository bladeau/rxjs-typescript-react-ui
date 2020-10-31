import { createContext } from 'react';
import { Observable } from 'rxjs';

export const StockContext = createContext<Observable<any> | undefined>(
  undefined
);
