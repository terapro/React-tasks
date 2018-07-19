import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {NoResults} from 'src/components/results/no-results/no-results.js';
import {Item} from 'src/components/results/item/item.js';
import {Summary} from 'src/components/summary/summary.js';
import {connect} from "react-redux";
import {openFilm, changeItem} from "src/actions";

class ResultsChild extends Component {
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


    this.sortParameterClick = (e) => {
      console.log(e.target.id);
      this.props.onChangeItem(e.target.id);
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
    const {searchList, recommendedList, onOpenFilm,  filmMode, searchInFilmModeByGenre, sortBy} = this.props;

    const sortingParameter = sortBy.chosenParameter;
    let filmList = filmMode? [...recommendedList] : [... searchList];

    filmList = this.sortResult(filmList, sortingParameter);

    if (filmList.length) { // When at least 1 film to show
      return (
        <Fragment>
          <Summary sortParameters={sortBy}
                            changeSortItemCallBack={this.sortParameterClick}/>

          <div className='results'>
            {
              filmList.map((item) => (
                                          <Item key = {item['id']} info = {item} onPosterClick={() => onOpenFilm(item)} searchInFilmModeByGenre={searchInFilmModeByGenre} />
                                        )
                          )
            }
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
  searchPhrase: PropTypes.string,//
  filmMode: PropTypes.bool,//
  filmModeGenre: PropTypes.string,//
  searchResult: PropTypes.arrayOf(PropTypes.object), //
  setFilmMode: PropTypes.func, //
  startSearch: PropTypes.func,
  searchInFilmModeByGenre: PropTypes.func.isRequired //
};

ResultsChild.defaultProps = {
  searchPhrase: '',
  filmMode: false,
  filmModeGenre: '',
  searchResult: [{}],
  setFilmMode: PropTypes.func,
  startSearch: () => {}
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
      },
      onChangeItem(newParameter) {
        dispatch(changeItem(newParameter))
      }
    })

)(ResultsChild);


