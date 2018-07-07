import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <input className={'search-input'} type={'text'} placeholder = {props.placeholder} onInput = {props.searchInputCallback} value = {props.value}/>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  searchInputCallback: PropTypes.func,
  value: PropTypes.string
};

export {Input};