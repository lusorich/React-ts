import './index.css';
import { store } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { storeType } from './redux/state';

export let rerenderEntireTree = (store: storeType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  )
};

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);