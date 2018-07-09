import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {moviesDB} from '../app/data'


import {Header} from './../components/header/index.js'
import {Summary} from './../components/summary/index.js'
import {Results} from './../components/results/index.js'
import {Footer} from './../components/footer/index.js'

const searchItemsMatchingFromUserToDBFile = { // User items >> matching >> Items in moviesDB file
  'title': 'title',
  'genre': 'genres'
};



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
      const phrase = obj.searchPhrase;
      const type = searchItemsMatchingFromUserToDBFile[obj.searchType];

      this.setState({
        searchPhrase: phrase,
        searchType: obj.type
      });

      console.log('Searching ' + phrase + ' by ' + type);
     // this.setState({result: []}); // Reset the results
      if (type === 'genres') {
        for (let i =0; i < moviesDB.data.length; i++) {
          if (moviesDB.data[i][type].some((genre) => genre.toLowerCase() === phrase.toLowerCase()))
            this.state.result.push(moviesDB.data[i]);
        }
      }
      if (type === 'title') {
        for (let i =0; i < moviesDB.data.length; i++) {
          if (moviesDB.data[i][type].toLowerCase() == phrase.toLowerCase())
            this.state.result.push(moviesDB.data[i]);
        }
      }
     // this.state.result.forEach((item) => console.log(item));
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