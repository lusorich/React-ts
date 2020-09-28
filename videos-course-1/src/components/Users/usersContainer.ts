import {changeFollowedAC, setCurrentPageAC, setUsersCreatorAC} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import UsersC from './UsersC';


let mapStateToProps = (state: any) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})

let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeFollowed: (userId: string) => {
            dispatch(changeFollowedAC(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsersCreatorAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;