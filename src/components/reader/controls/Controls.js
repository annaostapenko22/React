import React, { Component } from 'react';
class Controls extends Component {
  // state = {
  //   disabledNext: false,
  //   disabledPrev: true,
  // };
  handleClickPrev = () => {
    this.props.handleClickPrev();
    // this.setState({ disabledNext: false });
    // this.setState({ disabledPrev: false });
    // if (this.props.items === 1) {
    //   this.setState({ disabledPrev: true });
    // }
  };
  handleClickNext = () => {
    this.props.handleClickNext();
    // this.setState({ disabledNext: false });
    // this.setState({ disabledPrev: false });
    // if (this.props.items === this.props.publication.length - 2) {
    //   this.setState({ disabledNext: true });
    // }
  };
  render() {
    return (
      <section>
        <button
          type="button"
          onClick={this.handleClickPrev}
          disabled={this.props.items === 0}
        >
          Назад
        </button>
        <button
          type="button"
          onClick={this.handleClickNext}
          disabled={this.props.items === this.props.publication.length - 2}
        >
          Вперед
        </button>
      </section>
    );
  }
}

export default Controls;
