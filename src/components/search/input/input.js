import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
    <input className={'search-input'} type={'text'} placeholder={props.placeholder}/>
);

Input.propTypes = {
    placeholder: PropTypes.string
};


export {Input};