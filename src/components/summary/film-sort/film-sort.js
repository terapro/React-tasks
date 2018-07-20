import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'src/components/common/button/button.js'
import {Label} from 'src/components/common/label/label.js'

export const FilmSort = ({sortParameters, onParameterClick}) => (
    <div className='film-sort'>
        <Label content='Sort by '/>
          {sortParameters.parameters.map(
              (item) => (
                <Button key={item}
                        btnTranspRed  = {item === sortParameters.chosenParameter}
                        btnTransp  = {item !== sortParameters.chosenParameter}
                        btnClick = {onParameterClick}
                        btnBold
                        content = {item}
                />
            ))}
      </div>
    );

FilmSort.propTypes = {
    onParameterClick: PropTypes.func,
    sortParameters: PropTypes.shape({
        parameters: PropTypes.arrayOf(PropTypes.string),
        chosenParameter: PropTypes.string
    }).isRequired

};
FilmSort.defaultProps = {
    onParameterClick: ()=>{}
};