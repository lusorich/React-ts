import Dialogs from './dialogs'
import { connect } from 'react-redux';
import { sendMessageCreator } from '../../redux/dialogs-reducer';

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    };
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);