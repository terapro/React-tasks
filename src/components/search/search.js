import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startSearch} from 'src/actions';

import PropTypes from 'prop-types';

import {Input} from 'src/components/common/input/input.js';
import {Title} from 'src/components/common/title/title.js';
import {TypeSection} from 'src/components/search/type-section/type-section.js';
import {ButtonSection} from 'src/components/search/button-section/button-section.js';

class SearchChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTypes: {
        list: ['title', 'genres'],
        active: 'title'
      },
      currentInputValue: ''
    };

    /**
     * Handle the enter click on the search input element
     * @param {element} e
     */
    this.enterKeyPressedOnInput = (e) => {
      if (e.key === 'Enter') {
        this.startSearching();
      }
    };
    this.startSearching = () => {
      this.props.onSearch(this.state.currentInputValue, this.state.searchTypes.active);
      this.setState({currentInputValue: ''})
    }
    /**
     * toggle the search type (search by type/title)
     * @param {element} el
     */
    this.changeSearchType = (el) => {
      this.setState({searchTypes: {
          list: this.state.searchTypes.list, // living as it is
          active: el.target.innerHTML // Toggle to the active type
        }});
    };
    /**
     * Clones the input from a search input
     * @param {string} el
     */
    this.cloneSearchInput = (el) => {
      this.setState({currentInputValue: el.target.value});
    }
  }

  render() {
    const {onSearch, searchMode} = this.props;

    return searchMode? (
      <div className={'header-search'} id={'search-form'}>

        <Title  content='Find your movie' ttlWhite ttlUC/>

        <Input onStartTyping = {this.cloneSearchInput}
               value = {this.state.currentInputValue}
               onKeyEnterPressed={this.enterKeyPressedOnInput} />

        <div className={'search-components'}>
          <TypeSection searchTypes = {this.state.searchTypes}
                       name = {'searchby'}
                       searchTypeCallback = {this.changeSearchType}/>

          <ButtonSection parentFormId={'search-form'}
                         searchButtonClick = {this.startSearching}/>
        </div>
      </div>
    )
      : null;
  }
}

SearchChild.propTypes = {
  startSearch: PropTypes.func
};
SearchChild.defaultProps = {
  startSearch: () => {}
};


export const Search = connect(
  store =>
    ({
      searchMode: store.mode.search
    }),
  dispatch =>
    ({
      onSearch(phrase, type){// Request API
        dispatch(startSearch(phrase, type))
      }
    })

)(SearchChild);