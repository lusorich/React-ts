import React from 'react';
import RightSide from './components/rightSide/rightSide';
import s from './app.module.css';
import LeftSideContainer from './components/leftSide/leftSideContainer';
import RightSideContainer from './components/rightSide/rightSideContainer';

function App() {
  return (
    <div className={s['app-wrapper']}>
      <LeftSideContainer />
      <RightSideContainer />
    </div>
  );
}

export default App;
