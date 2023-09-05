import React from 'react';
import styled from 'styled-components';
import { SearchResult } from '../types/SearchResult';

interface SuggestionListProps {
  data: SearchResult[] | null;
}

export const SuggestionList: React.FC<SuggestionListProps> = ({ data }) => {
  return (
    <SuggestionListWrapper>
      <Title>추천 검색어</Title>
      <Divider />
      {data && data.length > 0 ? (
        data.map(item => (
          <SearchItem key={item.sickCd}>{item.sickNm}</SearchItem>
        ))
      ) : (
        <NoDataText>검색어 없음</NoDataText>
      )}
    </SuggestionListWrapper>
  );
};

const SuggestionListWrapper = styled.div`
  width: 70%;
  max-height: 250px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: white;
  overflow-y: auto; // 내용이 많아지면 스크롤 가능하도록
`;

const Title = styled.p`
  font-weight: bold;
  padding: 10px 15px;
  margin: 0;
`;

// 구분선
// UI에서 두 영역이나 요소를 구분하기 위해 사용하는 가로선이나 세로선
const Divider = styled.hr`
  margin: 0;
  opacity: 0.5;
`;

const SearchItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f3f3f3; // 옅은 회색으로 hover 효과 추가
  }
`;

const NoDataText = styled.div`
  padding: 10px 15px;
  color: #aaa; // 옅은 회색으로 "검색어 없음" 표시
`;
