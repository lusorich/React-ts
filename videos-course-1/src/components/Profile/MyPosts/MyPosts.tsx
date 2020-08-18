import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/';

const MyPosts = () => {

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