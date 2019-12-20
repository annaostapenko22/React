import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  padding: 10px;
  text-align: center;
`;
const Percentage = styled.span`
  font-size: 20px;
`;
const getRandomColor = () => {
  let color = Math.floor(Math.random() * 256);
  return color;
};

const StatisticItems = ({ label, percentage }) => {
  return (
    <Item
      style={{
        backgroundColor: `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`,
      }}
    >
      <span className="label">{label}</span>
      <Percentage>{percentage}</Percentage>
    </Item>
  );
};
export default StatisticItems;
