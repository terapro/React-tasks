import React from 'react';
import {Title} from 'src/components-v2/common/title/title';
import {Input} from 'src/components-v2/common/input/input';
import {TypeSection} from 'src/components-v2/search/type-section/type-section';
import {ButtonSection} from 'src/components-v2/search/button-section/button-section';
import {parameters} from 'src/data/constants.js';

import history from 'src/store/browserHistory';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSearchType: parameters.searchTypes[0].value,
      currentInputValue: ''
    }

  }
  changeSearchType = (newType) => {
    this.setState({activeSearchType: newType});
  }
  cloneSearchInput = (el) => {
    this.setState({currentInputValue: el.target.value});
  };
  startSearching = () => {
  //  this.props.onSearch(this.state.currentInputValue, this.state.searchTypes.active);
    var phrase = this.state.currentInputValue;
    console.log(this.props.location);
    this.setState({currentInputValue: ''});
  //  window.location('/search?info=' + phrase');
  //  location.search = 'info=' + phrase;
   history.replace('/search?info=' + phrase);

  };
  enterKeyPressedOnInput = (e) => {
    if (e.key === 'Enter') {
      this.startSearching();
    }
  };

  render() {

    return (
      <div className='search'>
        <Title content='Find your movie' ttlWhite ttlUC />
        <Input onStartTyping={this.cloneSearchInput}
                 value={this.state.currentInputValue}
                 onKeyEnterPressed={this.enterKeyPressedOnInput}/>
        <div className='search-components'>
          <TypeSection activeSearchType={this.state.activeSearchType} searchTypeClick={this.changeSearchType}/>
          <ButtonSection searchButtonClick={this.startSearching}/>
        </div>
      </div>
    );
  }
};
