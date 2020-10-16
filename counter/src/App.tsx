import React from 'react';
import LeftSide from './components/leftSide/leftSide';
import RightSide from './components/rightSide/rightSide';
import { actionsType, storeType } from './store/store'

type propsType = {
  store: storeType,
  dispatch: (action: actionsType) => void
}

function App(props: propsType) {
  return (
    <div className='App'>
      <LeftSide store={props.store} dispatch={props.dispatch} />
      <RightSide store={props.store} />
    </div>
  );
}

export default App;
