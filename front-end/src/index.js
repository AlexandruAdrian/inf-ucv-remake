import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft, faQuoteRight, faBars, faTimes, faSpinner, faPlus, faPen, faTrashAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

/* Creates an icons library to use throughout the application */
library.add(faQuoteLeft, faQuoteRight, faBars, faTimes, faSpinner, faPlus, faPen, faTrashAlt, faTimesCircle);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
