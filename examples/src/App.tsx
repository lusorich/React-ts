import React, { useState } from 'react';
import './App.css';
import UnOnOff from './Components/unOnOff';
import сOnOff from './Components/сOnOff';
import Accordion from './Components/Accordion';
import Raiting from './Components/Raiting';
import * as CSS from 'csstype';

const appStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column'
}

export function App() {
    const [ind, setIndi] = useState<boolean>(false);



    return (
        <div className='App' style={appStyle}>
            <div><UnOnOff /></div>
            <div><сOnOff ind={ind} onClick={() => setIndi(!ind)} /></div>
            <div><Accordion /></div>
            <div><Raiting /></div>
        </div>
    )
}
