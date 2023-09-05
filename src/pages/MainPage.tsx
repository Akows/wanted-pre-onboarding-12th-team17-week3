import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { AppDataContext } from '../context/AppDataContext';
const MainPage: React.FC = () => {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error('Context API Provider가 로딩되지 않았습니다.');
  }

  const { state, dispatch } = context;

  return (
    <MainPageWrapper>
      <MainTitle>국내 모든 임상시험 검색하고</MainTitle>
      <MainTitle>온라인으로 참여하기</MainTitle>
      <SearchBar />
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: inline-flex;
  align-items: center;
  flex-direction: column;

  background-color: #cae9ff;

  & > p:nth-child(1) {
    margin-top: 120px;
    margin-bottom: 10px;
  }
`;

const MainTitle = styled.p`
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -4px;
  margin: 0;
`;
