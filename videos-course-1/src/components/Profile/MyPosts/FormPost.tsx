import React from 'react';
import { Field, reduxForm } from 'redux-form';


export const PostForm= (props: any) => {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Field name="postText" placeholder="Write some text" component="textarea" />
                <button >Add post</button>
            </form></>
    )
}

export const PostReduxForm = reduxForm({
    form: "post"
})(PostForm);