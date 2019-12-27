import React from 'react';
const Progress = ({ items, publications }) => {
  return (
    <p>
      {items + 1}/{publications.length}
    </p>
  );
};

export default Progress;
