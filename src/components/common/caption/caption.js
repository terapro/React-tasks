import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Caption =(props) => {
  const {txtWhite, txtItalic, content} = props;
  let itemClass = classNames({
    'txt': true,
    'txt-white': txtWhite,
    'txt-italic': txtItalic
  });
  return (
    <p className={itemClass}>
      {content}
    </p>
  );
};

Caption.propTypes = {
  txtWhite: PropTypes.bool,
  txtItalic: PropTypes.bool,
  content: PropTypes.string
};

Caption.defaultProps = {
  txtWhite: false,
  txtItalic: false,
  content: 'Caption'
};