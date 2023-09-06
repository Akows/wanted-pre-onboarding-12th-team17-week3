import { useCallback, useContext } from 'react';
import { AppDataContext } from '../context/AppDataContext';
import { fetchDataFromCache, saveDataToCache } from '../utils/cacheUtils';
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
    throw new Error('AppDataContext가 로드되지 않았습니다.');
  }

  const { dispatch } = context;

  const actualSearch = async (query: string) => {
    // 먼저 캐시에서 데이터 확인
    const cachedData = fetchDataFromCache(query);

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
      // 3번째 인자로 초를 입력할 경우 캐싱 유효 기간을 따로 설정할 수 있음.
      // 인자를 사용하지 않을 경우 기본 캐싱 유효 기간은 1시간.
      saveDataToCache(query, data);
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
