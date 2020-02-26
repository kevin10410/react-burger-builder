import axios from 'axios';

export const login = (loginInfo) => axios.post('/login', loginInfo);
