import React from 'react';
const Total = props => {
  const { good, bad, neutral, total } = props;

  return (
    <>
      <p>Total: {total(good, bad, neutral)} </p>
    </>
  );
};

export default Total;
