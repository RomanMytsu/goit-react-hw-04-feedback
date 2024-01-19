import { Btn, FeedBackList } from './FeedBackOptions.styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedBackList>
      {options.map(option => (
        <li key={option}>
          <Btn type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Btn>
        </li>
      ))}
    </FeedBackList>
  );
};
