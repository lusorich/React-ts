import {changeFollowedCreator, setUsersCreator} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from '../Users/Users';


let mapStateToProps = (state: any) => ({
    users: state.usersPage.users
})

let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeFollowed: (userId: string) => {
            dispatch(changeFollowedCreator(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsersCreator(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;