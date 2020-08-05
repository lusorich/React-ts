import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/';

const MyPosts = () => {
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