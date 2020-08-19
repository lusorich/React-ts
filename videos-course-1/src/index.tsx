import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state } from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <App posts={state.posts} dialogs={state.dialogs} messages={state.messages} />
  </React.StrictMode>,
  document.getElementById('root')
);
