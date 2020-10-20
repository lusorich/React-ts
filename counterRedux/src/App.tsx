import React from 'react';
import LeftSide from './components/leftSide/leftSide';
import RightSide from './components/rightSide/rightSide';
import s from './app.module.css';

function App() {
  return (
    <div className={s['app-wrapper']}>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
