import React from 'react';

import {Header} from './js/components/header/index.js'
import {Summary} from './js/components/summary/index.js'
import {Results} from './js/components/results/index.js'
import {Footer} from './js/components/footer/index.js'

const Body =() => (<div className = "wrapper">
    <Header/>
    <Summary />
    <Results/>

</div>);





const App = () => (
    <React.Fragment>
    <Body/>
    <Footer/>
    </React.Fragment>

);

export {App};