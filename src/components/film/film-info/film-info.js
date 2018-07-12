import React from 'react';
import PropTypes from 'prop-types';


import {Caption} from 'src/components/common/caption/caption.js';
import {YearMin} from "src/components/film/year-min/year-min";
import {FilmHeader} from "src/components/film/film-header/film-header.js";


const FilmInfo = (props) => (
  <div className='film-info'>
    <FilmHeader title={props.info['title']} rating={+props.info['vote_average']}/>
    <Caption content={props.info['tagline']} txtWhite={true} txtItalic={true} />
    <YearMin min={props.info['runtime'] + ' min'} year={props.info['release_date'].slice(0,4)}/>
    <Caption content={props.info['overview']} txtWhite={true} />

  </div>
);

FilmInfo.propTypes ={
  info: PropTypes.object
};

export {FilmInfo};