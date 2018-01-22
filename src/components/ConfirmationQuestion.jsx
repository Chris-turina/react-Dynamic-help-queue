import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestion(props){
  return (
    <div>
      <p>Have you gone through all the steps on the sdfsdf</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestion.PropTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestion;
