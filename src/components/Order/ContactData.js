import React, { Component } from 'react';
import styled from 'styled-components';

import Spinner from '../UI/Spinner';
import ContactForm from './ContactForm';
import { postOrder } from '../../api/orderService';

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
    loading: false,
  }

  orderHandler = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { ingredients, price } = this.props;
    try {
      await postOrder({
        ingredients,
        price,
        customer: {
          name: '',
          address: '',
          email: '',
          zipCode: '',
        },
      })
        .then((res) => {
          console.log(res.data);
          this.setState({ loading: false });
          this.props.history.push('/');
        });
    } catch(err) {
      this.setState({
        loading: false,
      });
      alert(err);
    }
  }
  
  render() {
    return (
      <DivContactData>
        {
          this.state.loading
            ? <Spinner/>
            : <ContactForm
                orderForm = { this.state.orderForm }
                postOrder = { this.orderHandler }
              />
        }
      </DivContactData>
    );
  };
}; 

export default ContactData;