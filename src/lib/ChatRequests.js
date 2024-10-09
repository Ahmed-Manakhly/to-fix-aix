import {origin} from './api'
import axios from 'axios'


const API = axios.create({ baseURL: origin });
// api/conversations
export const createChat = (data) => API.post('api/conversations', data);

export const userChats = (id) => API.get(`api/conversations/${id}`);
export const removeChat = (id) => API.delete(`api/conversations/${id}`);

// export const findChat = (firstId, secondId) => API.get(`api/chat/find/${firstId}/${secondId}`);

export const getUser = (userId) => API.get(`api/users/${userId}`);

