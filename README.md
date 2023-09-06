# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 3주 차 과제 (개인)

## 👥 Member Info

### 이유승

## 💪🏻과제의 소개와 진행 방법

원티드 프리온보딩 프론트엔드 - 3주차 과제 내용을 구현한 프로젝트. (개인)
출제된 과제의 범위, 요구 사항 등을 분석하여 제시된 개발 조건에 맞춰 기능을 구현.

### ✔️ 배포

- `Vercel` [🔗Link](https://wanted-pre-onboarding-12th-team17-week3.vercel.app/)

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

- 실행 방법 (2가지 중 택 1)
  > 1. 배포 링크를 통한 접속
  > 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행

```
$ npm i
$ npm run start
```

## 🛠️ 사용한 기술 스택

#### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development
![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

#### Convention
![Static Badge](https://img.shields.io/badge/ESLINT%20-%20%23942894?style=for-the-badge&logo=ESLINT)
![Static Badge](https://img.shields.io/badge/PRETTIER%20-%20%23AE5E1A?style=for-the-badge&logo=PRETTIER)

#### Network & Route
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black)
![Static Badge](https://img.shields.io/badge/REACT%20ROUTER%20-%20%23F4AAAA?style=for-the-badge&logo=REACT%20ROUTER)

## 🚀 요구사항

#### [Assignment 1] 검색창 및 검색어 추천 기능

<details>
<summary>주요 목표</summary>

- 질환명 검색시 API 호출로 검색어 추천 기능 구현.
- 검색어가 없을 때는 "검색어 없음"을 표시.
</details>

#### [Assignment 2] 로컬 캐싱 기능

<details>
<summary>주요 목표</summary>

- API 호출 결과를 로컬에서 캐싱.
- 캐싱 기능을 제공하는 라이브러리(예: React-Query) 사용을 금지.
- 캐싱 방법에 대한 설명을 README에 기술.
- expire time을 구현하면 추가 점수를 받게 됨.
</details>

#### [Assignment 3] API 호출 최적화

<details>
<summary>주요 목표</summary>

- 입력마다 API를 호출하지 않아야 함.
- API 호출 횟수를 줄이기 위한 전략을 수립하고 실행.
- 해당 전략에 대한 설명을 README에 기술.
- API 호출 시 **`console.info("calling api")`** 출력을 통해 API 호출을 콘솔에서 확인 가능.
</details>

#### [Assignment 4] 키보드 접근성

<details>
<summary>주요 목표</summary>

- 키보드만을 사용하여 추천 검색어로 이동 가능.
</details>

## ✨ Assignments별 구현 방식

#### 과제 소개 [🔗Link](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3)

#### [Assignment 1] 검색창 및 검색어 추천 기능

<details>
<summary>구현 방법</summary>

## 기본 구조
API 호출을 기능을 수행하는 Custom Hooks를 구현. API 호출을 수행하고 에러 및 로딩 상태 변수는 Context에서 관리.

## 동작 방식
검색어 입력 컴포넌트에서 Custom Hooks에서 export 하고 있는 변수와 함수를 가져와서 호출.
사용자가 검색창에 키워드를 입력하면, 키워드를 인자로 API 호출 기능을 실행.
검색어 입력 컴포넌트로 결과값이 반환되어오면 검색 결과 출력 컴포넌트로 prop 전달.
검색 결과 출력 컴포넌트에서는 map 함수를 이용하여 결과를 출력한다.

## 부가 기능
### 사용자가 입력한 검색어를 취소하고 초기화하는 기능.
입력값이 초기화될 때 검색 결과값도 같이 초기화된다.

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/93e24981-af51-4212-8d92-2237ef15b42a)

여기서 검색창 우측 검색 버튼 옆에 X 버튼을 클릭하면..

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/c1bb681b-18be-4a02-89b7-04e09bf93299)

입력한 검색 키워드와 검색 결과 모두를 초기화한다.

### 사용자가 입력한 키워드와 검색 결과값에서 일치하는 부분을 강조하는 기능.
검색 결과와 입력 키워드를 비교하여 일치하는 index를 찾은 다음, 이를 기준으로 키워드 이전 / 이후를 구분. 키워드와 일치하는 부분에만 강조 스타일을 준다.

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/b3378322-ca85-406a-ae89-07f6b2e852b3)

</details>

#### [Assignment 2] 로컬 캐싱 기능

<details>
<summary>구현 방법</summary>

## 기본 구조
로컬 스토리지 기능을 활용한 로컬 캐싱 기능 구현.

## 동작 방식
반환되어 오는 검색 결과값을 검색 키워드를 key로, 데이터를 value로 로컬 스토리지에 저장한다.

사용자가 키워드를 입력하면 우선 로컬 스토리지에 해당 데이터가 저장되어있는지 확인하여, 동일한 데이터가 저장되어 있다면 API 호출을 하지 않고 해당 데이터를 가져와서 반환한다.

동일한 데이터가 없을 경우 API 호출을 실행하여 서버에서 데이터를 받아오는데, 이때 데이터는 로컬 스토리지에 저장해준다. 데이터를 저장할 때 캐싱 유효기간 구현을 위해 현재 시간 데이터를 가져와서 유효 기간을 설정하여 같이 저장한다.

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/126e2cfc-6c80-4e85-95b7-eef21285f67a)

이후 사용자가 다시 키워드를 검색할 경우 API를 호출하기 전에 로컬 스토리지에 캐싱 여부를 확인하는데, 이때 스토리지 내부에 일치하는 데이터가 있다 하더라도 유효기간이 경과하였다면 데이터를 삭제한다.
유효기간 경과로 데이터가 삭제되었을 경우, 해당 데이터가 스토리지에 캐싱되지 않은 것이라 간주하고 API 호출을 실행한다.

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/9e7d367f-af5c-472d-a687-b342fb012452)

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/192a1ca6-d92b-405c-8da5-3486e3d9a590)

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/a1bce477-c9fc-4ce8-8fef-b66eada52305)

