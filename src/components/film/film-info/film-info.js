import React from 'react';
import PropTypes from 'prop-types';

import {Caption} from 'src/components/common/caption/caption.js';
import {YearMinutes} from "src/components/film/year-minutes/year-minutes";
import {FilmHeader} from "src/components/film/film-header/film-header.js";

const FilmInfo = ({info}) => {
  return (
    <div className='film-info'>
      <FilmHeader title={info['title']} rating={+info['vote_average']}/>
      <Caption content={info['tagline']} txtWhite txtItalic />
      <YearMinutes minutes={info['runtime']} year={info['release_date']}/>
      <Caption content={info['overview']} txtWhite />
    </div>
  );
};

FilmInfo.propTypes ={
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
  }).isRequired
};

export {FilmInfo};