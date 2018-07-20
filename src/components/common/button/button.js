import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const {btnSm, btnBig, btnWhite, btnRed, btnGrey, btnBold, btnTransp, btnTranspRed, btnUC} = props;
  const {btnClick, id, content} = props;
  let itemClass = classNames({
  'btn': true,
  'btn-sm': btnSm,
  'btn-big': btnBig,
  'btn-white': btnWhite,
  'btn-red': btnRed,
  'btn-grey': btnGrey,
  'btn-bold':  btnBold,
  'btn-transp': btnTransp,
  'btn-transp-red': btnTranspRed,
  'btn-UC': btnUC
  });
  return (
    <div className={itemClass} onClick = {btnClick} id={id}>
      {content}
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
  btnClick: PropTypes.func.isRequired,
  id: PropTypes.string
};

Button.defaultProps = {
  btnSm: false,
  btnBig: false,
  btnWhite: false,
  btnRed: false,
  btnGrey: false,
  btnBold: false,
  btnTransp: false,
  btnTranspRed: false,
  btnUC: false,
  content: 'Button',
  id: ''
};