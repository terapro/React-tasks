import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'src/components/common/label/label.js';
import {Button} from 'src/components/common/button/button.js'

const TypeSection = (props) => {
  const {searchTypes, searchTypeCallback} = props;
  return (
    <div className={'search-type-section'}>
      <Label content={'search by'} labelUC labelWhite />
      {
        searchTypes.list.map((item) => (
            <Button btnRed={item === searchTypes.active}
                    btnGrey={item !== searchTypes.active}
                    key = {item}
                    id = {item}
                    content = {item}
                    btnClick={searchTypeCallback}
                    btnInline
                    btnUC
            />
          )
        )
      }
    </div>
  );

};


TypeSection.propTypes = {
  searchTypes: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.string
  }).isRequired,
  searchTypeCallback: PropTypes.func
};
TypeSection.defaultProps = {
  searchTypeCallback: ()=> {}
};

export {TypeSection};