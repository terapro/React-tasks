import React from 'react';

import PropTypes from 'prop-types';

const SearchRadioEl = (props) => (

    <React.Fragment>
    <input className={'search-radio-input'} type = {'radio'} name = {props.name} id = {props.id} defaultChecked = {props.checked} />
    <label htmlFor = {props.id} className = {'search-radio-label'}> {props.text} </label>
    </React.Fragment>

);

SearchRadioEl.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
    checked: PropTypes.bool
};


export {SearchRadioEl};