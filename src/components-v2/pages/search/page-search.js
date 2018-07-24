import React, {Fragment} from 'react';
import {BodySection} from "src/components-v2/body/section/body-section";
import {Header} from "src/components-v2/header/header";

export const PageSearch = () => (
  <Fragment>
    <BodySection bgTheme>
      <Header/>
    </BodySection>
    <BodySection bgLight>
      search page
    </BodySection>
  </Fragment>
);