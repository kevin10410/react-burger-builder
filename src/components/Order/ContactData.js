import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Spinner from '../UI/Spinner';
import ContactForm from './ContactForm';
import { POST_ORDER } from '../../store/actions/orders';

const DivContactData = styled.div`
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

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Mail',
        },
        value: '',
      },
      address: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Address',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code',
        },
        value: '',
      },
      delivery: {
        elementType: 'select',
        elementConfig: {
          options: [
            { display:'Mail', value: 'mail' },
            { display:'Express', value: 'express' },
          ],
        },
        value: '',
      },
    },
  };

  orderHandler = async (event) => {
    event.preventDefault();
    const { ingredients, price } = this.props;
    const { orderForm } = this.state;
    this.props.postOrder({
      ingredients,
      price,
      customer: {
        name: orderForm.name.value,
        address: orderForm.address.value,
        email: orderForm.email.value,
        zipCode: orderForm.zipCode.value,
        delivery: orderForm.delivery.value,
      },
    });
  };

  formInputHandler = (event, inputItem) => {
    const updatedForm = { ...this.state.orderForm };
    const updateItem = { ...updatedForm[inputItem] };
    const { value } = event.target;

    updatedForm[inputItem] = {
      ...updateItem,
    };
    updatedForm[inputItem].value = value;

    this.setState({ orderForm: updatedForm });
  };
  
  render() {
    return (
      <DivContactData>
        {
          this.props.isLoading
            ? <Spinner/>
            : <ContactForm
                orderForm = { this.state.orderForm }
                postOrder = { this.orderHandler }
                changeHandler = { this.formInputHandler }
              />
        }
      </DivContactData>
    );
  };
};

const mapStateToProps = state => ({
  isLoading: state.reducerOrders.isLoading,
});

const mapDispatchToProps = dispatch => ({
  postOrder: (orderInfo) => dispatch(POST_ORDER(orderInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactData);
