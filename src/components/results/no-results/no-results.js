import React from 'react';
import PropTypes from "prop-types";

export const NoResults = ({phrase, type}) => (
  <div className={'no-results'}>
    By request &quot;<span>{phrase}</span>&quot; in <span>{type}</span> nothing was found. <br/>
    Don`t worry, try to make another request!
  </div>
);

NoResults.propTypes = {
  phrase: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
