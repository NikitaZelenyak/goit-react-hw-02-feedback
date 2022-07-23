import { Item } from "./Statistics.styled"
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<>

            <ul>
              <Item>Good:{good}</Item>
              <Item>Neutral:{neutral}</Item>
              <Item>Bad:{bad}</Item>
              <Item>Total:{total }</Item>
            </ul>
        <p>Positive feedback: {positivePercentage}%</p>
         </>
        )
       
}