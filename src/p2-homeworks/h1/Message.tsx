import React from "react";
import "./message.css";

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: PropsType) {
    return (
        <div className="message">
            <img className="message__avatar" src={props.avatar} width="50" height="50" alt="Аватар"></img>
            <h2 className="message__title">{props.name}</h2>
            <p className="message__text">{props.message}</p>
            <span className="message__time">{props.time}</span>
        </div>
    );
}

export default Message;