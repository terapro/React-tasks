import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Header} from "src/components-v2/header/header";
import {Footer} from "src/components-v2/footer/footer";
import {BodySection} from "src/components-v2/body/section/body-section";
import { withRouter } from 'react-router'

export const Body = withRouter(({children}) => (
  <Fragment>
      <div className="content">
        {children}
      </div>
      <BodySection bgDark asFooter>
        <Footer/>
      </BodySection>
  </Fragment>
));

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Body.defaultProps = {
  children: null
};
