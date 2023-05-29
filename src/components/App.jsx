import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container, Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = nameFeedback => {
    this.setState(oldData => ({
      [nameFeedback]: oldData[nameFeedback] + 1,
    }));
    // {
    //   let obj = { ...oldData };

    //   obj[nameFeedback] = oldData[nameFeedback] + 1;

    //   return obj;
    // });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, item) => acc + item, 0);
  };

  // countTotalFeedback = () => {
  //   return this.state.good + this.state.neutral + this.state.bad;
  // };

  countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = Math.round((good / total) * 100) || 0;
    return positivePercentage;
  };

  // countPositiveFeedbackPercentage = () => {
  //   return Math.floor(
  //     (this.state.good /
  //       (this.state.good + this.state.neutral + this.state.bad)) *
  //       100 || 0
  //   );
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      good,
      total,
    );

    return (
      <Container>
        <Wrapper>
          <Section title="Please leave your feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedbackPercentage}
              ></Statistics>
            ) : (
              <Notification message="There is no yet feedback"></Notification>
            )}
          </Section>
        </Wrapper>
      </Container>
    );
  }
}