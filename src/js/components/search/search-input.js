import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => (
    <input className={'search-input'} type={'text'} placeholder={props.placeholder}/>
);

SearchInput.propTypes = {
    placeholder: PropTypes.string
};


export {SearchInput};