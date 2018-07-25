import React, {Fragment} from 'react';
import {BodySection} from 'src/components-v2/body/section/body-section';
import {Header} from 'src/components-v2/header/header';
import {Search} from 'src/components-v2/search/search';

export const PageMain = () => (
  <Fragment>
    <BodySection bgTheme>
    <Header />
    <Search />
  </BodySection>
    <BodySection>
      main page
    </BodySection>
  </Fragment>
);
