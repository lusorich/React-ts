import Dialogs from './dialogs'
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;