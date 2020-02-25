import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LOGIN } from '../../store/actions/login';
import InputItem from '../../components/UI/InputItem';
import { ButtonSuccess } from '../../component-style/ButtonStyle';
import Spinner from '../../components/UI/Spinner';

const DivLogin = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #CCC;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

class Login extends Component {
  state = {
    loginForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Mail',
        },
        value: '',
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password',
        },
        value: '',
      },
    }
  };

  formInputHandler = (event, inputItem) => {
    const updatedForm = {
      ...this.state.loginForm,
      [inputItem]: {
        ...this.state.loginForm[inputItem],
        value: event.target.value,
      },
    };

    this.setState({ loginForm: updatedForm });
  };

  loginHandler = (event) => {
    event.preventDefault();
    this.props.login();
  };

  render() {
    const inputItems = Object.entries(this.state.loginForm)
      .map(([key, value]) => (
        <InputItem
          id = { key }
          key = { key }
          elementType = { value.elementType }
          elementConfig = { value.elementConfig }
          value = { value.value }
          changeHandler = { this.formInputHandler }
        />
      ));
    return (
      this.props.isLoading
        ? <Spinner/>
        : <DivLogin>
            <form onSubmit = { (event) => this.loginHandler(event) }>
            {
              this.props.isLogin
                ? <Redirect to="/"/>
                : inputItems
            }
            <ButtonSuccess>Login</ButtonSuccess>
            </form>
          </DivLogin>
    );
  };
};

const mapStateToProps = state => ({
  isLoading: state.reducerLogin.isLoading,
  isLogin: state.reducerLogin.token !== null,
});

const mapDispatchToProps = dispatch => ({
  login: loginInfo => dispatch(LOGIN(loginInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
