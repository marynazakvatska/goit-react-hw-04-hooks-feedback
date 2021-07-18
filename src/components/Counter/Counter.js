import {useState, useEffect} from "react";

import FeedbackOptions from "../FeedBackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import s from "./Counter.module.css";
import Section from "../Section/Section";

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)
 


   const increment = (btn) => {
   
    switch (btn) {
      case 'good':
        setGood(stateGood => stateGood + 1);
        break;
      case 'neutral':
        setNeutral(stateNeutral => stateNeutral + 1);
        break;
      case 'bad':
        setBad(stateBad => stateBad + 1);
        break;
      
      default: return;
    }
    } 
  
  
  const countTotal = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
   return Math.round((good * 100) /countTotal())};



  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          btns={['good', 'neutral', 'bad']}
          onLeaveFeedback={increment}
        />
      </Section>

      <Section title="Statictics">
        {countTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positiveFeedPercentage={positivePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
  
  }


