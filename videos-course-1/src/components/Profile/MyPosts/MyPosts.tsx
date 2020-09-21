import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/';
import { stateRootType } from '../../../redux/store';

type propsType = {
    newPostText: string,
    posts: any
    onAddPost: () => void,
    onChangePostText: (text: string) => void
}

const MyPosts = (props: propsType) => {

    let postsArray = props.posts.map((post: any) => { return (<Post message={post.message} likesCount={post.likesCount} />) });

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.onAddPost();
    }

    const onChangePostText = () => {
        if (textAreaRef.current) {
            props.onChangePostText(textAreaRef.current.value);
        }
    }

    return (
        <div>
            <div>
                <textarea ref={textAreaRef} onChange={onChangePostText} value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsArray}
            </div>
        </div>
    )
}

export default MyPosts;