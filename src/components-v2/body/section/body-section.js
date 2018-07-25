import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';



export const BodySection = ({children, bgDark, bgLight, bgTheme, asFooter}) => {
  let itemClass = classNames({
    'body-section-wrapper': true,
    'body-section-wrapper_dark': bgDark,
    'body-section-wrapper_light': bgLight,
    'body-section-wrapper_theme': bgTheme,
    'body-section-wrapper_as-footer': asFooter
  });
  return (
    <div className={itemClass} >
      <div className='body-section'>
        {children}
      </div>
    </div>
  );
};

BodySection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  bgDark: PropTypes.bool,
  bgLight: PropTypes.bool,
  bgTheme: PropTypes.bool,
  asFooter: PropTypes.bool
};

BodySection.defaultProps = {
  children: null,
  bgDark: false,
  bgLight: false,
  bgTheme: false,
  asFooter: false
};
