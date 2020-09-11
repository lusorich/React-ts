import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/';
import { postType, actionsType, addPostActionType, changeNewTextActionType } from '../../../redux/state';

type propsType = {
    posts: Array<postType>,
    dispatch: (action: actionsType) => void,
    newPostText: string
}

const addPostActionCreator = (): addPostActionType => ({ type: 'ADD-POST' })


const onChangePostTextActionCreator = (text: string): changeNewTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})

const MyPosts = (props: propsType) => {

    let postsArray: any = props.posts.map(post => { return (<Post message={post.message} likesCount={post.likesCount} />) });
    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onChangePostTextActionCreator(e.currentTarget.value));
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