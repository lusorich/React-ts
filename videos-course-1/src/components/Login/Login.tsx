import React from 'react';
import { LoginReduxForm } from './LoginForm';

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData);
    }

    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}

export default Login;