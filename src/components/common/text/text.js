import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => (
    <span className={'text'}> {props.content}
    </span>
);

Text.propTypes = {
    content: PropTypes.string
};

export {Text};
