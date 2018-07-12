import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {Input} from 'src/components/common/input/input.js';
import {Title} from 'src/components/common/title/title.js';
import {TypeSection} from 'src/components/search/type-section/type-section.js';
import {ButtonSection} from 'src/components/search/button-section/button-section.js';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTypes: {
        list: ['title', 'genres'],
        active: 'title'
      },
      searchPhrase: ''

    };
    /**
     * CallBack for SearchButton click
     */
    this.searchButtonClick = () => {
      this.props.startSearch({
        searchPhrase: this.state.searchPhrase,
        searchType: this.state.searchTypes.active
      });
      this.setState({searchPhrase: ''});
    };
    /**
     * Handle the enter click on the search input element
     * @param {element} e
     */
    this.enterKeyPressedOnInput = (e) => {
      if (e.key === 'Enter') {
        this.searchButtonClick();
      }
    };
    /**
     * toggle the search type (search by type/title)
     * @param {element} el
     */
    this.changeSearchType = (el) => {
      this.setState({searchTypes: {
          list: this.state.searchTypes.list, // living as it is
          active: el.target.id // Toggle to the active type
        }});
    };
    /**
     * Clones the input from a search input
     * @param {element} el
     */
    this.cloneSearchInput = (el) => {
      this.setState({searchPhrase: el.target.value});
    }
  }

  render() {
    return (
      <div className={'header-search'} id={'search-form'}>

        <Title  content='Find your movie' ttlWhite ttlUC/>

        <Input searchInputCallback = {this.cloneSearchInput}
               value = {this.state.searchPhrase}
               onKeyPressedFunc={this.enterKeyPressedOnInput} />

        <div className={'search-components'}>
          <TypeSection searchTypes = {this.state.searchTypes}
                       name = {'searchby'}
                       searchTypeCallback = {this.changeSearchType}/>

          <ButtonSection parentFormId={'search-form'}
                         searchButtonCallBack = {this.searchButtonClick}/>
        </div>
      </div>
    )
  }
}
Search.propTypes = {
  startSearch: PropTypes.func
};
Search.defaultProps = {
  startSearch: () => {}
};

export {Search};