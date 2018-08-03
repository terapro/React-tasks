import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Footer} from "src/components-v2/footer/footer";
import {BodySection} from "src/components-v2/body/section/body-section";

export const Body = ({children}) => (
  <Fragment>
      <div className="content">
        {children}
      </div>
      <BodySection bgDark asFooter>
        <Footer/>
      </BodySection>
  </Fragment>
);

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Body.defaultProps = {
  children: null
};
