import React from 'react';
import PropTypes from 'prop-types';
import FriendsItems from '../Friends/FriendsItems';
import styles from './Friends.module.css';
const Friends = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={styles.friendList}>
      {friends.map(elem => (
        <FriendsItems {...elem} key={elem.id} />
      ))}
    </ul>
  );
};
Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Friends;
