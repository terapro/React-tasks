import React from 'react';

import PropTypes from 'prop-types';

import {Text} from '../../common/text/text.js';
import {SearchRadioEl} from '../radio-element/radio-element';

const TypeSection = (props) => (

  <div className={'search-type-section'}>
    <Text content={'search by'}/>
    <SearchRadioEl name={props.name} id = 'radio-title' text = 'title' checked = {true}/>
    <SearchRadioEl name={props.name} id = 'radio-genre' text = 'genre' checked = {false}/>
  </div>
);

TypeSection.propTypes = {
  searchTypes: PropTypes.object,
  name: PropTypes.string,
};

export {TypeSection};