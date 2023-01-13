import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FreedbackOptions/FreedbackOptions';
import { Statistics } from './Statistics/Statictics';

export const App =() => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  
  
  const handlFeedback =  option  => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  const handlTotalFeedback = () => {
    
    return good + neutral + bad;
  };

  const handlPositiveFeedback = () => {
    
    const totalFeedback = handlTotalFeedback();

    if (totalFeedback < 1) {
      return 0;
    }

    return Math.round((good * 100) / totalFeedback);
  }

  
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={handlFeedback}
          ></FeedbackOptions>
        </Section>
        {handlTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statictics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={handlTotalFeedback()}
              positivePercentage={handlPositiveFeedback()}
            />
          </Section>
        )}
      </Container>
    );
  }

