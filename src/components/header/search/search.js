import React, {Component} from 'react';

import {Input} from '../../search/input/input.js';
import {TypeSection} from '../../search/type-section/type-section.js';
import {ButtonSection} from '../../search/button-section/button-section.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTypesActivityList: {
        'title': true,
        'genre': false
      }
    };
  }
  render() {
    return (
      <div className={'header-search'} id={'search-form'}>
        <Input placeholder={'Start typing...'}/>
        <div className={'search-components'}>
          <TypeSection searchTypes = {this.state.searchTypesActivityList} name = {'searchby'}/>
          <ButtonSection parentFormId={'search-form'}/>
        </div>
      </div>
    )
  }
}

export {Search};