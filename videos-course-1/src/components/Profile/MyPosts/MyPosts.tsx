import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/';

type propsType = {
    newPostText: string,
    posts: any
    onAddPost: () => void,
    onChangePostText: (text: string) => void
}

const MyPosts = (props: propsType) => {

    let postsArray = props.posts.map((post: any) => { return (<Post message={post.message} likesCount={post.likesCount} key={post.id} />) });

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