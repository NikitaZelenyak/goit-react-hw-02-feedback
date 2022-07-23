
import {Component} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from"./Notification/Notification"
class App extends Component{

   state = {
  good: 0,
  neutral: 0,
  bad: 0
}
   
  handlerLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
  };
   

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
       const { good, neutral,  } = this.state;
    return Math.round(good / (this.countTotalFeedback() - neutral) * 100);
  }
   
  
  render() {

    const { good, neutral, bad } = this.state;




        return (
          <div style={{
            marginLeft: 600,
        
          }}>
            <Section title={"Please leave feedback"}>
           <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.handlerLeaveFeedback}>
                </FeedbackOptions>
            </Section>

            <Section title={"Statistics"} >
              {
                this.countTotalFeedback() > 0 ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}>
              </Statistics> :  <Notification message="There is no feedback"></Notification> }
            
             
            </Section>
            
           
        </div>

    )
    }


}


export default App;





