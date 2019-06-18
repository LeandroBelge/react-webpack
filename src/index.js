'use strict'
import Title from './app';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')

)