import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = (props) => {
    const itemClass =classNames({
      'label': true,
      'label-upper-case': props.labelUC,
      'label-white': props.labelWhite
    });

    return (
      <div className={itemClass}>
        {props.content}
      </div>
    )

};

Label.propTypes = {
    content: PropTypes.string,
    labelUC: PropTypes.bool,
    labelWhite: PropTypes.bool
};

export {Label};
