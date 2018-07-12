import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'src/components/common/label/label.js';
import {Button} from 'src/components/common/button/button.js'

const TypeSection = (props) => (
  <div className={'search-type-section'}>
    <Label content={'search by'} labelUC={true} labelWhite={true}/>
    {
      props.searchTypes.list.map((item) => (
          <Button btnRed={item === props.searchTypes.active}
                  btnGrey={item !== props.searchTypes.active}
                  key = {item}
                  id = {item}
                  content = {item}
                  btnClick={props.searchTypeCallback}
                  btnInline = {true}
                  btnUC={true}
          />
        )
      )
    }
  </div>
);

TypeSection.propTypes = {
  searchTypes: PropTypes.object,
  name: PropTypes.string,
  searchTypeCallback: PropTypes.func
};

export {TypeSection};