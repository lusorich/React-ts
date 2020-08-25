import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, stateRootType } from './redux/state';

export let rerenderEntireTree = (state: stateRootType) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  };