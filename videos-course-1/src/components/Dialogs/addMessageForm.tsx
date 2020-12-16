import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Textarea } from '../common/formsCotroll/FormsControls';

const maxLength100 = maxLengthCreator(100);

export const AddMessageForm = (props: any) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="newMessageBody" validate={[requiredField, maxLength100]} placeholder='Enter your message' component={Textarea}/>
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