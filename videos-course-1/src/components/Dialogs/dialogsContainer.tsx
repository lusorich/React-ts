import Dialogs from './dialogs'
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import React from 'react';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyCreator(text));
        },
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        }
    };
}


const AuthRedirectComponent = (props: any) => {
    if (!props.isAuth) return <Redirect to={'/login'}></Redirect>
    return <Dialogs {...props} />
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;