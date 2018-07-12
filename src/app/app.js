import React, {Component} from 'react';
import {ErrorBoundary} from 'src/app/error-boundary.js';

import {moviesDB} from 'src/app/data.js';

import {Body} from 'src/components/body/body.js';

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
      lastSearchPhrase: '',
      searchPhrase: '',
      lastSearchType: '',
      searchType: '',
      sortParameters: null, //Items for 'Sort by' field (e.g. 'release date', 'rating')
      filmNumber: 0,
      result: [],
      searchMode: true,
      filmMode: false,
      filmModeGenre: '',
      filmInfo: {}
    };

    /**
     * Main Search function - callback for the "Search button"
     * @param {Object} obj
     */
    this.startSearchFunc = (obj) => { //
      let phrase = obj.searchPhrase.toLowerCase();
      const type = obj.searchType;
      let result = [];
      this.setState({
        searchPhrase: phrase,
        searchType: type
      });

      switch(type){
        case 'genres': // Search by genres
          phrase = searchKeysAliases[phrase] ? searchKeysAliases[phrase] : phrase; // Synonyms for genres
          for (let i = 0; i < moviesDB.data.length; i++) {
            if (moviesDB.data[i][type].some((genre) => genre.toLowerCase() === phrase))
              result.push(moviesDB.data[i]);
          }
          break;
        case 'title': // Search by title
          for (let i = 0; i < moviesDB.data.length; i++) {
            if (moviesDB.data[i][type].toLowerCase() === phrase // Search by the direct coincidence
              || moviesDB.data[i][type].toLowerCase().indexOf(phrase) >= 0) { // Search by keywords in the title
              result.push(moviesDB.data[i]);
            }
          }
      }
      this.state.result = result;
    };

    /**
     * When the film mode is active it gives the list of films in the same genre
     * @param {string} genre
     * @constructor
     */
    this.SearchInFilmModeByGenre = (genre) => {
      const cond = {
        searchPhrase: genre,
        searchType: 'genres'
      };
      this.startSearchFunc(cond);
    };

    /**
     *
     * @param el
     */
    this.setFilmMode = (film) => {
      const genre = film['genres'][0];
      let newState;
      if (!this.state.filmMode) { // For the 1st delve into 'film' mode
        newState = {
          lastSearchPhrase: this.state.searchPhrase,
          lastSearchType: this.state.searchType,
          searchMode: false,
          filmMode: true,
          filmModeGenre: genre,
          filmInfo: film
        };
      } else {
        newState = {
          searchMode: false,
          filmMode: true,
          filmModeGenre: genre,
          filmInfo: film
        };
      }
      this.setState(newState);

      this.SearchInFilmModeByGenre(genre);
    };

    /**
     * Toggle to the search mode
     */
    this.setSearchMode = () => {
      this.setState({
        searchMode: true,
        filmMode: false
      });
      this.startSearchFunc({
        searchPhrase: this.state.lastSearchPhrase,
        searchType: this.state.lastSearchType
      })
    };
    /**
     * After a click on the film item the callback function returns the film id. Then we search this film in our DB
     * @param {string} id
     * @returns {Object}
     */
    this.findFilmById = (id) => {
      let res = null;
      for (let i = 0; i < moviesDB['data'].length; i++) {
        if (moviesDB['data'][i]['id'] === +id) {
          res = moviesDB['data'][i];
          break;
        }
      }
      return res;
    }
  }
  render() {
    return (
      <ErrorBoundary>
        <Body
          startSearch={this.startSearchFunc}
          searchResult={this.state.result}
          searchMode={this.state.searchMode}
          filmMode={this.state.filmMode}
          filmModeGenre={this.state.filmModeGenre}
          filmInfo={this.state.filmInfo}
          setFilmModeCallback={this.setFilmMode}
          setSearchModeCallback={this.setSearchMode}
          searchPhrase={this.state.searchPhrase}
        />
      </ErrorBoundary>
    )
  }
}

export {App};