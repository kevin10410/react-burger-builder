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
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
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
                postOrder = { this.orderHandler }
              />
        }
      </DivContactData>
    );
  };
}; 

export default ContactData;