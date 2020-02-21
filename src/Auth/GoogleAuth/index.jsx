import React, { Component } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import GoogleButton from 'react-google-button';
import Axios from 'axios';

import './style.scss';

class GoogleAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSigned: false,
      userInfo: null,
    };
  }

  handleLogoutSuccess = () => {
    this.setState({ isSigned: false, userInfo: null });
  };

  handleLoginSuccess = async e => {
    this.setState({ isSigned: true, userInfo: e.profileObj });

    this.props.updateUserInfo(e.profileObj);

    await Axios.post(`http://youta-api.ngrok.io/api-user/`, { ...e.profileObj, accessToken: e.accessToken }).then(
      res => {
        console.log(`/api-user/`, res.data);
      },
    );
  };

  handleLoginFailed = e => {
    console.log(e);
  };

  render() {
    const { isSigned, userInfo } = this.state;

    console.log(userInfo, process.env.GOOGLE_CLIENT_ID);
    return (
      <div className="google-auth-container">
        {isSigned ? `You're signed in` : `You're not signed in`}
        {isSigned ? (
          <>
            <h4>Response</h4>
            <div>
              <strong>ID:</strong>
              <span>{userInfo.googleId}</span>
            </div>
            <div>
              <strong>Name:</strong>
              <span>{userInfo.name}</span>
            </div>
            <div>
              <strong>Email:</strong>
              <span>{userInfo.email}</span>
            </div>
            <div>
              <strong>Image:</strong>
              <span>{userInfo.imageUrl}</span>
            </div>
            <div className="button-container">
              <GoogleLogout
                clientId={process.env.GOOGLE_CLIENT_ID}
                buttonText="Sign Out"
                onLogoutSuccess={this.handleLogoutSuccess}
              />
            </div>
          </>
        ) : (
          <div className="button-container">
            <GoogleLogin
              type="light"
              clientId={process.env.GOOGLE_CLIENT_ID}
              render={renderProps => {
                return <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled} />;
              }}
              scope="https://www.googleapis.com/auth/calendar"
              buttonText="SignIn With Google"
              onSuccess={this.handleLoginSuccess}
              onFailure={this.handleLoginFailed}
              cookiePolicy="single_host_origin"
            />
          </div>
        )}
      </div>
    );
  }
}

export default GoogleAuth;
