import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../slices/counter';
import { Presenter } from './Presenter';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState(2);

  const handleDecrement = () => { dispatch(decrement()) }
  const handleIncrement = () => { dispatch(increment()) }
  const handleIncrementByAmount = () => { dispatch(incrementByAmount(incrementAmount)) }
  const handleIncrementAsync = () => { dispatch(incrementAsync(incrementAmount)) }
  const handleIncrementIfOdd = () => { dispatch(incrementIfOdd(incrementAmount)) }
  const handleSetIncrementAmount = (incrementAmount: number) => { setIncrementAmount(incrementAmount) }

  return (<Presenter
    {
      ...{
        states: {
          count,
          incrementAmount,
        },
        actions: {
          handleDecrement,
          handleIncrement,
          handleIncrementByAmount,
          handleIncrementAsync,
          handleIncrementIfOdd,
          handleSetIncrementAmount,
        },
      }
    }
  />)
}
