import React from 'react';

import PropTypes from 'prop-types';

import {ItemPoster} from '../../results/item-poster/item-poster.js';
import {ItemInfo} from '../../results/item-info/item-info.js'

const Item = (props) => (
  <div  className='item'>
    <ItemPoster posterLink={props.posterLink}/>
    <ItemInfo filmTitle ={props.filmTitle} releaseDate = {props.releaseDate} genre = {props.genre}/>
  </div>
);

Item.propTypes = {
  filmTitle: PropTypes.string,
  releaseDate: PropTypes.string,
  genre: PropTypes.array,
  posterLink: PropTypes.string
};


export {Item};