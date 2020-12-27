import Dialogs from './dialogs'
import { connect } from 'react-redux';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);