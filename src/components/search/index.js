import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {Input} from '../common/input/input.js';
import {Title} from '../common/title/title.js';
import {TypeSection} from '../search/type-section/type-section.js';
import {ButtonSection} from '../search/button-section/button-section.js';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTypes: {
        list: ['title', 'genre'],
        active: 'title'
      },
      searchPhrase: ''

    };

    this.searchButtonClick = () => {// CallBack for SearchButton click
      this.props.startSearch({searchPhrase: this.state.searchPhrase, searchType: this.state.searchTypes.active});
      this.setState({searchPhrase: ''});
    };
    this.enterKeyPressedOnInput = (e) => {
      if (e.key === 'Enter') {
        this.searchButtonClick();
      }
    };
    this.changeSearchType = (el) => {
      this.setState({searchTypes: {
          list: this.state.searchTypes.list, // living as it is
          active: el.target.id // Toggle to the active type
        }});
    };
    this.cloneSearchInput = (el) => {
      this.setState({searchPhrase: el.target.value});
    }
  }

  render() {
    console.log('Rendered!');
    return (
      <div className={'header-search'} id={'search-form'}>
        <Title  content='Find your movie' ttlWhite={true} ttlUC={true}/>
        <Input searchInputCallback = {this.cloneSearchInput} value = {this.state.searchPhrase} onKeyPressedFunc={this.enterKeyPressedOnInput} />
        <div className={'search-components'}>
          <TypeSection searchTypes = {this.state.searchTypes} name = {'searchby'}
                       searchTypeCallback = {this.changeSearchType}/>
          <ButtonSection parentFormId={'search-form'} searchButtonCallBack = {this.searchButtonClick}/>
        </div>
      </div>
    )
  }
}
Search.propTypes = {
  startSearch: PropTypes.func
};

export {Search};