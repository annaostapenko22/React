import React, { Component } from 'react';
import shortid from 'short-id';
import Contacts from './contacts/Contacts';
import styles from '../phonebook/Phonebook.module.css';
class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  deleteItems = id => {
    console.log('delte');
    this.setState(({ contacts }) => {
      const newArr = contacts.filter(elem => elem.id !== id);
      return {
        contacts: newArr,
      };
    });
  };

  onHandleGetValue = evt => {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      //   id: shortid.generate(),
      [name]: value,
    });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    if (!name || !number) {
      console.log('error');
      alert('Please fill all the fileds');
      return;
    }
    if (this.state.contacts.find(elem => elem.name.includes(name))) {
      console.log('exist');
      alert(`This user: ${name} already exists in your book`);
      return;
    }

    this.getPost({ id: shortid.generate(), name, number });
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  getPost = post => {
    this.setState(state => ({
      contacts: [...state.contacts, post],
    }));
  };

  setFilterState = value => {
    this.setState({ filter: value });
  };

  filterItems = (filter, contacts) => {
    let contactList = [...contacts];
    if (filter) {
      contactList = contactList.filter(elem =>
        elem.name.toLowerCase().includes(filter),
      );
    }
    return contactList;
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredItems = this.filterItems(filter, contacts);

    return (
      <>
        <form onSubmit={this.onHandleSubmit} className={styles.form}>
          <h2>Phonebook</h2>
          <label>
            <h3>Name </h3>
            <input
              type="text"
              onChange={this.onHandleGetValue}
              value={name}
              name="name"
            />
          </label>
          <label>
            <h3> Phone</h3>
            <input
              type="tel"
              value={number}
              onChange={this.onHandleGetValue}
              name="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="FORMAT: XXX-XX-XXX"
            />
          </label>
          <button className={styles.button}>Add contact</button>
        </form>
        <Contacts
          value={filteredItems}
          onHandleFilter={this.setFilterState}
          handleDelete={this.deleteItems}
        />
      </>
    );
  }
}

export default Phonebook;
