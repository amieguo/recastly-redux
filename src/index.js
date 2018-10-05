import ReactDOM from 'react-dom';
import React, {Component} from 'react'; //added Component here
import App from './components/App.js';
import {connect} from 'react-redux';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';
import currentVideo from './actions/currentVideo.js';
import {Provider} from 'react-redux';
//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('app')
);
