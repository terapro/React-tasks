import React from 'react';

import PropTypes from 'prop-types';

const FormButton = (props) => (
    <button className = {'form-button'}> {props.content} </button>

);

FormButton.propTypes = {
    content: PropTypes.string,

};

export {FormButton};