import React, {Component} from 'react';

import {moviesDB} from '../app/data'

import {Body} from '../components/body/body.js'

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
  'cartoon': "animation"
};

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchPhrase: '',
      searchType: '',
      sortParameters: null, //Items for 'Sort by' field (e.g. 'release date', 'rating')
      filmNumber: 0,
      result: [],
      searchMode: true,
      filmMode: false,
      filmInfo: {}
    };

    this.startSearchFunc = (obj) => { // Main Search function - callback for the "Search button"
      let phrase = obj.searchPhrase.toLowerCase();
      const type = searchItemsMatchingFromUserToDBFile[obj.searchType];
      let result = [];
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
          if (moviesDB.data[i][type].toLowerCase() === phrase // Search by the direct coincidence
            || moviesDB.data[i][type].toLowerCase().indexOf(phrase) >= 0) { // Search by keywords in the title
            result.push(moviesDB.data[i]);
          }
        }
      }
      this.state.result = result;
    };
    this.setFilmMode = (el) => {
      this.setState({
                      searchMode: false,
                      filmMode: true,
                      filmInfo: this.findFilmById(el.target.id)
                    });
      console.log( this.findFilmById(el.target.id));



    };
    this.setSearchMode = () => {
      this.setState({
        searchMode: true,
        filmMode: false
      });
      console.log('Entered search mode');
    };
    this.findFilmById =(id) => {
      let res = {x:1};
      for (let i =0; i < moviesDB['data'].length; i++) {
        if (moviesDB['data'][i]['id'] == id) {
          res = moviesDB['data'][i];
          break;
        }
      }
      return res;
    }
  }

  render() {
    return (
      <Body
        startSearch={this.startSearchFunc}
        searchResult={this.state.result}
        searchMode={this.state.searchMode}
        filmMode={this.state.filmMode}
        filmInfo={this.state.filmInfo}
        setFilmModeCallback={this.setFilmMode}
        setSearchModeCallback={this.setSearchMode}
      />
    )
  }
}


export {App};