import React from 'react';
import './Answers.css';

const Answers = () => {
  return (
    <div>
      <h3 className='heading-answer'>Question Answer Section</h3>
      <div className='answers-container'>
        <div className='ans-container'>
          <h3>How React Works?</h3>
          <p>
            React is a javascript library. React works in declarative code. It
            does not commit state changes one after the other if there are
            multiple state changes. It goes through its virtual DOM, creates a
            list of those changes that need to be made to the actual DOM, and
            then does it all in one single process.
          </p>
        </div>
        <div className='ans-container'>
          <h3>How useState Works?</h3>
          <p>
            useState is a Hook that allows you to have state variables in
            functional components. The useState hook allows us declare one or
            more state variables in function components. Under the hood, React
            keeps track of these state variables and ensures they stay
            up-to-date on subsequent re-renders of the component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answers;
