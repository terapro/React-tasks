import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startSearch} from 'src/actions';
import PropTypes from 'prop-types';
import {Input} from 'src/components/common/input/input.js';
import {Title} from 'src/components/common/title/title.js';
import {TypeSection} from 'src/components/search/type-section/type-section.js';
import {ButtonSection} from 'src/components/search/button-section/button-section.js';

export class SearchChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTypes: {
        list: ['title', 'genres'],
        active: 'title'
      },
      currentInputValue: ''
    };
    this.startSearching = () => {
      this.props.onSearch(this.state.currentInputValue, this.state.searchTypes.active);
      this.setState({currentInputValue: ''})
    };
    this.enterKeyPressedOnInput = (e) => {
      if (e.key === 'Enter') {
        this.startSearching();
      }
    };
    this.changeSearchType = (newType) => {
      this.setState({
        searchTypes: {
          list: this.state.searchTypes.list, // living as it is
          active: newType // Toggle to the active type
        }
      });
    };
    this.cloneSearchInput = (el) => {
      this.setState({currentInputValue: el.target.value});
    }
  }

  render() {
    const {searchMode} = this.props;
    if (searchMode) {
      return (
        <div className={'header-search'}>
          <Title content='Find your movie' ttlWhite ttlUC/>

          <Input onStartTyping={this.cloneSearchInput}
                 value={this.state.currentInputValue}
                 onKeyEnterPressed={this.enterKeyPressedOnInput}/>

          <div className={'search-components'}>
            <TypeSection searchTypes={this.state.searchTypes}
                         searchTypeClick={this.changeSearchType}/>

            <ButtonSection parentFormId={'search-form'}
                           searchButtonClick={this.startSearching}/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

SearchChild.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchMode: PropTypes.bool

};
SearchChild.defaultProps = {
  searchMode: true
};

export const Search = connect(
  store =>
    ({
      searchMode: store.mode.search
    }),
  dispatch =>
    ({
      onSearch(phrase, type) {// Request API
        dispatch(startSearch(phrase, type))
      }
    })
)(SearchChild);