import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = (props) => {

    const {labelUC, labelWhite, labelBold, content} = props;
    const itemClass =classNames({
      'lbl': true,
      'lbl-UC': labelUC,
      'lbl-white': labelWhite,
      'lbl-bold': labelBold,
    });

    return (
      <div className={itemClass}>
        {content}
      </div>
    )
};

Label.propTypes = {
    labelBold: PropTypes.bool,
    content: PropTypes.string,
    labelUC: PropTypes.bool,
    labelWhite: PropTypes.bool
};

Label.defaultProps = {
  labelBold: false,
  content: 'Label',
  labelUC: false,
  labelWhite: false
};

export {Label};
