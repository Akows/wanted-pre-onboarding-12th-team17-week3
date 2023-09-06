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
    logCacheExpiry(key);
    localStorage.removeItem(key);
    return null;
  }

  // 만료되지 않았다면, 아이템의 value 값을 반환합니다.
  return item.value;
};

// 로깅 함수들
const logCacheSave = (key: string) => {
  console.log(`키 ${key}로 데이터를 캐시에 저장합니다.`);
};

const logCacheFetch = (key: string, found: boolean) => {
  if (found) {
    console.log(`키 ${key}에 대한 데이터를 캐시에서 가져옵니다.`);
  } else {
    console.log(`키 ${key}에 대한 데이터가 캐시에 없습니다.`);
  }
};

const logCacheExpiry = (key: string) => {
  console.log(`키 ${key}에 대한 데이터가 만료되었습니다.`);
};

// 캐싱 관련 로직을 커스텀 훅에서 분리.
// 아래 두 함수는 결국 단순히 캐싱 함수들을 감싸고 있는 역할만 수행한다.
// 이건 그냥 의미가 없는 분리라고만 보이지만 다음과 같은 상황에서 유용한 방법이 될 수 있다.

// 나중에 캐싱 매커니즘이 변경되었을 때 커스텀 훅에서는 아무 변화를 줄 필요없이 캐싱 함수들만 수정할 수 있다.
// 캐싱 관련된 기능들이 추가되었을 때, 아래 함수들에서 코드를 추가해주기만 하고 커스텀 훅에는 아무 변화를 줄 필요가 없다.

// 또한 아래 함수들의 명칭을 통해 캐싱 관련 로직들의 목적을 더 명확하게 보이게 할 수 있다.
// 이건 캐싱 함수에서 직접 수행할 수도 있지만, 아래 함수들을 사용해야하는 다른 이유들이 있으므로 어차피 사용할 때 여기서 명시성까지 챙겨주면 좋다.

// 사실 이런 함수들은 사용하지 않아도 그만이다. 사용자의 취향을 따르기만 하면 된다.
// 코드 추상화, 재사용성, 확장성, 명시성 등의 특징 모두 캐싱 함수에서 직접 수행할 수 있기 때문.
// 만약 캐싱 관련 기능들이 여럿으로 나뉘고 이들을 각각의 함수로 나누어야 한다면 이런 상황에서는 아래 함수같은 사용법이 좋은 방법이 될 수 있다.
export const fetchDataFromCache = (query: string) => {
  const data = getCachedData(query);
  if (data !== null) {
    logCacheFetch(query, true);
  } else {
    logCacheFetch(query, false);
  }
  return data;
};

export const saveDataToCache = (
  query: string,
  data: any,
  duration?: number,
) => {
  setCachedData(query, data, duration);
  logCacheSave(query);
};
