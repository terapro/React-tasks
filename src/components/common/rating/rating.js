import React from 'react';
import PropTypes from 'prop-types';

export const Rating = ({value}) => {

  return (
    <span className='rating'>
      {value}
    </span>
  )
};

Rating.propTypes = {
  value: (props, propName) =>
      (typeof props[propName] !== 'number') ?
          new Error("Rating must be a number") :
          (props[propName] > 10 || props[propName] < 0) ?
              new Error(`Rating must be in the range 0-10`) :
              null
};

Rating.defaultProps = {
  value: 0
};

