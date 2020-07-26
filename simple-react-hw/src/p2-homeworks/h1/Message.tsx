import React from "react";
import styles from "./Message.module.css";

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={styles.message}>
            <img className={styles.message__avatar} src={props.avatar} width="50" height="50" alt="Аватар"></img>
            <h2 className={styles.message__title}>{props.name}</h2>
            <p className={styles.message__text}>{props.message}</p>
            <span className={styles.message__time}>{props.time}</span>
        </div>
    );
}

export default Message;