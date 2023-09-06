import React from 'react';
import styled from 'styled-components';
import { ModalContent, ModalWrapper } from '../../styles/modalStyles';

const RefreshButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const ErrorModal: React.FC = () => (
  <ModalWrapper>
    <ModalContent>
      데이터를 받아오는 과정에서 에러가 발생하였습니다.
      <RefreshButton onClick={() => window.location.reload()}>
        새로고침
      </RefreshButton>
    </ModalContent>
  </ModalWrapper>
);

export default ErrorModal;
