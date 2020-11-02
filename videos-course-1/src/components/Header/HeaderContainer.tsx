import Axios from 'axios';
import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserDataAC } from './../../redux/auth-reducer';
import { authApi } from '../../api/api';

interface IAuthProps {
    setUserDataAC: any
}

class HeaderContainer extends React.Component<IAuthProps> {

    componentDidMount() {
          authApi().then(response => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data;
                    this.props.setUserDataAC(id, email, login)
                }
            });
    }
    render() {
        return <Header  {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect(mapStateToProps, { setUserDataAC })(HeaderContainer);