import React from 'react';
import PropTypes from 'prop-types';


const Rating = (props) => {


  return (
    <span className='rating'>
      {props.value}
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
