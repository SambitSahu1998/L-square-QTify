import React from 'react';
import '../modules/FeedbackButton.module.css';
import {Button} from '@mui/material';

const FeedbackButton = ({text}) => {
  return (
    <Button variant="contained" className="feedback-button">
        {text}
    </Button>
  )
}

export default FeedbackButton;