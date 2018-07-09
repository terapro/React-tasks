import React, {Component} from 'react';

import PropTypes from 'prop-types';

//import {moviesDB} from '../app/data'


import {Header} from './../components/header/index.js'
import {Summary} from './../components/summary/index.js'
import {Results} from './../components/results/index.js'
import {Footer} from './../components/footer/index.js'

const Body = (props) => ( // Footer is separated for the better design expirience
  <div className="wrapper">
    <Header startSearch = {props.startSearch} />
    <Summary sortParameter/>
    <Results/>
  </div>
);
Body.propTypes = {
  startSearch: PropTypes.func
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchPhrase: '',
      searchType: '',
      sortParameters: null, //Items for 'Sort by' field (e.g. 'release date', 'rating')
      filmNumber: 0

    };
    this.startSearchFunc = (obj) => {
      this.setState({
        searchPhrase: obj.searchPhrase,
        searchType: obj.searchType
      });
      console.log('Searching ' + obj.searchPhrase + ' by ' + obj.searchType);

    }

  }

  render() {
    return (
      <React.Fragment>
        <Body startSearch = {this.startSearchFunc}/>
        <Footer/>
      </React.Fragment>

    )

  }

}


export {App};