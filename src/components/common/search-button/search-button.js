import React from 'react';

import PropTypes from 'prop-types';


const SearchButton = (props) => (
  <button className={'form-button'}  type = {'button'}
          onClick = {props.searchButtonCallBack}> {props.content} </button>
);

SearchButton.propTypes = {
  content: PropTypes.string,
  parentFormId: PropTypes.string,
  searchButtonCallBack: PropTypes.func

};

export {SearchButton};