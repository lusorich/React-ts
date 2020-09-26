import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/images/nagiev.jpg';

interface IUsersProps {
    users: any,
    setUsers: any,
    onChangeFollowed: any
}

class UsersC extends React.Component<IUsersProps> {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                console.log(response.data.items);
                let users = response.data.items
                this.props.setUsers(users);
            });
        }

    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response.data.items);
            let users = response.data.items
            this.props.setUsers(users);
        });
    }

    styleImg = {
        width: '100px',
        height: '100px'
    }

    render(): any {
        return (<div>
            <button onClick={this.getUsers}>Click</button>
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