import React from 'react';
import { PostReduxForm } from './FormPost';
import s from './MyPosts.module.css';
import Post from './Post/';

type propsType = {
    newPostText: string,
    posts: any
    onAddPost: (newText: string) => void
}

const MyPosts = (props: propsType) => {

    let postsArray = props.posts.map((post: any) => { return (<Post message={post.message} likesCount={post.likesCount} key={post.id} />) });

    const onSubmit = ({ postText }: any) => {
        props.onAddPost(postText)
    }

    return (
        <div>
            <PostReduxForm onSubmit={onSubmit} />
            <div className={s.posts}>
                {postsArray}
            </div>
        </div>
    )
}

export default MyPosts;