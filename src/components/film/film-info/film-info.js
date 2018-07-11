import React from 'react';
import PropTypes from 'prop-types';

import {Title} from '../../common/title/title.js';

const FilmInfo = (props) => (
  <div className='film-info'>
    <Title content={props.info['title']} ttlRed={true} ttlBig={true} />
  </div>
);

FilmInfo.propTypes ={
  info: PropTypes.object
};

export {FilmInfo};