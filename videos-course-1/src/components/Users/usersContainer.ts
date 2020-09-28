import {changeFollowedAC, setCurrentPageAC, setUsersCreatorAC, setUsersTotalCountAC} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';


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
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;