// SearchBarButton.tsx

import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const StyledSearchBarButton = styled.button`
  width: 15%;
  max-width: 60px; // 버튼의 최대 너비 설정
  height: 80%;
  border-radius: 100%;
  border: none;
  background-color: #007be9;
  flex-shrink: 0;
  margin-left: auto; // SearchBarButton을 항상 오른쪽으로 정렬
  margin-right: 3px; // 우측 끝에서 3px 떨어진 지점에 위치

  transition: background-color 0.3s ease; // 0.3초 동안 background-color가 부드럽게 변경됨

  &:hover {
    background-color: black;
  }

  @media (max-width: 1000px) {
    width: 30%;
  }
`;

const SearchBarButton: React.FC = () => {
  return (
    <StyledSearchBarButton>
      <AiOutlineSearch size={32} color="white" />
    </StyledSearchBarButton>
  );
};

export default SearchBarButton;
