import React, { Component } from 'react';
import FeedbackControls from '../feedback/feedback-controls/FeedbackControls';
import Total from '../feedback/total/Total';
import PositivePercentage from '../feedback/positive-percentage/PotivePercentage';
import Reader from '../reader/Reader';
import Phonebook from '../phonebook/Phonebook';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackCounter = value => {
    this.setState(state => {
      return {
        [value]: state[value] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (100 * good + neutral) / (bad + good + neutral);
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h2>Please leave your feedback</h2>
        <FeedbackControls feedbackCounter={this.feedbackCounter} />
        {this.countTotalFeedback() === 0 ? (
          <p>No feedbacks given</p>
        ) : (
          <>
            <h3>Statistics</h3>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <Total
              bad={bad}
              good={good}
              neutral={neutral}
              total={this.countTotalFeedback}
            />
            <PositivePercentage
              bad={bad}
              good={good}
              neutral={neutral}
              posPercentage={this.countPositiveFeedbackPercentage}
            />{' '}
          </>
        )}
        <Reader publications={this.props.publications} />
        <Phonebook />
      </>
    );
  }
}

export default App;
