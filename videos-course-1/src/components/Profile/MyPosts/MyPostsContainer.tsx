import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// type propsType = {
//     posts: Array<postType>,
//     dispatch: (action: actionsType) => void,
//     newPostText: string
// }


// const MyPostsContainer = (props: propsType) => {

//     const onAddPost = () => {
//         props.dispatch(addPostActionCreator());
//     }

//     const onChangePostText = (text: string) => {
//         props.dispatch(updateNewTextActionCreator(text));
//     }

//     return (
//         <MyPosts newPostText={props.newPostText} onChangePostText={onChangePostText} onAddPost={onAddPost} posts={props.posts}/>
//     )
// }

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator());
        },
        onChangePostText: (text: string) => {
            dispatch(updateNewTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;