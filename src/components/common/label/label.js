import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = (props) => {
    const itemClass =classNames({
      'lbl': true,
      'lbl-UC': props.labelUC,
      'lbl-white': props.labelWhite,
      'lbl-bold': props.labelBold,
    });

    return (
      <div className={itemClass}>
        {props.content}
      </div>
    )

};

Label.propTypes = {
    labelBold: PropTypes.bool,
    content: PropTypes.string,
    labelUC: PropTypes.bool,
    labelWhite: PropTypes.bool
};

export {Label};
