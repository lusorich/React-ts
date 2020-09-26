import {changeFollowedCreator, setUsersCreator} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import UsersC from './UsersC';


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;