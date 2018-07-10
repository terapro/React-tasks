import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {NoResults} from '../results/no-results/no-results.js';
import {Item} from './item/item.js';
import {Summary} from '../summary/index.js'


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'noResults', // 'noResults'
      sortItems: {
        list: ['release date', 'rating'],
        active: 'release date'
      }
    };
    this.changeSortItemClick = (el) => {
      this.setState({sortItems: {
          list: this.state.sortItems.list,
          active: el.target.id
        }})
    }

  }

  render() {
    const {searchResult} = this.props;

    if (searchResult.length) { // When at least 1 film to show
      return (
        <React.Fragment>
          <Summary filmNumber={searchResult.length} sortItems = {this.state.sortItems} changeSortItemCallBack = {this.changeSortItemClick} />
          <div className='results'>
            {
              searchResult.map((item) => (
                                      <Item filmTitle = {item['title']}
                                           releaseDate={item['release_date']}
                                            genre = {item['genres']}
                                            posterLink ={item['poster_path']}
                                            key = {item['id']}
                                      />
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
  searchResult: PropTypes.array
};

Results.defaultProps = {
  searchResult: []
};

export {Results};