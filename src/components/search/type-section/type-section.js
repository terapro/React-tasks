import React from 'react';

import PropTypes from 'prop-types';

import {Text} from '../../common/text/text.js';
import {SearchRadioEl} from '../radio-element/radio-element';

const TypeSection = (props) => (

  <div className={'search-type-section'}>
    <Text content={'search by'}/>

    {
      Object.keys(props.searchTypes).map((item) => <SearchRadioEl name={props.name} id = {'radio-' + item} text = {item} checked = {props.searchTypes[item]} key = {'radio-' + item} />)
    }

  </div>
);

TypeSection.propTypes = {
  searchTypes: PropTypes.object,
  name: PropTypes.string,
};

export {TypeSection};