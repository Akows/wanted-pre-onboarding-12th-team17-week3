import React from 'react';
import { ModalContent, ModalWrapper } from '../../styles/modalStyles';

const LoadingModal: React.FC = () => (
  <ModalWrapper>
    <ModalContent>데이터를 불러오는 중입니다..</ModalContent>
  </ModalWrapper>
);

export default LoadingModal;
