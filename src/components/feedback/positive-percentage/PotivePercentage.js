import React from 'react';
const PotivePercentage = props => {
  const { bad, good, neutral, posPercentage } = props;
  return (
    <>
      <p>
        Positive feedback:
        {posPercentage(bad, good, neutral)
          ? Math.round(posPercentage(bad, good, neutral))
          : 0}{' '}
        %
      </p>
    </>
  );
};

export default PotivePercentage;
