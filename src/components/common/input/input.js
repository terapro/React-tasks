import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({onStartTyping,  onKeyEnterPressed, placeholder, value}) => (

  <input className={'search-input'}
         type='text'
         placeholder = {placeholder}
         onInput = {onStartTyping}
         onKeyPress={onKeyEnterPressed}
         value = {value}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
    onStartTyping: PropTypes.func.isRequired,
    onKeyEnterPressed: PropTypes.func,
    value: PropTypes.string
};

Input.defaultProps = {
  placeholder: 'Start typing...',
    onKeyEnterPressed: () => {},
    value: ''
};
