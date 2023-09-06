import api from './apiConfig';

export const searchQuery = async (query: string) => {
  const response = await api.get(`?q=${query}`);
  return response.data;
};
