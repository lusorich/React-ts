import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserDataAC, getAuthUser, logout } from './../../redux/auth-reducer';

interface IAuthProps {
    setUserDataAC: any,
    getAuthUser: any
}

class HeaderContainer extends React.Component<IAuthProps> {

    componentDidMount() {
        this.props.getAuthUser();
    }
    render() {
        return <Header  {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setUserDataAC, getAuthUser, logout })(HeaderContainer);