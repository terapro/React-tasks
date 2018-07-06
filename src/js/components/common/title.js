import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => (
    <h2 className={'title'}>{props.content}</h2>

);

Title.propTypes = {
    content: PropTypes.string
};

export {Title};