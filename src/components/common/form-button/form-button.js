import React from 'react';

import PropTypes from 'prop-types';

const FormButton = (props) => (
    <button className = {'form-button'} form = {props.parentFormId} type={'button'}> {props.content} </button>
);

FormButton.propTypes = {
    content: PropTypes.string,
    parentFormId: PropTypes.string

};

export {FormButton};