import React from 'react';
import { Redirect } from 'react-router-dom';


export const withAuthRedirect = (Component: any) => {
    let RedirectComponent = (props: any) => {

        if (!props.isAuth) return <Redirect to={'/login'} />
        return (<Component {...props} />)

    }
    return RedirectComponent;
}