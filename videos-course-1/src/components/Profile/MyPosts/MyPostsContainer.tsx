import React from 'react';
import s from './MyPosts.module.css';
import { postType, actionsType } from '../../../redux/state';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type propsType = {
    posts: Array<postType>,
    dispatch: (action: actionsType) => void,
    newPostText: string
}


const MyPostsContainer = (props: propsType) => {

    const onAddPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangePostText = (text: string) => {
            props.dispatch(updateNewTextActionCreator(text));
    }

    return (
        <MyPosts newPostText={props.newPostText} onChangePostText={onChangePostText} onAddPost={onAddPost} posts={props.posts}/>
    )
}

export default MyPostsContainer;