import React from 'react';
import {Link} from  'react-router-dom';


export const Menu = () => (
<ul className='menu'>
  <li><Link to='/search'>
    Search
  </Link></li>
  <li><Link to='/film'>
    My films
  </Link></li>
</ul>

);
