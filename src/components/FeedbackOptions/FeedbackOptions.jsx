import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { Button } from './Button';


export const FeedbackOptions = ({ onLeaveFeedback }) => (
    <ul className={css.feedbackBtnList}>
      <li>
        <Button feedback="good" onLeaveFeedback={onLeaveFeedback}>
          Good
        </Button>
      </li>
      <li>
        <Button feedback="neutral" onLeaveFeedback={onLeaveFeedback}>
          Neutral
        </Button>
      </li>
      <li>
        <Button feedback="bad" onLeaveFeedback={onLeaveFeedback}>
          Bad
        </Button>
      </li>
    </ul>
  ); 