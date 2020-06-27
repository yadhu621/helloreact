import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menubar from './Menubar';
import * as serviceWorker from './serviceWorker';
import Advert from './Advert';
import NavBar from './NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Menubar />
    <App />
    <Advert />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();