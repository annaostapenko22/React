import React from 'react';
import styled from 'styled-components';
const TableItems = styled.td`
  padding: 10px;
  border: solid 1px black;

  text-align: left;
`;

const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #d9f9ff;
  }
  :nth-child(odd) {
    background-color: #8fd5e3;
  }
`;
const TransactionsItems = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableItems>{type}</TableItems>
      <TableItems>{amount}</TableItems>
      <TableItems>{currency}</TableItems>
    </TableRow>
  );
};

export default TransactionsItems;
