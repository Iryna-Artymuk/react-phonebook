import axios from 'axios';
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = '';
  },
};
