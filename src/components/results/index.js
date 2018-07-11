import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {NoResults} from '../results/no-results/no-results.js';
import {Item} from './item/item.js';
import {Summary} from '../summary/index.js'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortItems: {
        list: ['release date', 'rating'],
        active: 'release date'
      },

    };
    this.changeSortItemClick = (el) => { // CallBack for changing this.state (it changes active genre)
      this.setState({sortItems: {
          list: this.state.sortItems.list,
          active: el.target.id
        }})
    };
    this.sortResult = (res, parameter) => { // Function for sorting results
      const sortParametersMatching = {
        'release date': 'release_date',
        'rating': 'vote_average'
      };

      parameter = sortParametersMatching[parameter];

      switch (parameter) {
        case 'release_date' : {
          return res.sort(sortFuncDates);
        }
        case 'vote_average': {
          return res.sort(sortFuncRating);
        }
      }

      function sortFuncRating (a,b) {
        return +b[parameter] - +a[parameter]
      }
      function sortFuncDates(a,b) {
        return Date.parse(b[parameter]) - Date.parse(a[parameter]);
      }
    }
  }
  render() {

    let {searchResult, setFilmModeCallback, filmMode, filmModeGenre} = this.props;
    searchResult = this.sortResult(searchResult, this.state.sortItems.active); // Sort result here
    if (searchResult.length) { // When at least 1 film to show
      return (
        <React.Fragment>
          <Summary filmNumber={searchResult.length} sortItems = {this.state.sortItems} changeSortItemCallBack = {this.changeSortItemClick} filmMode={filmMode} filmModeGenre ={filmModeGenre} />
          <div className='results'>
            {
              searchResult.map((item) => (
                                          <Item key = {item['id']} info = {item} setFilmModeCallback={setFilmModeCallback} />
                                        )
                          )
            }
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className='results'>
          <NoResults />
        </div>

      );
    }
  }
}

Results.propTypes = {
  filmMode: PropTypes.bool,
  filmModeGenre: PropTypes.string,
  searchResult: PropTypes.array,
  setFilmModeCallback: PropTypes.func
};

Results.defaultProps = {
  searchResult: []
};

export {Results};