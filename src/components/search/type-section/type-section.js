import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'src/components/common/label/label.js';
import {Button} from 'src/components/common/button/button.js'

const TypeSection = (props) => (
  <div className={'search-type-section'}>
    <Label content={'search by'} labelUC labelWhite />
    {
      props.searchTypes.list.map((item) => (
          <Button btnRed={item === props.searchTypes.active}
                  btnGrey={item !== props.searchTypes.active}
                  key = {item}
                  id = {item}
                  content = {item}
                  btnClick={props.searchTypeCallback}
                  btnInline
                  btnUC
          />
        )
      )
    }
  </div>
);


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