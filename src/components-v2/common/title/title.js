import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Title = (props) => {
  const {ttlRed, ttlWhite, ttlUC, ttlBig, content} = props;
  let itemClass = classNames({
    'ttl': true,
    'ttl-red': ttlRed,
    'ttl-white': ttlWhite,
    'ttl-UC': ttlUC,
    'ttl-big': ttlBig
  });

  return (
    <h2 className={itemClass}>
      {content}
    </h2>);
};

Title.propTypes = {
  ttlBig: PropTypes.bool,
  ttlUC: PropTypes.bool,
  ttlRed: PropTypes.bool,
  ttlWhite: PropTypes.bool,
  content: PropTypes.string
};
Title.defaultProps = {
  ttlBig: false,
  ttlUC: false,
  ttlRed: false,
  ttlWhite: false,
  content: 'Title'
};

export {Title};