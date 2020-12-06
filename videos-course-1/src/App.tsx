import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { stateRootType } from './redux/store';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

type propsType = {
  state: stateRootType,
}

const App = (props: propsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
