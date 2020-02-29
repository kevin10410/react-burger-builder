import axios from 'axios';

export const userLogin = (loginInfo) => axios.post('/login', loginInfo);
