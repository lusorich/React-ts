import Dialogs from './dialogs'
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import React from 'react';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
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
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);