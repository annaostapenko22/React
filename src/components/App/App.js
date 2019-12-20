import React from 'react';
import Profile from '../Profile/Profile';
import Statistic from '../Staticstics/Statisctics';
import Friends from '../Friends/Friends';
import Transaction from '../Transaction/Transaction';
const App = ({ user, statistic, friends, transaction }) => {
  // console.log(user);
  console.log(statistic);
  return (
    <>
      <Profile {...user} />
      <Statistic stats={statistic} title="File upload" />
      <Friends friends={friends} />
      <Transaction transaction={transaction} />
    </>
  );
};
export default App;
