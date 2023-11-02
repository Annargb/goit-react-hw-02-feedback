export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((option, index) => (
      <li key={index}>
        <button type="button" data-id={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);
