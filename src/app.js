import React from 'react';
import ReactDom from 'react-dom';
import Coordinator from './components/coordinator';
import Team from './components/team';
import Inventory from './components/inventory';

ReactDom.render(<Coordinator /> , document.getElementById("coordinators"));

ReactDom.render(<Team /> , document.getElementById("team"));

ReactDom.render(<Inventory /> , document.getElementById("inventory"));