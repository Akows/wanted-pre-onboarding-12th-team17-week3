import React from 'react';
import styled from 'styled-components';
import {
  ModalContent,
  ModalText,
  ModalWrapper,
} from '../../styles/modalStyles';

const LoadingModal: React.FC = () => (
  <ModalWrapper>
    <ModalContent>
      <Spinner /> {/* 로딩 스피너 추가 */}
      <ModalText>데이터를 불러오는 중입니다...</ModalText>
    </ModalContent>
  </ModalWrapper>
);

export default LoadingModal;

// 로딩 스피너 스타일
// 완전한 구체 영역을 구현하고 옅은 회색 경계선을 영역 전체로.
// 그리고 top 부분에만 짙은 검정 경계선을 덧씌운다.
// 그리고 spin 효과를 주게 되면, border와 border-top 모두 360도 회전하지만..
// border는 360도 전체 경계선이 적용되어 회전하는 것처럼 보이지 않는다.
// 따라서 마치 border-top만 회전하는 것 처럼 보인다.
const Spinner = styled.div`
  margin: 20px auto;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid black;
  width: 150px;
  height: 150px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
