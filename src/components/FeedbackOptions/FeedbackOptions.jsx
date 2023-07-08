// import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            className={css.feedbackBtn}
            type="button"
            key={option}
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};


FeedbackOptions.propTypes={
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     this.setState(prevState => {
//       return { good: prevState.good + 1 };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <p>Please leave your feedback</p>
//         <ul>
//           <li>
//             <button type="button" onClick={this.handleClick}>
//               Good: {this.state.good}
//             </button>
//           </li>
//           <li>
//             <button type="button">Neutral: {this.state.neutral}</button>
//           </li>
//           <li>
//             <button type="button">Bad: {this.state.bad}</button>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
