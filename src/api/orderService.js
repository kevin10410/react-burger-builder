import axios from 'axios';

export const postOrder = (payload) => axios.post('/order', payload);
export const getOrders = () => axios.get('/order');
