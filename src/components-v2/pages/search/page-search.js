import React, {Fragment} from 'react';
import {BodySection} from "src/components-v2/body/section/body-section";
import {Header} from "src/components-v2/header/header";
import {Search} from 'src/components-v2/search/search';

export const PageSearch = ({location}) => {
  //console.log(location);
  return (<Fragment>
    <BodySection bgTheme>
    <Header />
    <Search location={location} />
  </BodySection>
    <BodySection>
      search page
    </BodySection>
  </Fragment>
);
};
