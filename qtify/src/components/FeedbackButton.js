import React from 'react';
import Feedback from '../modules/FeedbackButton.module.css';

const FeedbackButton = ({text}) => {
  const textStyle = {
    fontFamily: 'Lato',
    fontSize: '17px',
    fontWeight: '700',
  };
  return (
    <button variant="contained" className={Feedback.feedbackButton}>
         <span style={textStyle}>{text}</span>
    </button>
  )
}

export default FeedbackButton;