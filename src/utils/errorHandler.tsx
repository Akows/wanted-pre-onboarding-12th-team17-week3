export const handleError = (error: any) => {
  let errorMessage = '예기치 않은 오류가 발생했습니다.';
  let errorCode;

  if (error?.response) {
    errorCode = error?.response?.status;

    // 기본 오류 메시지를 덮어쓰기 전에 서버에서 반환된 에러 메시지를 체크
    errorMessage = error?.response?.data?.message || errorMessage;

    switch (errorCode) {
      case 400:
        errorMessage = '잘못된 요청입니다. 입력을 확인하고 다시 시도해주세요.';
        break;
      case 404:
        errorMessage = '입력한 쿼리에 해당하는 데이터를 찾을 수 없습니다.';
        break;
      case 500:
        errorMessage = '서버 오류입니다. 잠시 후 다시 시도해주세요.';
        break;
    }
  } else if (error.request) {
    errorMessage = '네트워크 오류입니다. 연결을 확인하고 다시 시도해주세요.';
  }

  return { errorCode, errorMessage };
};

// 에러 처리 로직을 분리했을 때 이점.
// 모듈화: 코드의 모듈화를 향상시켜 각 파일이나 함수가 특정 기능에 집중할 수 있게 합니다.
// 재사용성: 다른 곳에서 비슷한 에러 처리가 필요할 때 해당 유틸리티 함수를 가져와 사용할 수 있습니다.
// 유지보수: 에러 처리 로직의 변경이 필요할 경우, 한 곳에서만 수정하면 되므로 유지보수가 편리해집니다.
