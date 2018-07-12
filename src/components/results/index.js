import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {NoResults} from 'src/components/results/no-results/no-results.js';
import {Item} from 'src/components/results/item/item.js';
import {Summary} from 'src/components/summary/index.js'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortItems: {
        list: ['release date', 'rating'],
        active: 'release date'
      }
    };
    /**
     * // CallBack for changing this.state (it changes active genre)
     * @param {element} el
     */
    this.changeSortItemClick = (el) => {
      this.setState({sortItems: {
          list: this.state.sortItems.list,
          active: el.target.id
        }})
    };
    /**
     * // Function for sorting results
     * @param {Object} res
     * @param {string} parameter
     * @returns {DependencyReference[]|void|*}
     */
    this.sortResult = (res, parameter) => {
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

      /**
       * Sort function for Rating
       * @param {Object} a
       * @param {Object} b
       * @returns {number}
       */
      function sortFuncRating (a,b) {
        return +b[parameter] - +a[parameter]
      }

      /**
       *Sort function for Release Date
       * @param {Object} a
       * @param {Object} b
       * @returns {number}
       */
      function sortFuncDates(a,b) {
        return Date.parse(b[parameter]) - Date.parse(a[parameter]);
      }
    }
  }
  render() {
    let {searchResult, setFilmModeCallback, filmMode, filmModeGenre, searchPhrase} = this.props;
   // if (filmMode) {throw new Error('Film mode')}
    searchResult = this.sortResult(searchResult, this.state.sortItems.active); // Sort result here
    if (searchResult.length) { // When at least 1 film to show
      return (
        <React.Fragment>
          <Summary filmNumber={searchResult.length}
                   sortItems={this.state.sortItems}
                   changeSortItemCallBack={this.changeSortItemClick}
                   filmMode={filmMode}
                   filmModeGenre={filmModeGenre}
                   searchPhrase={searchPhrase}
          />
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
  searchPhrase: PropTypes.string,
  filmMode: PropTypes.bool,
  filmModeGenre: PropTypes.string,
  searchResult: PropTypes.array,
  setFilmModeCallback: PropTypes.func
};

Results.defaultProps = {
  searchResult: []
};

export {Results};