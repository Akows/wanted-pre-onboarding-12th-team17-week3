import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import logoImage from '../assets/logo.svg';

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <Header>
        <Logo src={logoImage} alt="Company Logo" />
      </Header>
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

const Header = styled.header`
  width: 100%;
  height: 60px; // 원하는 높이로 설정하세요
  background-color: white;
  display: flex;
  align-items: center;
  top: 0;
  margin-bottom: 50px;
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
  margin-left: 20px; // 로고의 좌측 여백 설정
`;

const MainTitle = styled.p`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3.5px;
  margin: 0;
`;
