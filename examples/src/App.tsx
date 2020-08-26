import React from 'react';
import './App.css';
import UnOnOff from './Components/unOnOff';
import Accordion from './Components/Accordion';
import Raiting from './Components/Raiting';
import * as CSS from 'csstype';

const appStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column'
}

export function App() {

    return (
        <div className='App' style={appStyle}>
            <div><UnOnOff /></div>
            <div><Accordion /></div>
            <div><Raiting/></div>
        </div>
    )
}
