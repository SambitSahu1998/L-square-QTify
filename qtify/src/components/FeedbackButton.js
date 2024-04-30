import React from 'react';
import Feedback from '../modules/FeedbackButton.module.css';

const FeedbackButton = ({text}) => {
  return (
    <button variant="contained" className={Feedback.feedbackButton}>
        {text}
    </button>
  )
}

export default FeedbackButton;