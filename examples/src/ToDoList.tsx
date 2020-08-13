import React, {useState} from 'react';
import s from './App.module.css';


type PropsType = {
    on: boolean
}

export const ToDoList: React.FC<PropsType> = ({on}) => {

    const [ind,setIndi] = useState<boolean>(false);

    const onStyle = {
        color: ind ? "green" : "black",
    }

    const offStyle = {
        color: !ind ? "green" : "black",
    }

    const indStyle = {
        color: ind ? "red" : "black"
    }

    return (
        <div className="App">
            <button style={onStyle} onClick={() => {setIndi(true)}}>On</button>
            <button style={offStyle} onClick={() => {setIndi(false)}}>Off</button>
            <span style={indStyle}>O</span>
        </div>
    );
}