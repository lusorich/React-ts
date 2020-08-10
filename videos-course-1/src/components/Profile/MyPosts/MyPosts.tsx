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
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'First', likesCount: 12 }
    ]

    let postsArray: any = postData.map(post => { return (<Post message={post.message} likesCount={post.likesCount} />) });

    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsArray}
            </div>
        </div>
    )
}

export default MyPosts;