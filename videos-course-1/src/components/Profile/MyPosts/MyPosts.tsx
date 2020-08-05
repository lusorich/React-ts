import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/';

type postType = {
    id: number,
    message: string,
    likesCount: number
}

const MyPosts = () => {

    let postData: Array<postType> = [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'First', likesCount: 12}
    ]

    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'}/>
                <Post message='First post'/>
            </div>
        </div>
    )
}

export default MyPosts;