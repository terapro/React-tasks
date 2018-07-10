import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';

const SortItem = (props) => {

  const itemClass = classNames('sort-item',{'sort-item-active': props.active});

  return (<span className={itemClass} id = {props.name} onClick={props.changeSortItemCallBack}>
    {props.name}
  </span>);
};




SortItem.propTypes ={
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  changeSortItemCallBack: PropTypes.func
};

export {SortItem};