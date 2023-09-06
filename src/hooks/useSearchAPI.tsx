import { useCallback, useContext } from 'react';
import axios from 'axios';
import { AppDataContext } from '../context/AppDataContext';
import { SearchResult } from '../types/SearchResult';
import { getCachedData, setCachedData } from '../utils/cacheUtils';
import { debounce } from '../utils/debounce';

const useSearchAPI = () => {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error('useSearchAPI must be used within a AppDataProvider');
  }

  const { dispatch } = context;

  const actualSearch = async (query: string) => {
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
        `https://preonboardingapiserver.vercel.app/api/data?q=${query}`,
      );
      // 응답 데이터를 캐시에 저장
      setCachedData(query, response.data);
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    } catch (event: any) {
      const errorCode = event?.response?.status;
      const errorMessage = event?.message || 'An unexpected error occurred';
      dispatch({ type: 'FETCH_ERROR', payload: { errorCode, errorMessage } });
    }
  };

  // actualSearch를 debounce 처리합니다.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = useCallback(debounce(actualSearch, 1000), []);

  const clearData = () => {
    dispatch({ type: 'DATA_CLEAN' });
  };

  return { ...context.state, search, clearData };
};

export default useSearchAPI;
