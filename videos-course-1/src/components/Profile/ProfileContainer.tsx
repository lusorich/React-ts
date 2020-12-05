import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const AuthRedirectComponent = (props: any) => {
    if (!props.isAuth) return <Redirect to={'/login'}></Redirect>
    return <ProfileContainer {...props} />
}

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfile })(withUrlDataContainerComponent);