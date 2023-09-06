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

    // API가 호출되었다는 사실을 콘솔에 출력하기 위한 info 구문.
    console.info('calling api');

    try {
      const response = await axios.get<SearchResult[]>(
        // API 호출 주소를 로컬에서 배포 주소로 변경.
        `https://preonboardingapiserver.vercel.app/api/data?q=${query}`,
        // `http://localhost:4000/sick?q=${query}`,
      );
      // 응답 데이터를 캐시에 저장
      setCachedData(query, response.data);
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    } catch (event: any) {
      const errorCode = event?.response?.status; // Axios의 response object에서 status code를 추출
      const errorMessage = event?.message || 'An unexpected error occurred'; // 에러 메시지가 없는 경우 기본 메시지 사용
      dispatch({ type: 'FETCH_ERROR', payload: { errorCode, errorMessage } });
    }
  };

  const clearData = () => {
    dispatch({ type: 'DATA_CLEAN' });
  };

  return { ...context.state, search, clearData };
};

export default useSearchAPI;
