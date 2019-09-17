import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';
import ToggleOption from '../ToggleOption';

function Toggle(props) {
  let content = <option>--</option>;

  const { values } = props;
  if (values) {
    content = props.values.map((value) => (
      <ToggleOption
        key={value}
        value={value}
        message={props.messages[value]}
      />
    ));
  }

  const { value: value1 } = props;
  const { onToggle } = props;
  return (
    <Select value={value1} onChange={onToggle}>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default Toggle;
