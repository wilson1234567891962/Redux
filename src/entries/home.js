import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';
// console.log('Hola mundo!' )
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

const homeContainer = document.getElementById('home-container')

const initialState = {
    data: {
      ...data
    }
  }
  
  const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  console.log(store.getState());

  
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  , homeContainer);
  

