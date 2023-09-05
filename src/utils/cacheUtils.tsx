// 데이터를 로컬 스토리지에 저장하는 함수
export const setCachedData = (
  key: string, // 저장할 때 사용할 키
  data: any, // 저장할 데이터
  duration: number = 3600, // 데이터가 유효한 시간 (기본값은 3600초, 즉 1시간)
) => {
  // 현재 시간을 밀리초 단위로 가져옵니다.
  const now = new Date().getTime();

  // 저장할 아이템을 생성합니다. 이 아이템은 value로 실제 데이터를, expiry로 만료 시간을 갖습니다.
  const item = {
    value: data,
    expiry: now + duration * 1000, // 만료 시간 = 현재 시간 + duration
  };

  // 아이템을 JSON 문자열로 변환하고 로컬 스토리지에 저장합니다.
  localStorage.setItem(key, JSON.stringify(item));
};

// 로컬 스토리지에서 데이터를 가져오는 함수
export const getCachedData = (key: string) => {
  // 로컬 스토리지에서 주어진 키에 해당하는 데이터를 문자열 형태로 가져옵니다.
  const itemStr = localStorage.getItem(key);

  // 해당 키에 데이터가 없으면 null을 반환합니다.
  if (!itemStr) {
    return null;
  }

  // 문자열 형태의 데이터를 다시 JSON 객체로 변환합니다.
  const item = JSON.parse(itemStr);

  // 현재 시간을 밀리초 단위로 가져옵니다.
  const now = new Date().getTime();

  // 아이템의 expiry 값이 현재 시간보다 작으면 (즉, 아이템이 만료되었으면)
  // 해당 아이템을 로컬 스토리지에서 제거하고 null을 반환합니다.
  if (now > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  // 만료되지 않았다면, 아이템의 value 값을 반환합니다.
  return item.value;
};
