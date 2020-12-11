import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit }>
        <div>
            <Field placeholder="login" name="login" component="input" />
        </div>
        <div>
            <Field placeholder="Password" name="password" component="input" />
        </div>
        <div>
            <Field type="checkbox" namde="rememberMe" component="input" /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);
