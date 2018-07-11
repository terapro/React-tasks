import React from 'react';

import PropTypes from 'prop-types';

import {ItemPoster} from '../../results/item-poster/item-poster.js';
import {ItemInfo} from '../../results/item-info/item-info.js'

const Item = (props) => (
  <div  className='item'>
    <ItemPoster posterLink={props.info['poster_path']} posterClick = {props.setFilmModeCallback} id={(props.info['id']).toString()}/>
    <ItemInfo filmTitle ={props.info['title']} releaseDate = {props.info['release_date']} genre = {props.info['genres']}/>
  </div>
);

Item.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  genre: PropTypes.array,
  posterLink: PropTypes.string,
  info: PropTypes.object,
  setFilmModeCallback: PropTypes.func
};


export {Item};