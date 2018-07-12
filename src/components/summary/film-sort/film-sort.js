import React from 'react';


import {Button} from 'src/components/common/button/button.js'
import {Label} from 'src/components/common/label/label.js'

import PropTypes from 'prop-types';


const FilmSort = (props) => {
  const {sortItems, changeSortItemCallBack} = props;
  if (sortItems) {
    return (
      <div className='film-sort'>
        <Label content='Sort by '/>
          {
            sortItems.list.map(
              (item) => (
                <Button key={item}
                        btnTranspRed  = {item === sortItems.active}
                        btnTransp  = {item !== sortItems.active}
                        btnClick = {changeSortItemCallBack}
                        btnBold
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