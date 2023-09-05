import { useContext } from 'react';
import axios from 'axios';
import { AppDataContext } from '../context/AppDataContext';
import { SearchResult } from '../types/SearchResult';
import { getCachedData, setCachedData } from '../utils/cacheUtils';

const useSearchAPI = () => {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error('useSearchAPI must be used within a AppDataProvider');
  }

  const { dispatch } = context;

  const search = async (query: string) => {
    // 먼저 캐시에서 데이터 확인
    const cachedData = getCachedData(query);

    if (cachedData) {
      // 캐시에 데이터가 있으면 반환
      dispatch({ type: 'FETCH_SUCCESS', payload: cachedData });
      return;
    }

    // 캐시에 데이터가 없으면 API 호출
    dispatch({ type: 'FETCH_INIT' });

    console.info('calling api');

    try {
      const response = await axios.get<SearchResult[]>(
        `http://localhost:4000/sick?q=${query}`,
      );
      // 응답 데이터를 캐시에 저장
      setCachedData(query, response.data);
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
