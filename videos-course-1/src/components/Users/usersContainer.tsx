import { changeFollowedAC, setCurrentPageAC, setUsersCreatorAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';


interface IUsersProps {
    users: any,
    setUsers: any,
    onChangeFollowed: any,
    pageSize: any,
    totalUsersCount: any,
    currentPage: any,
    setCurrentPage: any,
    setUsersTotalCount: any
}

class UsersContainer extends React.Component<IUsersProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            let users = response.data.items
            this.props.setUsers(users);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (page: any) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            let users = response.data.items
            this.props.setUsers(users);
        });
    }
    render(): any {

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            onChangeFollowed={this.props.onChangeFollowed}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);;