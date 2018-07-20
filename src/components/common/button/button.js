import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Button extends Component {
  constructor(props) {
    super(props);

    this.callbackFunc = () => {
      this.props.btnClick(this.props.content);
    };
  }
  render() {
    const {btnSm, btnBig, btnWhite, btnRed, btnGrey, btnBold, btnTransp, btnTranspRed, btnUC} = this.props;
    const {id, content} = this.props;
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
    return( <div className={itemClass} onClick = {this.callbackFunc} id={id}>
      {content}
    </div>);
  }
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