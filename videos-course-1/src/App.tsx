import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { Route, withRouter } from 'react-router-dom';
import { stateRootType } from './redux/store';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';

type propsType = {
  state: any,
  initialized: boolean,
  initializeApp: any
}
class App extends React.Component<propsType> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar state={this.props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>

  }
}

const mapStateToProps = (state: any) => ({
  state,
  initialized: state.app.initialized
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
