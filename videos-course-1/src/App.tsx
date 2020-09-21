import React from 'react';
import './App.css';
import Header from './components/Header/';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile/';
import Dialogs from './components/Dialogs/';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { stateRootType, actionsType } from './redux/store';
import DialogsContainer from './components/Dialogs/dialogsContainer';

type propsType = {
  state: stateRootType,
}

const App = (props: propsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile' render={() => <Profile state={props.state} />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
