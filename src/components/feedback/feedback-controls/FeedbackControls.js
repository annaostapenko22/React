import React, { Component } from 'react';

export default class FeedbackControls extends Component {
  onClickGood = evt => {
    this.props.feedbackCounter(evt.target.value);
  };
  onClickNeutral = evt => {
    this.props.feedbackCounter(evt.target.value);
  };

  onClickBad = evt => {
    this.props.feedbackCounter(evt.target.value);
  };
  render() {
    return (
      <>
        <button onClick={this.onClickGood} value="good">
          Good
        </button>
        <button onClick={this.onClickNeutral} value="neutral">
          Neutral
        </button>
        <button value="bad" onClick={this.onClickBad}>
          Bad
        </button>
      </>
    );
  }
}
