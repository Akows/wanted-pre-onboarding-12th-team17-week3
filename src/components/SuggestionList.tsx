import React from 'react';
import styled from 'styled-components';

export const SuggestionList: React.FC = () => {
  return (
    <SuggestionListWrapper>
      최근 검색어
      <hr />
      최근 검색어가 없습니다.
    </SuggestionListWrapper>
  );
};

const SuggestionListWrapper = styled.div`
  width: 70%;
  height: 250px;
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  background-color: white;
`;
