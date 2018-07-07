import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {appSettings} from '../../../app/config.js';

import {Input} from '../../search/input/input.js';
import {TypeSection} from '../../search/type-section/type-section.js';
import {ButtonSection} from '../../search/button-section/button-section.js';

class HeaderSearch extends Component {
  constructor(props) {
    super(props);

    this.resolveCheckedSearchType = (obj) => {// Function for retrieving default search type for state from config.js
      let resolvedSearchType = null;
      Object.keys(obj).forEach((item) => {
        obj[item] ? resolvedSearchType = item : null
      });
      return resolvedSearchType;
    };

    this.state = {
      searchTypesActivityList: appSettings.searchTypesActivityList,
      searchPhrase: '',
      searchType: this.resolveCheckedSearchType(appSettings.searchTypesActivityList) // default,

    };

    this.searchButtonClick = () => {// CallBack for SearchButton click
      this.props.startSearch({searchPhrase: this.state.searchPhrase, searchType: this.state.searchType});
      this.setState({searchPhrase: ''});

    };
    this.changeSearchType = (el) => {
      this.setState({searchType: el.target.getAttribute('for')});
    };
    this.cloneSearchInput = (el) => {
      this.setState({searchPhrase: el.target.value});
    }
  }
  shouldComponentUpdate(nextProps, nextState) { // For the better productivity
    if (this.state.searchType != nextState.searchType) { // When toggle the types
      return false;
    }
    return true;
  }
  render() {
    console.log('Rendered!');
    return (
      <div className={'header-search'} id={'search-form'}>
        <Input placeholder={appSettings.searchInputPlaceholder} searchInputCallback = {this.cloneSearchInput} value = {this.state.searchPhrase}/>
        <div className={'search-components'}>
          <TypeSection searchTypes = {this.state.searchTypesActivityList} name = {'searchby'}
                       searchTypeCallback = {this.changeSearchType}/>
          <ButtonSection parentFormId={'search-form'} searchButtonCallBack = {this.searchButtonClick}/>
        </div>
      </div>
    )
  }
}
HeaderSearch.propTypes = {
  startSearch: PropTypes.func
};

export {HeaderSearch};