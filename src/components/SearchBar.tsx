import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { SuggestionList } from './SuggestionList';

export const SearchBar: React.FC = () => {
  return (
    <>
      <SearchBarWrapper>
        <SearchBarInput placeholder="검색어를 입력해주세요." />
        <SearchBarButton>
          <AiOutlineSearch size={32} color="white" />
        </SearchBarButton>
      </SearchBarWrapper>

      <SuggestionList />
    </>
  );
};

const SearchBarWrapper = styled.div`
  width: 60%;
  height: 70px;
  margin-top: 30px;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  background-color: white;
`;

const SearchBarInput = styled.input`
  flex-grow: 1; // SearchBarWrapper의 남는 공간을 전부 차지
  height: 100%;
  padding: 0 15px; // 좌우 패딩
  border-radius: 30px;
  border: none;
  box-sizing: border-box;
  line-height: 70px;

  &:focus {
    outline: none;
  }
`;

const SearchBarButton = styled.button`
  width: 10%;
  max-width: 60px; // 버튼의 최대 너비 설정
  height: 80%;
  border-radius: 100%;
  border: none;
  background-color: #007be9;
  flex-shrink: 0;
  margin-left: auto; // SearchBarButton을 항상 오른쪽으로 정렬
  margin-right: 3px; // 우측 끝에서 3px 떨어진 지점에 위치

  @media (max-width: 1000px) {
    width: 30%;
  }
`;
