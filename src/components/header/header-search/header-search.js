import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {Input} from '../../search/input/input.js';
import {TypeSection} from '../../search/type-section/type-section.js';
import {ButtonSection} from '../../search/button-section/button-section.js';

class HeaderSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTypesActivityList: { // Shows lis of search parameters. True/false - Checked/Unchecked. Only 1 can be true
        'title': true,
        'genre': false
      },
      searchPhrase: '',
      searchType: 'title' // default,

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
        <Input searchInputCallback = {this.cloneSearchInput} value = {this.state.searchPhrase}/>
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