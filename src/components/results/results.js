import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {openFilm} from "src/actions";
import {NoResults} from 'src/components/results/no-results/no-results.js';
import {Item} from 'src/components/results/item/item.js';
import {Summary} from 'src/components/summary/summary.js';


class ResultsChild extends Component {
  constructor(props) {
        super(props);
        /**
         * Sorts the list by the sorting parameters
         * @param {array} res - array of film objects
         * @param parameter
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
    this.filmList=[];
    this.chooseFilmByClick = (el)=> {
        const index = el.target.id;
        const film = this.filmList[index];
        this.props.onOpenFilm(film);
    };
  }
  render() {
    const {searchList, recommendedList, filmMode, sortBy} = this.props;
      this.filmList = filmMode? [...recommendedList] : [... searchList]; // The film list depends on mode: search/film
      this.filmList = this.sortResult(this.filmList, sortBy.chosenParameter);

    if (this.filmList.length) { // When at least 1 film to show
      return (
        <Fragment>
          <Summary />
          <div className='results'>
            {this.filmList.map((item, i) => (
                            <Item key={item['id']}
                                  info={item}
                                  onPosterClick={this.chooseFilmByClick}
                                  filmIndex={i}// we store the array index in the key property to save the quick reference to the film object when clicking the poster
                            />
            ))}
          </div>
        </Fragment>
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

ResultsChild.propTypes = {
    searchList: PropTypes.array,
    recommendedList: PropTypes.array,
    onOpenFilm: PropTypes.func,
    onChangeItem: PropTypes.func,
    filmMode: PropTypes.bool,
    sortBy: PropTypes.shape({
        parameters: PropTypes.arrayOf(PropTypes.string),
        chosenParameter: PropTypes.string
    }).isRequired
};
ResultsChild.defaultProps = {
    searchList: [],
    recommendedList: [],
    onOpenFilm: f=>f,
    filmMode: false,
    onChangeItem: f=>f
};

export const Results = connect(
  store =>
    ({
      searchAttributesFromStore: store.search,
      searchList: store.films.searchList,
      recommendedList: store.films.recommendedList,
      filmMode: store.mode.film,
      sortBy: store.films.sortBy
    }),
  dispatch =>
    ({
      onOpenFilm(film) {
        dispatch(openFilm(film))
      }
    })
)(ResultsChild);


