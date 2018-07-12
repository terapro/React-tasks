import React from 'react';

import PropTypes from 'prop-types';

import {ItemPoster} from 'src/components/results/item-poster/item-poster.js';
import {ItemInfo} from 'src/components/results/item-info/item-info.js'

const Item = (props) => (
  <div  className='item'>
    <ItemPoster posterLink={props.info['poster_path']} posterClick = {props.setFilmModeCallback} id={(props.info['id']).toString()}/>
    <ItemInfo filmTitle ={props.info['title']} releaseDate = {props.info['release_date']} genre = {props.info['genres']}/>
  </div>
);

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
  setFilmModeCallback: PropTypes.func
};
Item.defaultProps = {
  setFilmModeCallback: ()=> {}
};


export {Item};