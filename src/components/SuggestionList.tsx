import React from 'react';
import styled from 'styled-components';
import { SearchResult } from '../types/SearchResult';

interface SuggestionListProps {
  data: SearchResult[] | null;
}

export const SuggestionList: React.FC<SuggestionListProps> = ({ data }) => {
  return (
    <SuggestionListWrapper>
      최근 검색어
      <hr />
      {data && data.length > 0 ? (
        data.map(item => (
          // 여기서 각 항목을 표시하는 로직이 들어갑니다.
          <div key={item.sickCd}>{item.sickNm}</div>
        ))
      ) : (
        <div>검색어 없음</div>
      )}
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
