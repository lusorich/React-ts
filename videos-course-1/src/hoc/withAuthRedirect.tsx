import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    let RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Redirect to={'/login'} />
        return (<Component {...props} />)
    }
    const AuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return AuthRedirectComponent;
}