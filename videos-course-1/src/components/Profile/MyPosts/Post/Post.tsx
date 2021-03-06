import React from 'react';
import s from './Post.module.css';

type MessageType = string;

type PropsType = {
    message: MessageType
    likesCount: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src='https://specials-images.forbesimg.com/imageserve/5f15a97f808987000645a4d3/960x0.jpg?fit=scale' alt='ava'></img>
            Post 1
            <div>
                <span>{props.message}</span>
            </div>
        </div>
    )
}

export default Post;