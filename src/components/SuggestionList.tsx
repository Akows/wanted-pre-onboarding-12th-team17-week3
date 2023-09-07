import React from 'react';
import styled from 'styled-components';
import { SearchResult } from '../types/SearchResult';

interface SuggestionListProps {
  isLoading: boolean;
  data: SearchResult[] | null;
  searchTerm: string;
  selectedIndex: number; // 선택된 항목의 인덱스를 prop으로 받음
  modalRef: React.RefObject<HTMLDivElement>;
  itemRefs: React.RefObject<HTMLElement[]>;
}

export const SuggestionList: React.FC<SuggestionListProps> = ({
  isLoading,
  data,
  searchTerm,
  selectedIndex,
  modalRef,
  itemRefs,
}) => {
  /**
   * 주어진 문자열 내에서 특정 키워드를 강조하는 함수.
   *
   * @param text 키워드를 강조하고자 하는 전체 텍스트.
   * @param keyword 강조하고자 하는 키워드.
   * @returns 키워드가 강조된 JSX 요소.
   */
  const highlightKeyword = (text: string, keyword: string): JSX.Element => {
    // 문자열 내에서 키워드의 시작 위치를 찾습니다. 대소문자를 구분하지 않기 위해 둘 다 소문자로 변환하여 비교합니다.
    const startIndex = text.toLowerCase().indexOf(keyword.toLowerCase());

    // 만약 키워드가 문자열 내에 없다면, 원래의 텍스트를 그대로 반환합니다.
    if (startIndex === -1) {
      return <>{text}</>;
    }

    // 키워드 이전의 문자열, 키워드, 그리고 키워드 이후의 문자열로 분할합니다.
    const beforeKeyword = text.slice(0, startIndex);
    const matchedKeyword = text.slice(startIndex, startIndex + keyword.length);
    const afterKeyword = text.slice(startIndex + keyword.length);

    // 키워드를 강조하여 (StrongText로 감싸서) 반환합니다.
    return (
      <>
        🔍 {beforeKeyword}
        <StrongText>{matchedKeyword}</StrongText>
        {afterKeyword}
      </>
    );
  };

  return (
    <SuggestionListWrapper ref={modalRef}>
      <CurrentSearchTerm>🔍 {searchTerm}</CurrentSearchTerm>

      {isLoading && <LoadingText>로딩 중..</LoadingText>}

      {!isLoading && (
        <>
          <Title>추천 검색어</Title>
          <Divider />
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <SearchItem
                key={item.sickCd}
                ref={(el: HTMLDivElement | null) => {
                  if (el && itemRefs.current) {
                    itemRefs.current[index] = el;
                  }
                }}
                style={{
                  backgroundColor:
                    index === selectedIndex ? '#f3f3f3' : 'transparent',
                }} // 선택된 항목의 배경색 변경
              >
                {highlightKeyword(item.sickNm, searchTerm)}{' '}
              </SearchItem>
            ))
          ) : (
            <NoDataText>검색어 없음</NoDataText>
          )}
        </>
      )}
    </SuggestionListWrapper>
  );
};

const SuggestionListWrapper = styled.div`
  width: 70%;
  max-height: 500px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: white;
  overflow-y: auto; // 내용이 많아지면 스크롤 가능하도록

  @media (max-width: 600px) {
    width: 99%; // 너비를 100%로 설정
    max-height: 100%;
    border-radius: 0px;
    padding-left: 0px;
    padding-right: 10px;
    margin-top: 0px;
  }
`;

const CurrentSearchTerm = styled.div`
  padding: 5px 15px;
  color: #555; // 어두운 회색으로 표시
  font-weight: 900;
  font-size: 19px;
  border-bottom: 1px solid #ddd; // 아래에 얇은 구분선 추가
  margin-bottom: 5px; // Title과의 간격 조절
`;

const LoadingText = styled.p`
  font-weight: bold;
  padding: 10px 15px;
  margin: 0;
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

const StrongText = styled.strong`
  font-weight: 900;
  font-size: 19px;
`;
