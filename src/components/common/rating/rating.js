import React from 'react';
import PropTypes from 'prop-types';


const Rating = ({value}) => {

  return (
    <span className='rating'>
      {value}
    </span>
  )

};

Rating.propTypes = {
  value: PropTypes.number
};
Rating.defaultProps = {
  value: 0
};

export {Rating};
