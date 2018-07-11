import React, {Component} from 'react';
import {ErrorBoundary} from "./error-boundary";

import {moviesDB} from '../app/data'

import {Body} from '../components/body/body.js'

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

    //Search function
    this.startSearchFunc = (obj) => { // Main Search function - callback for the "Search button"
      let phrase = obj.searchPhrase.toLowerCase();
      const type = obj.searchType;
      let result = [];
      this.setState({
        searchPhrase: phrase,
        searchType: type
      });
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

    //Search for film mode by genre
    this.SearchInFilmModeByGenre = (genre) => {
      const cond = {
        searchPhrase: genre,
        searchType: 'genres'
      };
      this.startSearchFunc(cond);
    };

    //Sets the film mode
    this.setFilmMode = (el) => {
      const currentFilm = this.findFilmById(el.target.id);
      const genre = currentFilm['genres'][0];
      if (!this.state.filmMode) { // For the 1st delve into 'film' mode
        this.setState({
          lastSearchPhrase: this.state.searchPhrase,
          lastSearchType: this.state.searchType,
          searchMode: false,
          filmMode: true,
          filmModeGenre: genre,
          filmInfo: currentFilm
        });
      } else {
        this.setState({
          searchMode: false,
          filmMode: true,
          filmModeGenre: genre,
          filmInfo: currentFilm
        });
      }
      this.SearchInFilmModeByGenre(genre);
    };

    //Sets the search mode
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

    //Searches film by id
    this.findFilmById = (id) => {
      let res = {x: 1};
      for (let i = 0; i < moviesDB['data'].length; i++) {
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