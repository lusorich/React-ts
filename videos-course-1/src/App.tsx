import React from 'react';
import './App.css';
import Header from './components/Header/';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile/';
import Dialogs from './components/Dialogs/';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { stateRootType, actionsType } from './redux/state';
import DialogsContainer from './components/Dialogs/dialogsContainer';

type propsType = {
  state: stateRootType,
  dispatch: (action: actionsType) => void
}

const App = (props: propsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={() => <DialogsContainer state={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
