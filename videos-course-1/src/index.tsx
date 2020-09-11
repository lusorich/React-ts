import './index.css';
import { store, stateRootType } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { storeType } from './redux/state';

export let rerenderEntireTree = (state: stateRootType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  )
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);