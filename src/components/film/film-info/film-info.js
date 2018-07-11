import React from 'react';
import PropTypes from 'prop-types';

import {Title} from '../../common/title/title.js';
import {Caption} from '../../common/caption/caption.js';
import {YearMin} from "../year-min/year-min";


const FilmInfo = (props) => (
  <div className='film-info'>
    <Title content={props.info['title']} ttlRed={true} ttlBig={true} />
    <Caption content={props.info['tagline']} txtWhite={true} />
    <YearMin min={props.info['runtime'] + ' min'} year={props.info['release_date'].slice(0,4)}/>
    <Caption content={props.info['overview']} txtWhite={true} />

  </div>
);

FilmInfo.propTypes ={
  info: PropTypes.object
};

export {FilmInfo};