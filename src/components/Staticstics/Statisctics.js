import React from 'react';
import StatiscticItems from '../Staticstics/StatisticItems';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Statistics = styled.section`
  background-color: rgb(235, 231, 231);
  width: 300px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 20px;
`;

const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
`;

const Title = styled.h2`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: grey;
  font-family: sans-serif;
`;

const Statisctics = ({ title, stats }) => {
  console.log(stats);
  return (
    <Statistics>
      <Title>{title}</Title>

      <StatsList>
        {stats.map(elem => (
          <StatiscticItems key={elem.id} {...elem} />
        ))}
      </StatsList>
    </Statistics>
  );
};

Statisctics.defaultProps = {
  title: 'Default title',
};

Statisctics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statisctics;
