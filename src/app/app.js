import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {moviesDB} from '../app/data'


import {Header} from './../components/header/index.js'
import {Summary} from './../components/summary/index.js'
import {Results} from './../components/results/index.js'
import {Footer} from './../components/footer/index.js'

const searchItemsMatchingFromUserToDBFile = { // User items >> matching >> Items in moviesDB file
  'title': 'title',
  'genre': 'genres',
};

const searchKeysAliases = { // only lower case!
  'sci fi': 'science fiction',
  'scifi': 'science fiction',
  'sci-fi': 'science fiction',
  'sf': 'science fiction',
  'melodrama': 'drama',
  "romans": 'romance',
  'thriler' : 'thriller',
  'triller' : 'thriller',
  'cartoon': "animation"
}



const Body = (props) => ( // Footer is separated for the better design expirience
  <div className="wrapper">
    <Header startSearch = {props.startSearch}   />
    <Summary />
    <Results searchResult = {props.searchResult} />
  </div>
);
Body.propTypes = {
  startSearch: PropTypes.func,
  searchResult: PropTypes.array
};

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchPhrase: '',
      searchType: '',
      sortParameters: null, //Items for 'Sort by' field (e.g. 'release date', 'rating')
      filmNumber: 0,
      result: []
    };

    this.startSearchFunc = (obj) => {
      let phrase = obj.searchPhrase.toLowerCase();
      const type = searchItemsMatchingFromUserToDBFile[obj.searchType];
      let result = new Array();
      this.setState({
        searchPhrase: phrase,
        searchType: obj.type
      });

      console.log('Searching ' + phrase + ' by ' + type);

      // Search by genres
      if (type === 'genres') {
        phrase = searchKeysAliases[phrase] ? searchKeysAliases[phrase] : phrase; // Synonyms for genres
        for (let i = 0; i < moviesDB.data.length; i++) {
          if (moviesDB.data[i][type].some((genre) => genre.toLowerCase() === phrase))
            result.push(moviesDB.data[i]);
        }
      }
        // Search by title
        if (type === 'title') {
          for (let i = 0; i < moviesDB.data.length; i++) {
            if (moviesDB.data[i][type].toLowerCase() === phrase
              || moviesDB.data[i][type].toLowerCase().indexOf(phrase) >= 0) {
              result.push(moviesDB.data[i]);
            }
          }
        }
        this.state.result = result;
      }
  }

  render() {
    return (
      <React.Fragment>
        <Body startSearch = {this.startSearchFunc} searchResult = {this.state.result}/>
        <Footer/>
      </React.Fragment>

    )

  }

}


export {App};