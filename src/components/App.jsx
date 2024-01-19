import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedBackOptions } from './FeedbackOptions/FeedBackOptions';
import { Statistics } from './Statistics/Statistics';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leavefeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevStateGood => prevStateGood + 1);
        break;
      case 'neutral':
        setNeutral(prevStateNeutral => prevStateNeutral + 1);
        break;
      case 'bad':
        setBad(prevStateBad => prevStateBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? ((good / total) * 100).toFixed(0) : 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leavefeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </Container>
  );
};
