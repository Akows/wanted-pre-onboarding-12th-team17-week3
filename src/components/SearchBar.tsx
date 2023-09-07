import React, { useState } from 'react';
import styled from 'styled-components';
import { SuggestionList } from './SuggestionList';
import useSearchAPI from '../hooks/useSearchAPI';
import ClearButton from './buttons/ClearButton';
import SearchBarButton from './buttons/SearchBarButton';
import LoadingModal from './modals/LoadingModal';
import ErrorModal from './modals/ErrorModal';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation';

export const SearchBar: React.FC = () => {
  // API 호출 기능.
  const {
    isLoading,
    isError,
    errorCode,
    errorMessage,
    data,
    search,
    clearData,
  } = useSearchAPI();

  // 검색어 키워드를 제어.
  const [searchTerm, setSearchTerm] = useState('');

  // 키보드 입력 기능 커스텀 훅
  const { selectedIndex, modalRef, itemRefs, handleKeyDown } =
    useKeyboardNavigation({ data, setSearchTerm, search });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    // 만약 검색어가 비어 있거나 띄어쓰기만 있다면 API 호출을 방지하고 초기화
    // 공백 문자만 존재하는 경우를 방지하려면 trim을 사용해야한다.
    // trim() : 문자열의 시작과 끝에서 공백 문자를 제거한 결과값을 반환.

    // value에 값이 없거나 공백문자만 존재한다 - 공백 문자를 제거하고 빈 문자열 ""을 반환.
    // value에 정상적인 값이 존재한다. - 값 앞 뒤에 공백 문자가 존재한다면 이를 제거하고 원래 문자열을 그대로 반환.
    // 따라서 value.trim()의 결과값을 조건식으로 사용한다. 결과값이 빈 문자열일 경우에는 검색 기능을 호출하지 않고 data를 비운다.
    if (value.trim() === '') {
      clearData();
      return;
    }

    // 검색어가 있으면 API 호출
    // 왜 searchTerm를 사용하지 않는가?
    // searchTerm는 useState로 선언되어 비동기식으로 동작하기 때문에 사용자의 입력을 실시간으로 받아오지 못하기 때문.
    if (value) {
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
    clearData();
  };

  // 추천 검색어 UI의 출력 여부를 제어하는 상태 변수.
  const [isFocused, setIsFocused] = useState(false);

  // if (true) {
  //   return <LoadingModal />;
  // }

  // if (true) {
  //   return (
  //     <ErrorModal
  //       errorCode="테스트용 에러코드"
  //       errorMessage="테스트용 에러 메시지"
  //     />
  //   );
  // }

  if (isLoading) {
    return <LoadingModal />;
  }

  if (isError) {
    return <ErrorModal errorCode={errorCode} errorMessage={errorMessage} />;
  }

  return (
    <>
      <SearchBarWrapper
        isFocused={isFocused}
        onKeyDown={handleKeyDown} // 키보드 이벤트 리스너 추가
      >
        {/* input 태그에 Focus 여부에 따라 isFocused 변수에 변화를 준다. */}
        <SearchBarInput
          placeholder="🔍 질환명을 입력해 주세요."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={searchTerm} // input의 value를 상태에 연결
          onChange={handleInputChange} // 검색어 변경 핸들러 연결
        />
        {isFocused && <ClearButton onClick={clearSearchTerm} />}
        <SearchBarButton />
      </SearchBarWrapper>

      {isFocused && (
        <SuggestionList
          data={data}
          searchTerm={searchTerm}
          selectedIndex={selectedIndex}
          modalRef={modalRef}
          itemRefs={itemRefs}
        />
      )}
    </>
  );
};

// isFocused 변수를 받아서 사용
const SearchBarWrapper = styled.div<{ isFocused: boolean }>`
  width: 70%;
  height: 70px;
  min-height: 70px; // 높이의 최소값 설정
  margin-top: 30px;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  background-color: white;

  // 여기에서 isFocused prop에 따라 테두리 스타일을 적용
  border: ${props => (props.isFocused ? '2px solid #007be9' : 'none')};

  @media (max-width: 600px) {
    width: 95%; // 너비를 100%로 설정
    border-radius: 0px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 0px;
  }
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
