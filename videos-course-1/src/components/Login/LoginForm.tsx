import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/formsCotroll/FormsControls';



export const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit }>
        <div>
            <Field validate={[requiredField]} placeholder="login" name="login" component={Input} />
        </div>
        <div>
            <Field validate={[requiredField]} placeholder="Password" name="password" component={Input} />
        </div>
        <div>
            <Field type="checkbox" namde="rememberMe" component="Input" /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);
