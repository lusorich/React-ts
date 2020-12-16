import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import {Textarea} from '../../common/formsCotroll/FormsControls';

const maxLength10 = maxLengthCreator(10);

export const PostForm= (props: any) => {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Field name="postText" validate={[requiredField, maxLength10]} placeholder={"Write some text"} component={Textarea} />
                <button >Add post</button>
            </form></>
    )
}

export const PostReduxForm = reduxForm({
    form: "post"
})(PostForm);