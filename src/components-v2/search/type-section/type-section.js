import React from 'react';
import PropTypes from 'prop-types';
import {Label} from 'src/components-v2/common/label/label.js';
import {Button} from 'src/components-v2/common/button/button.js';
import {parameters} from 'src/data/constants.js';

export const TypeSection = ({activeSearchType, searchTypeClick}) =>
 (
    <div className={'search-type-section'}>
      <Label content={'search by'} labelUC labelWhite />
      {
        parameters.searchTypes.map((item) => (
            <Button btnRed={item.value === activeSearchType}
                    btnGrey={item.value !== activeSearchType}
                    key = {item.value}
                    id = {item.value}
                    content = {item.name}
                    btnClick={searchTypeClick}
                    btnInline
                    btnUC
            />
          )
        )
      }
    </div>
  );

TypeSection.propTypes = {
    searchTypeClick: PropTypes.func,
    activeSearchType: PropTypes.string
};

TypeSection.defaultProps = {
    searchTypeClick: ()=> {}
};
