import './index.css';
import { stateRootType, store } from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxStore from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={reduxStore}>
          <App state={reduxStore.getState()} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )

