import { toggleFollowingProgress, setCurrentPage, userFollow, onPageChanged, userUnfollow, UsersType, requestUsers } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';


interface IUsersProps {
    users: UsersType,
    pageSize: any,
    totalUsersCount: number,
    currentPage: any,
    setCurrentPage: any,
    isFetching: any,
    toggleFollowingProgress: any,
    followingInProgress: any,
    requestUsers: any,
    onPageChanged: any,
    userFollow: any,
    userUnfollow: any
}

class UsersContainer extends React.Component<IUsersProps> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page: any) => {
        this.props.onPageChanged(page, this.props.pageSize);
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
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                userFollow={this.props.userFollow}
                userUnfollow={this.props.userUnfollow}
            />
        </>
    }
}

// let mapStateToProps = (state: any) => ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
// })

let mapStateToProps = (state: any) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
})



export default compose<React.ComponentType>(connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
    onPageChanged,
    userFollow,
    userUnfollow
}), withAuthRedirect)(UsersContainer)

