import './index.css';
import { state, subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, stateRootType, updateNewPostText } from './redux/state';

export let rerenderEntireTree = (state: stateRootType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  )
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);