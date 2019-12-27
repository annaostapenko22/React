import React, { Component } from 'react';
import ContactItem from './contact-item/ContactItem';
import SearchPanel from './search-panel/SearchPanel';
class Contacts extends Component {
  render() {
    return (
      <div>
        <h3>Contacts</h3>
        <SearchPanel onHandleFilter={this.props.onHandleFilter} />
        <ul>
          {this.props.value.map(elem => (
            <li key={elem.id} data-value={elem.id}>
              <ContactItem {...elem} handleDelete={this.props.handleDelete} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
