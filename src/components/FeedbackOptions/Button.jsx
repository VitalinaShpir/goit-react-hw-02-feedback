export const Button = ({ children, feedback, onLeaveFeedback }) => {
    return (
      <button
        className="feedbackBtn"
        type="button"
        data-feedback={feedback}
        onClick={onLeaveFeedback}
      >
        {children}
      </button>
    );
  };