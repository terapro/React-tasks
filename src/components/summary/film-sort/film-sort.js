import React from 'react';

import {SortItem} from '../sort-item/sort-item.js';
import {SortText} from '../sort-text/sort-text.js';

import PropTypes from 'prop-types';


const FilmSort = (props) => {
  if (props.sortItems) {
    return (
      <div className='film-sort'>
        <SortText content='Sort by '/>
        {props.sortItems.list.map((item) => ( <SortItem name={item} key={item} active = {item === props.sortItems.active} changeSortItemCallBack = {props.changeSortItemCallBack} />))}
      </div>
    );
  } else return '';

};

FilmSort.propTypes = {
  changeSortItemCallBack: PropTypes.func
};





export {FilmSort};