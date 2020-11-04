import { changeFollowed, toggleFollowingProgress, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import preloader from './../../assets/images/preloader.gif';
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
    followingInProgress: any
}

class UsersContainer extends React.Component<IUsersProps> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            let users = data.items
            this.props.setUsers(users);
            this.props.setUsersTotalCount(data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (page: any) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            let users = data.items
            this.props.setUsers(users);
            this.props.toggleIsFetching(false);
        });
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
    toggleFollowingProgress
})(UsersContainer);;