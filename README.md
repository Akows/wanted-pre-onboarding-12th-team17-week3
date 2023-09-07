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
사용자가 검색 키워드를 입력하면, 이 키워드는 API 호출의 파라미터로 사용됩니다.

1. 로컬 스토리지 캐싱 확인:

입력된 키워드는 우선 로컬 스토리지에서의 key로 사용됩니다. 이를 통해 해당 키워드에 대한 캐싱된 데이터가 있는지 먼저 확인합니다.
저장된 캐싱 데이터가 있다면, 캐싱의 유효 기간을 체크합니다. 유효 기간이 경과한 데이터는 로컬 스토리지에서 삭제하며, 그렇지 않은 경우 저장된 데이터를 바로 반환합니다.

2. API 호출:

로컬 스토리지에 캐싱된 데이터가 없거나, 캐싱 데이터의 유효기간이 만료되어 삭제된 경우, API를 호출하여 신규 데이터를 요청합니다.

3.로컬 스토리지에 데이터 저장:

API 호출을 통해 받아온 데이터는 키워드를 key값으로 하여 로컬 스토리지에 저장됩니다. 이 때, 데이터와 함께 현재 시간 기반의 유효기간도 설정되어 저장됩니다.

4. 데이터 사용:

캐싱된 데이터나 새로 호출된 데이터는 커스텀 훅을 통해 컴포넌트에서 사용될 수 있도록 export됩니다.
</details>

#### [Assignment 3] API 호출 최적화

<details>
<summary>구현 방법</summary>

## 기본 구조
로컬 캐싱은 API 호출 최적화의 방법 중 하나이지만, 사용자의 지속적인 입력으로 인한 빈번한 API 호출을 줄이기 위한 추가 전략이 필요합니다. 이때 활용할 수 있는 기술이 'debounce'입니다. debounce는 사용자의 연속적인 입력 도중에 API 호출을 지연시켜 불필요한 호출을 최소화하는 방법입니다.

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
debounce 함수는 주어진 함수(fn)를 일정 시간(delay) 동안 지연시킨 후 호출합니다. timerId는 설정된 지연 시간 동안의 타이머를 관리하며, 만약 새로운 입력이 있을 경우 이전 타이머는 clearTimeout를 통해 취소됩니다. 이로 인해 사용자가 입력을 중지할 때까지 실제 함수 호출이 지연되며, 최종적인 입력 후에만 함수가 실행됩니다.

</details>



#### [Assignment 4] 키보드 접근성

<details>
<summary>구현 방법</summary>

## 기본 구조
키보드 이벤트를 활용하여, 사용자의 키 입력에 따라 특정 UI 동작을 제어하는 것은 사용자 경험(UX)을 향상시키는 중요한 방법 중 하나입니다. 본 예제에서는 KeyboardEvent를 활용하여 사용자가 특정 키를 입력했을 때 리스트 내의 항목 선택 동작을 구현하겠습니다.

## 동작 방식
먼저, 사용자가 선택한 항목의 인덱스를 추적하기 위한 상태 변수 selectedIndex를 정의합니다.

```
const [selectedIndex, setSelectedIndex] = useState(-1);
```
다음으로, handleKeyDown 함수를 통해 키보드의 아래쪽 및 위쪽 키 입력에 따른 동작을 정의합니다.

```
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
이 함수를 통해 아래쪽 및 위쪽 키를 누를 때마다, setSelectedIndex를 활용해 선택된 항목의 인덱스 값을 조절합니다.

선택된 항목의 인덱스는 자식 컴포넌트로 전달되어, 해당 항목에는 특정 배경색(#f3f3f3)이 적용됩니다. 다음은 해당 동작을 구현한 코드 예시입니다.

```
{data && data.length > 0 ? (
  data.map((item, index) => (
    <SearchItem
      key={item.sickCd}
      style={{
        backgroundColor: index === selectedIndex ? '#f3f3f3' : 'transparent',
      }} // 선택된 항목에 대한 배경색 적용
    >
  ))
) : null}
```
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
