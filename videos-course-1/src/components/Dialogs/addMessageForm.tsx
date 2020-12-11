import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const AddMessageForm = (props: any) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="newMessageBody" placeholder='Enter your message' component="textarea"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </>
    )
}

export const AddMessageFormRedux = reduxForm({
    form: "message"
})(AddMessageForm);