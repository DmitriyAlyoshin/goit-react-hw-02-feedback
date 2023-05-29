import PropTypes from 'prop-types';

import { OptionsList, OptionsItem, OptionsBtn } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <OptionsList>
      {options.map(nameFeedback => {
        const label =
          nameFeedback.charAt(0).toUpperCase() + nameFeedback.slice(1);
        return (
          <OptionsItem key={nameFeedback}>
            <OptionsBtn
              type="button"
              onClick={() => {
                onLeaveFeedback(nameFeedback);
              }}
            >
              {label}
            </OptionsBtn>
          </OptionsItem>
        );
      })}
    </OptionsList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
