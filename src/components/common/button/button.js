import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
  let itemClass = classNames({
  'btn': true,
  'btn-sm': props.btnSm,
  'btn-big': props.btnBig,
  'btn-white': props.btnWhite,
  'btn-red': props.btnRed,
  'btn-grey': props.btnGrey,
  'btn-bold':  props.btnBold,
  'btn-transp': props.btnTransp,
  'btn-transp-red': props.btnTranspRed,
  'btn-UC': props.btnUC
  });
  return (
    <div className={itemClass} onClick = {props.btnClick} id={props.id}>
      {props.content}
    </div>
  );
};

Button.propTypes = {
  btnSm: PropTypes.bool,
  btnBig: PropTypes.bool,
  btnWhite: PropTypes.bool,
  btnRed: PropTypes.bool,
  btnGrey: PropTypes.bool,
  btnBold: PropTypes.bool,
  btnTransp: PropTypes.bool,
  btnTranspRed: PropTypes.bool,
  btnUC: PropTypes.bool,
  content: PropTypes.string,
  btnClick: PropTypes.func,
  id: PropTypes.string
};

export {Button};