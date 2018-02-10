import React from 'react';
import ScreenRow from './ScreenRow';

const Screen = (props) => {
    return (
        <div className="screen">
            <ScreenRow value={props.question} />
            <ScreenRow value={props.answer} />
        </div>
    );
}

// Define our props expected from the parent component
Screen.propTypes = {
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired
  }

  export default Screen;