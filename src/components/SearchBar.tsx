import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { SuggestionList } from './SuggestionList';
import useSearchAPI from '../hooks/useSearchAPI';

export const SearchBar: React.FC = () => {
  // API 호출 기능.
  const { isLoading, isError, data, search } = useSearchAPI();

  // 검색어 키워드를 제어.
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    // 검색어가 있으면 API 호출
    if (value) {
      console.log(value);
      console.log(data);
      search(value);
    }
  };
  const clearSearchTerm = (event: React.MouseEvent) => {
    // 이벤트 버블링 현상에 의해서 ClearButton의 함수가 동작할 때..
    // 상위 태그 SearchBarInput의 setIsFocused 함수가 덩달아 동작해버린다.
    // 이를 방지해주어야 한다.
    event.stopPropagation();
    // 또한 이벤트의 기본 동작이 발동되지 않도록 하여 onBlur가 동작하는 것을 막는다
    event.preventDefault();
    setSearchTerm('');
  };

  // 추천 검색어 UI의 출력 여부를 제어하는 상태 변수.
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <SearchBarWrapper isFocused={isFocused}>
        {/* input 태그에 Focus 여부에 따라 isFocused 변수에 변화를 준다. */}
        <SearchBarInput
          placeholder="🔍 질환명을 입력해 주세요."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={searchTerm} // input의 value를 상태에 연결
          onChange={handleInputChange} // 검색어 변경 핸들러 연결
        />
        {isFocused && (
          <ClearButton onMouseDown={clearSearchTerm}>
            <AiOutlineClose size={20} color="white" />
          </ClearButton>
        )}
        <SearchBarButton>
          <AiOutlineSearch size={32} color="white" />
        </SearchBarButton>
      </SearchBarWrapper>

      {isFocused && <SuggestionList data={data} />}
    </>
  );
};

// isFocused 변수를 받아서 사용
const SearchBarWrapper = styled.div<{ isFocused: boolean }>`
  width: 70%;
  height: 70px;
  margin-top: 30px;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  background-color: white;

  // 여기에서 isFocused prop에 따라 테두리 스타일을 적용
  border: ${props => (props.isFocused ? '2px solid #007be9' : 'none')};
`;

const SearchBarInput = styled.input`
  flex-grow: 1; // SearchBarWrapper의 남는 공간을 전부 차지
  height: 100%;
  padding: 0 15px; // 좌우 패딩
  border-radius: 30px;
  border: none;
  box-sizing: border-box;
  line-height: 70px;
  font-size: 19px;

  &::placeholder {
    font-weight: 500;
    letter-spacing: -1.5px;
    text-align: left;
  }

  &:focus {
    outline: none;
  }

  // input 태그가 focus 상태일때는 placeholder의 글자 색을 투명하게
  &:focus::placeholder {
    color: transparent;
  }
`;

const ClearButton = styled.button`
  width: 30px; // 버튼의 너비 설정
  height: 30px; // 버튼의 높이 설정
  display: flex; // 내부 아이콘을 중앙에 배치하기 위한 스타일
  justify-content: center; // 가로 방향으로 중앙 정렬
  align-items: center; // 세로 방향으로 중앙 정렬
  background: none;
  border-radius: 50%; // 버튼을 원형으로 만들기 위한 스타일
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  background-color: #94a0ac;

  &:hover {
    color: red;
  }
`;

const SearchBarButton = styled.button`
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
