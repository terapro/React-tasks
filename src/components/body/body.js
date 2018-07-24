import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import {Header} from 'src/components/header/header.js';
import {Results} from 'src/components/results/results.js';
import {Footer} from 'src/components/footer/footer.js';
import {Search} from "src/components/search/search";
import{Film} from "src/components/film/film";



export const Body = () => (
    <Fragment>
        <div className="wrapper">
            <Header>
              <Route exact path='/' component={Search} />
              <Route path='/film' component={Footer} />

            </Header>
            <Results/>
        </div>
        <Footer/>
    </Fragment>
);