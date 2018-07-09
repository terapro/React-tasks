import React from 'react';

import PropTypes from 'prop-types';

import {Text} from '../../common/text/text.js';
import {SearchRadioEl} from '../radio-element/radio-element';

const TypeSection = (props) => (

  <div className={'search-type-section'}>
    <Text content={'search by'}/>

    {
      props.searchTypes.list.map((item) => (
                       <SearchRadioEl name={props.name} id = {item}
                       text = {item} checked = {item === props.searchTypes.active}
                       key = {'radio-' + item}
                       searchTypeCallback = {props.searchTypeCallback} />
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