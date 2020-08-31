import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/';
import { postType, updateNewPostText } from '../../../redux/state';

type propsType = {
    posts: Array<postType>,
    addPost: () => void,
    updateNewPostText: (newText: string) => void,
    newPostText: string
}

const MyPosts = (props: propsType) => {

    let postsArray: any = props.posts.map(post => { return (<Post message={post.message} likesCount={post.likesCount} />) });
    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    }

    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
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