스토리지에 캐싱되어있지 않은 데이터를 호출할 때는 위와 같이 API를 새롭게 호출하고 스토리지에 캐싱한다.
그리고 캐싱되어 있는 데이터를 불러오는 경우에는..

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/1bfe45c7-491b-4199-bb4f-2270f6f6fba3)

API 호출을 실행하지 않는 것을 알 수 있다.
</details>

#### [Assignment 3] API 호출 최적화

<details>
<summary>구현 방법</summary>

## 기본 구조
로컬 캐싱 기능이 API 호출 최적화 전략 중 하나이지만, 이 프로젝트의 경우 사용자가 검색어를 입력할 때마다 API를 호출하기 때문에 불필요한 호출이 이루어질 수 밖에 없다. 
이럴 때 사용할 수 있는 전략이 debounce. debounce는 사용자가 입력을 마친 다음 일정 시간이 지나고 나서 다음 기능이 동작하도록 시간 지연을 걸어준다.

## 동작 방식
```
export function debounce(fn: (...args: any[]) => void, delay: number) {
  let timerId: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}
```
debounce 함수는 API 호출 커스텀 훅의 데이터를 호출하는 함수와 함수의 실행 지연 시간을 인자로 받아 사용한다.

debounce 함수가 호출되었을 때 setTimeout으로 인해 데이터를 호출하는 함수가 호출되지만 일정 시간 뒤에 실행되도록 지연된다.
그런데 만약에 debounce 함수가 다시 호출될 경우 기존에 존재하던 setTimeout 함수를 취소하고 다시 실행하게 된다.

즉, 사용자가 입력하는 동안에는 setTimeout가 호출되었다가 사라지고, 다시 호출되고 사라지고를 반복하게 된다.
사용자가 입력을 마치고 추가 입력을 멈출 경우 setTimeout가 동작하여 데이터를 호출하는 함수가 실행되게 된다.

</details>



#### [Assignment 4] 키보드 접근성

<details>
<summary>구현 방법</summary>

## 기본 구조
KeyboardEvent를 사용하여 사용자가 특정 키를 입력했을 때 어떤 동작이 실행되도록 구현한다.

## 동작 방식
```
  // 선택된 항목의 인덱스를 추적하는 상태 변수
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        // 아래쪽 키를 눌렀을 때, 선택된 인덱스를 증가시킴
        setSelectedIndex(prevIndex => Math.min(prevIndex + 1, data.length - 1));
        break;
      case 'ArrowUp':
        // 위쪽 키를 눌렀을 때, 선택된 인덱스를 감소시킴
        setSelectedIndex(prevIndex => Math.max(prevIndex - 1, 0));
        break;
      default:
        break;
    }
  };
```

사용자가 키보드의 아래 혹은 위 키를 입력하게 되면 setSelectedIndex가 호출되어 selectedIndex의 값을 변화시킨다.
selectedIndex의 값은 자식 컴포넌트인 검색 결과 출력 컴포넌트로 props 전달되는데,

```
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <SearchItem
            key={item.sickCd}
            style={{
              backgroundColor:
                index === selectedIndex ? '#f3f3f3' : 'transparent',
            }} // 선택된 항목의 배경색 변경
          >
```

selectedIndex의 값과 map 함수로 렌더링되는 검색 결과 요소들의 index를 비교,
해당되는 요소에는 style 속성을 이용하여 배경색이 #f3f3f3으로 적용되고
해당되지 않는 요소들은 transparent 속성으로 배경색이 적용되지 않도록 구분하였다.

![image](https://github.com/Akows/wanted-pre-onboarding-12th-team17-week3/assets/54127322/be9a79fa-7da7-4c24-b54f-9f591dfc7a8a)


</details>


## 🔥 과제 진행 방법

- 깃 컨벤션, 브랜치 관리 전략, 코드 구조 및 작성 규칙, 컴포넌트 명명 규칙 등의 팀 코딩 표준에 따라 혼자 진행.

### 코딩 컨벤션 [🔗Link](https://shorturl.at/dAO08)

## 🔥🔥 트러블 슈팅

#### 검색 키워드가 공백 문자일 경우, DB에서 모든 데이터를 반환하는 문제.

#### 로컬 서버에서 DB/백엔드를 배포하였을 때는 정상 배포되지만, vercel 배포시 배포되지 않는 문제.

## 🌲프로젝트 구조

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂buttons
 ┃ ┃ ┣ 📜ClearButton.tsx
 ┃ ┃ ┗ 📜SearchBarButton.tsx
 ┃ ┣ 📂modals
 ┃ ┃ ┣ 📜ErrorModal.tsx
 ┃ ┃ ┗ 📜LoadingModal.tsx
 ┃ ┣ 📜SearchBar.tsx
 ┃ ┗ 📜SuggestionList.tsx
 ┣ 📂constants
 ┣ 📂context
 ┃ ┗ 📜AppDataContext.tsx
 ┣ 📂database
 ┃ ┗ 📜db.json
 ┣ 📂hooks
 ┃ ┗ 📜useSearchAPI.tsx
 ┣ 📂pages
 ┃ ┗ 📜MainPage.tsx
 ┣ 📂router
 ┃ ┗ 📜AppRouter.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┗ 📜modalStyles.tsx
 ┣ 📂types
 ┃ ┗ 📜SearchResult.tsx
 ┣ 📂utils
 ┃ ┣ 📜cacheUtils.tsx
 ┃ ┗ 📜debounce.tsx
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```
