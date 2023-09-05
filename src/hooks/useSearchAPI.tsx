import { useContext } from 'react';
import axios from 'axios';
import { AppDataContext } from '../context/AppDataContext';
import { SearchResult } from '../types/SearchResult';

const useSearchAPI = () => {
  // 전역 상태와 디스패치 함수를 가져옵니다.
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error('useSearchAPI must be used within a AppDataProvider');
  }

  const { dispatch } = context;

  const search = async (query: string) => {
    dispatch({ type: 'FETCH_INIT' });

    try {
      const response = await axios.get<SearchResult[]>(
        `http://localhost:4000/sick?q=${query}`,
      );
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    } catch (event: any) {
      dispatch({ type: 'FETCH_ERROR' });
    }
  };

  const clearData = () => {
    dispatch({ type: 'DATA_CLEAN' });
  };

  return { ...context.state, search, clearData };
};

export default useSearchAPI;
