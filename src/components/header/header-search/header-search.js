import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {appSettings} from '../../../app/config.js';

import {Input} from '../../search/input/input.js';
import {TypeSection} from '../../search/type-section/type-section.js';
import {ButtonSection} from '../../search/button-section/button-section.js';

class HeaderSearch extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTypesActivityList: appSettings.searchTypesActivityList
    }

  }

  render() {
    const {searchButtonCallBack} = this.props;
    return (
      <div className={'header-search'} id={'search-form'}>
        <Input placeholder={appSettings.searchInputPlaceholder}/>
        <div className={'search-components'}>
          <TypeSection searchTypes = {this.state.searchTypesActivityList} name = {'searchby'}/>
          <ButtonSection parentFormId={'search-form'} searchButtonCallBack = {searchButtonCallBack}/>
        </div>
      </div>
    )
  }
}
HeaderSearch.propTypes = {
  searchButtonCallBack: PropTypes.func
};

export {HeaderSearch};