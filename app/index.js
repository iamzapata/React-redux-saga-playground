import React from 'react';
import { render } from 'react-dom';
import Application from 'components/Application';

const container = document.getElementById('app');

render(React.createElement(Application), container);