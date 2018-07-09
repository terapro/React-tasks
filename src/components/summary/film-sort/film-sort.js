import React from 'react';

import {SortItem} from '../sort-item/sort-item.js';
import {SortText} from '../sort-text/sort-text.js';


const FilmSort = (props) => {
  if (props.sortItems) {
    return (
      <div className='film-sort'>
        <SortText content='Sort by '/> <SortItem name='release date' /> <SortItem name='rating' />
      </div>
    );
  } else return '';

};







export {FilmSort};