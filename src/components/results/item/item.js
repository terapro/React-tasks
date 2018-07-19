import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {ItemPoster} from 'src/components/results/item-poster/item-poster.js';
import {ItemInfo} from 'src/components/results/item-info/item-info.js'

class Item extends Component {
  constructor() {
    super();

  }

  render() {
    const {info, onPosterClick} = this.props;
    return (
      <div className='item'>
        <ItemPoster posterLink={info['poster_path']} posterClick={onPosterClick} id={(info['id']).toString()}/>
        <ItemInfo filmTitle={info['title']} releaseDate={info['release_date']} genre={info['genres']}/>
      </div>
    );
  }
}

Item.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number
  }).isRequired,
  setFilmMode: PropTypes.func,
  searchInFilmModeByGenre: PropTypes.func.isRequired
};

export {Item};