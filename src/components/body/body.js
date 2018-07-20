import React, {Fragment} from 'react';
import {Header} from 'src/components/header/header.js';
import {Results} from 'src/components/results/results.js';
import {Footer} from 'src/components/footer/footer.js';

export const Body = () => (
    <Fragment>
        <div className="wrapper">
            <Header/>
            <Results/>
        </div>
        <Footer/>
    </Fragment>
);