import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Caption =(props) => {
  let itemClass = classNames({
    'txt': true,
    'txt-white': props.txtWhite
  });

  return (
    <p className={itemClass}>{props.content}</p>
  );
};
Caption.propTypes ={
  txtWhite: PropTypes.bool,
  content: PropTypes.string
};

export {Caption};