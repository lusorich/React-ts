import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/images/nagiev.jpg';
import s from './Users.module.css';
import { isThrowStatement } from 'typescript';


interface IUsersProps {
    users: any,
    setUsers: any,
    onChangeFollowed: any,
    pageSize: any,
    totalUsersCount: any,
    currentPage: any,
    setCurrentPage: any
}

class UsersC extends React.Component<IUsersProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            let users = response.data.items
            this.props.setUsers(users);
        });
    }

    styleImg = {
        width: '100px',
        height: '100px'
    }

    render(): any {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 0; i < pagesCount; i++) {
            pages.push(i);
        }

        return (<div>
            <div>
                {pages.map(p => { return (<span onClick={ () => { this.props.setCurrentPage(p)} } className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>) })}
            </div>
            {this.props.users.map((user: any) =>
                <ul key={user.id}>
                    <li>
                        <div>
                            <img style={this.styleImg} src={user.photos.small == null ? userPhoto : user.photos.small}></img>
                            <button onClick={() => { this.props.onChangeFollowed(user.id) }}>{user.followed ? 'Follow' : 'Unfollow'}</button>
                        </div>
                        <div>
                            <span>{user.name}</span>
                            <p>{user.status}</p>
                        </div>
                    </li>
                </ul>
            )}
        </div>)
    }
}



export default UsersC;