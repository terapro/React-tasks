import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {NoResults} from '../results/no-results/no-results.js';
import {Item} from './item/item.js';


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'noResults', // 'noResults'
    };
  }

  render() {
    const {searchResult} = this.props;

    if (searchResult.length) {
      return (
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