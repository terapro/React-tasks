import React from 'react';


import {Button} from 'src/components/common/button/button.js'
import {Label} from 'src/components/common/label/label.js'

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
FilmSort.defaultProps = {
  changeSortItemCallBack: ()=>{}
};





export {FilmSort};