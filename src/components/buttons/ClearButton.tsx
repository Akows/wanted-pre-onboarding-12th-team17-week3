import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

interface ClearButtonProps {
  onClick: (event: React.MouseEvent) => void;
}

const StyledClearButton = styled.button`
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

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <StyledClearButton onMouseDown={onClick}>
      <AiOutlineClose size={20} color="white" />
    </StyledClearButton>
  );
};

export default ClearButton;
