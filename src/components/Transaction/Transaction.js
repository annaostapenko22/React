import React from 'react';
import TransactionItems from './TransactionsItems';
import styled from 'styled-components';

const TransactionHistory = styled.table`
  border-collapse: collapse;
  width: 600px;
  margin: 0 auto;
`;
const TransactionHeading = styled.th`
  border: solid 1px black;
  padding: 10px;
  background-color: #49dea5;
`;
const Transaction = ({ transaction }) => {
  console.log(transaction);
  return (
    <TransactionHistory>
      <thead>
        <tr>
          <TransactionHeading>Type</TransactionHeading>
          <TransactionHeading>Amount</TransactionHeading>
          <TransactionHeading>Currency</TransactionHeading>
        </tr>
      </thead>

      <tbody>
        {transaction.map(elem => (
          <TransactionItems key={elem.id} {...elem} />
        ))}
      </tbody>
    </TransactionHistory>
  );
};

export default Transaction;
