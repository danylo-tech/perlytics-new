import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import GoogleAuth from '../Auth/GoogleAuth';
import HomeScreen from '../containers/HomeScreen';
import DomainScreen from '../containers/DomainScreen';
import MobileScreen from '../containers/MobileScreen';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };
  }

  updateUserInfo = userInfo => {
    this.setState({ userInfo });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app/1">App</Link>
          </li>
        </ul>
        <GoogleAuth updateUserInfo={this.updateUserInfo} />
        <Switch>
          <Route path="/app/:id" component={MobileScreen} />
          <Route path="/domain/:id" component={DomainScreen} />
          <Route path="/" render={() => <HomeScreen userInfo={this.state.userInfo} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
