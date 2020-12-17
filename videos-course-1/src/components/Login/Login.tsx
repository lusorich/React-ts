import React from 'react';
import { login } from '../../redux/auth-reducer';
import { LoginReduxForm } from './LoginForm';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';


const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);