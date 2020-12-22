import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, setProfileStatusTC, updateStatusTC } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.setProfileStatusTC(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                status={this.props.status}
                profile={this.props.profile}
                updateStatus={this.props.updateStatusTC} />
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(connect(mapStateToProps, { getProfile, setProfileStatusTC, updateStatusTC }), withRouter, withAuthRedirect)(ProfileContainer);