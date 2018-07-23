import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {openFilm} from "src/actions";
import {NoResults} from 'src/components/results/no-results/no-results.js';
import {Item} from 'src/components/results/item/item.js';
import {Summary} from 'src/components/summary/summary.js';
import {ResultsLoading} from 'src/components/results/results-loading/results-loading';
import {WelcomeMessage} from "src/components/results/welcome-message/welcome-message";

class ResultsChild extends Component {
  constructor(props) {
    super(props);

  }
  /**
   * Sorts the list by the sorting parameters
   * @param {array} res - array of film objects
   * @param parameter
   * @returns {DependencyReference[]|void|*}
   */
  sortResult = (res, parameter) => {
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
    function sortFuncRating(a, b) {
      return +b[parameter] - +a[parameter]
    }
    /**
     *Sort function for Release Date
     * @param {Object} a
     * @param {Object} b
     * @returns {number}
     */
    function sortFuncDates(a, b) {
      return Date.parse(b[parameter]) - Date.parse(a[parameter]);
    }
  };

  chooseFilmByClick = (film) => {
    this.props.onOpenFilm(film);
  };
  render() {
    const {searchList, recommendedList, mode, sortBy, searchAttributes, filmGenre} = this.props;
      this.filmList = mode.film? [...recommendedList] : [... searchList]; // The film list depends on mode: search/film
      this.filmList = this.sortResult(this.filmList, sortBy.chosenParameter);


    // Case: Data loads in the search mode
    if(mode.loadingData && mode.search) {
      return (
        <ResultsLoading phrase={searchAttributes.phrase} type={searchAttributes.type} />
      )
    }
    // Case: Data loads in the film mode
    else if(mode.loadingData && mode.film) {

      return (
        <ResultsLoading phrase={filmGenre} type='genres' />
      )
    }
    // Case: Show the results
    else if (this.filmList.length) { // When at least 1 film to show
      return (
        <Fragment>
          <Summary />
          <div className='results'>
            {this.filmList.map((item) => (
                            <Item key={item['id']}
                                  info={item}
                                  onPosterClick={this.chooseFilmByClick}
                            />
            ))}
          </div>
        </Fragment>
      );
    } else if(!this.filmList.length && searchAttributes.phrase) {
      return(
        <NoResults phrase={searchAttributes.phrase} type={searchAttributes.type} />
      );
    }
    // Case: No results
    else  {
      return (
        <div className='results'>
          <WelcomeMessage />
        </div>
      );
    }
  }
}

ResultsChild.propTypes = {
    searchList: PropTypes.array,
    recommendedList: PropTypes.array,
    onOpenFilm: PropTypes.func,
    onChangeItem: PropTypes.func,
    mode: PropTypes.shape({
      film: PropTypes.bool,
      search: PropTypes.bool,
      loadingData: PropTypes.bool
    }),
    sortBy: PropTypes.shape({
        parameters: PropTypes.arrayOf(PropTypes.string),
        chosenParameter: PropTypes.string
    }).isRequired,
    searchAttributes: PropTypes.shape({
      phrase: PropTypes.string,
      type: PropTypes.string
    }),
    filmGenre: PropTypes.string
};
ResultsChild.defaultProps = {
  searchList: [],
  recommendedList: [],
  onOpenFilm: f=>f,
  onChangeItem: f=>f,
  mode: {
    film: false,
    search: true,
    loadingData: false
  },
  searchAttributes: {
    phrase: '',
    type: 'title'
  },
  filmGenre: 'Action'
};

export const Results = connect(
  store =>
    ({
      searchAttributes: store.search,
      searchList: store.films.searchList,
      recommendedList: store.films.recommendedList,
      filmGenre: store.films.currentFilmGenre,
      mode: store.mode,
      sortBy: store.films.sortBy
    }),
  dispatch =>
    ({
      onOpenFilm(film) {
        dispatch(openFilm(film))
      }
    })
)(ResultsChild);


