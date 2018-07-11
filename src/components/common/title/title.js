import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Title = (props) => {
  let itemClass = classNames({
    'ttl': true,
    'ttl-red': props.ttlRed,
    'ttl-white': props.ttlWhite,
    'ttl-UC': props.ttlUC,
    'ttl-big': props.ttlBig

  });

  return (<h2 className={itemClass}>{props.content}</h2>);
};


Title.propTypes = {
  ttlBig: PropTypes.bool,
  ttlUC: PropTypes.bool,
  ttlRed: PropTypes.bool,
  ttlWhite: PropTypes.bool,
  content: PropTypes.string
};
Title.defaultProps = {
  content: 'Assign a title'
};

export {Title};