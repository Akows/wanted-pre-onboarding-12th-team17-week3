import { useCallback, useContext } from 'react';
import { AppDataContext } from '../context/AppDataContext';
import { getCachedData, setCachedData } from '../utils/cacheUtils';
import { debounce } from '../utils/debounce';
import { searchQuery } from '../api/searchAPI';
import {
  DATA_CLEAN,
  FETCH_ERROR,
  FETCH_INIT,
  FETCH_SUCCESS,
} from '../constants/actionTypes';
import { handleError } from '../utils/errorHandler';

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
      dispatch({ type: FETCH_SUCCESS, payload: cachedData });
      return;
    }

    // 캐시에 데이터가 없으면 API 호출
    dispatch({ type: FETCH_INIT });

    console.info('calling api');

    try {
      const data = await searchQuery(query);
      // 응답 데이터를 캐시에 저장
      setCachedData(query, data);
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (event: any) {
      const { errorCode, errorMessage } = handleError(event);
      dispatch({ type: FETCH_ERROR, payload: { errorCode, errorMessage } });
    }
  };

  // actualSearch를 debounce 처리합니다.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = useCallback(debounce(actualSearch, 1000), []);

  const clearData = () => {
    dispatch({ type: DATA_CLEAN });
  };

  return { ...context.state, search, clearData };
};

export default useSearchAPI;
