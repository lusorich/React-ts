import React from 'react';
import './App.css';
import Header from './components/Header/';
import Navbar from './components/Navbar/';
import Profile from './components/Profile/';
import Dialogs from './components/Dialogs/';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
      </BrowserRouter>
  )
}

export default App;
