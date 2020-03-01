import axios from 'axios';

export const postOrderInfo = (payload) => axios.post('/order', payload);
export const getOrders = () => axios.get('/order');
