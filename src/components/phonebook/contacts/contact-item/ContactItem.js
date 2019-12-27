import React, { Component } from 'react';
import styles from './ContactItem.module.css';
class ContactItem extends Component {
  handleClick = evt => {
    const ids = evt.currentTarget.closest('li').dataset.value;
    this.props.handleDelete(ids);
  };
  render() {
    const { name, number } = this.props;
    return (
      <>
        <p>{name}:</p>
        <p>{number}</p>
        <button className={styles.button} onClick={this.handleClick}>
          delete
        </button>
      </>
    );
  }
}

export default ContactItem;
