import React, { Component } from 'react';
class SearchPanel extends Component {
  state = {
    value: '',
  };
  onChangePanel = evt => {
    const values = evt.target.value;
    this.props.onHandleFilter(values);
  };
  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          placeholder="Search contact"
          onChange={this.onChangePanel}
          //   value={this.state.value}
        />
      </>
    );
  }
}

export default SearchPanel;
