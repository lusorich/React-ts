import { changeFollowed, toggleFollowingProgress, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, getUsersThunkCreator, onPageChangedThunkCreator } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api/api';


interface IUsersProps {
    users: any,
    setUsers: any,
    changeFollowed: any,
    pageSize: any,
    totalUsersCount: any,
    currentPage: any,
    setCurrentPage: any,
    setUsersTotalCount: any,
    isFetching: any,
    toggleIsFetching: any,
    toggleFollowingProgress: any,
    followingInProgress: any,
    getUsers: any,
    onPageChangedThunkCreator: any
}

class UsersContainer extends React.Component<IUsersProps> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page: any) => {
        this.props.onPageChangedThunkCreator(page, this.props.pageSize);
    }
    render(): any {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                changeFollowed={this.props.changeFollowed}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state: any) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
})


export default connect(mapStateToProps, {
    changeFollowed,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
    onPageChangedThunkCreator
})(UsersContainer);;