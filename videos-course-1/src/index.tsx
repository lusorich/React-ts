import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state } from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <App posts={state.messagePage.posts} dialogs={state.messagePage.dialogs} messages={state.profilePage.messages} />
  </React.StrictMode>,
  document.getElementById('root')
);
