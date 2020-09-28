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

class UsersAPIComponent extends React.Component<IUsersProps> {
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



export default UsersAPIComponent;