import React from 'react';

import AppContext from '../context/AppContext';

const handleSumTotal = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
