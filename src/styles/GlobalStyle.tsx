import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* 항상 스크롤바가 보이도록 설정 */
  html {
    overflow-y: scroll;
  }

  /* 스크롤바 스타일 설정 */
  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* 스크롤바 핸들 색상 */
    border-radius: 4px; /* 스크롤바 핸들 모서리 둥글게 */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 스크롤바 핸들 마우스 오버 시 색상 */
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* 스크롤바 배경 색상 */
  }
`;

export default GlobalStyles;
