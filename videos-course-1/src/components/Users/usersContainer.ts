import {changeFollowedCreator} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from '../Users/Users';


let mapStateToProps = (state: any) => ({
    users: state.usersPage.users
})

let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeFollowed: (userId: string) => {
            console.log(userId);
            dispatch(changeFollowedCreator(userId));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;