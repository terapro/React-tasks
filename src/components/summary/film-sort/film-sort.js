import React from 'react';


import {Button} from '../../common/button/button.js'
import {Label} from '../../common/label/label.js'

import PropTypes from 'prop-types';


const FilmSort = (props) => {
  if (props.sortItems) {
    return (
      <div className='film-sort'>
        <Label content='Sort by '/>
          {
            props.sortItems.list.map(
              (item) => (
                <Button key={item}
                        btnTranspRed  = {item === props.sortItems.active}
                        btnTransp  = {item !== props.sortItems.active}
                        btnClick = {props.changeSortItemCallBack}
                        btnBold = {true}
                        content = {item}
                        id = {item}
                />
              )
            )
          }
      </div>
    );
  } else return '';

};

FilmSort.propTypes = {
  changeSortItemCallBack: PropTypes.func
};





export {FilmSort};