import React from 'react';
import styled from 'styled-components';
import {
  ModalContent,
  ModalText,
  ModalWrapper,
} from '../../styles/modalStyles';
import { BiErrorAlt } from 'react-icons/bi';

type ModalProps = {
  errorCode: string;
  errorMessage: string;
};

const ErrorModal: React.FC<ModalProps> = ({ errorCode, errorMessage }) => (
  <ModalWrapper>
    <ModalContent>
      <BiErrorAlt size={120} />
      <ModalText>데이터를 받아오는 과정에서 에러가 발생하였습니다.</ModalText>
      <ErrorCode>에러 코드 : {errorCode}</ErrorCode>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <RefreshButton onClick={() => window.location.reload()}>
        새로고침
      </RefreshButton>
    </ModalContent>
  </ModalWrapper>
);

export default ErrorModal;

const ErrorCode = styled.p`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 0;
`;
const ErrorMessage = styled.p`
  font-size: 18px;
  font-weight: 800;
`;

const RefreshButton = styled.button`
  width: 90%;
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
