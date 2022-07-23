import { ListButton,ItemBtn,Btn } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback, }) => {


    return (


        <ListButton>
            {options.map(option =>
            (<ItemBtn key={option}> <Btn 
                type='button' 
            onClick={() => onLeaveFeedback(option)}>{option}</Btn></ItemBtn>))}
        </ListButton>
       
    )
}


