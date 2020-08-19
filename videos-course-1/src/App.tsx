import React from 'react';
import './App.css';
import Header from './components/Header/';
import Navbar from './components/Navbar/';
import Profile from './components/Profile/';
import Dialogs from './components/Dialogs/';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { postType } from '.';

type propsType = {
  posts: Array<postType>
}

const App = (props: propsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={() => <Dialogs />} />
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
