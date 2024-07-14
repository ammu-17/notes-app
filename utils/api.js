import axios from 'axios';

export const getNotes = async () => {
  const response = await axios.get('/api/notes');
  return response.data;
};

export const getNote = async (id) => {
  const response = await axios.get(`/api/notes/${id}`);
  return response.data;
};

export const createNote = async (data) => {
  const response = await axios.post('/api/notes', data);
  return response.data;
};
