import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  LOGOUT,
} from '../../store/actions/login';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  };

  render() {
    return (
      <Redirect to="/login"/>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(LOGOUT()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Logout);

