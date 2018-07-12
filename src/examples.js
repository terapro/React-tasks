import React from 'react';
import ReactDOM from 'react-dom';
import "../src/css/bootstrap.min.css";

import el1 from "./js/components/examples/el1";
import el2 from "./js/components/examples/el2";
import El3 from "./js/components/examples/el3";

const name = "World";


const app = React.createElement('div', null, el1, el2(name), <El3/>);

const root = document.getElementById("root");

ReactDOM.render(app, root);
