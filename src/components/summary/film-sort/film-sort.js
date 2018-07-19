import React from 'react';

import {Button} from 'src/components/common/button/button.js'
import {Label} from 'src/components/common/label/label.js'

import PropTypes from 'prop-types';

const FilmSort = (props) => {
  const {sortParameters, changeSortItemCallBack} = props;

    return (
      <div className='film-sort'>
        <Label content='Sort by '/>
          {
            sortParameters.parameters.map(
              (item) => (
                <Button key={item}
                        btnTranspRed  = {item === sortParameters.chosenParameter}
                        btnTransp  = {item !== sortParameters.chosenParameter}
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
};

FilmSort.propTypes = {
  changeSortItemCallBack: PropTypes.func,

};
FilmSort.defaultProps = {
  changeSortItemCallBack: ()=>{}
};





export {FilmSort};