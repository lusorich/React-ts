import './index.css';
import { stateRootType, store } from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxStore from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export let rerenderEntireTree = (state: stateRootType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={reduxStore}>
          <App state={reduxStore.getState()} dispatch={store.dispatch}/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
};

rerenderEntireTree(reduxStore.getState());
reduxStore.subscribe(() => {
  rerenderEntireTree(reduxStore.getState());
});