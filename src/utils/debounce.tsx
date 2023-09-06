export function debounce(fn: (...args: any[]) => void, delay: number) {
  let timerId: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    // 새로운 요청이 들어왔는데, timerId에 setTimeout()이 걸려있다.
    // 그렇다면 새로운 setTimeout()를 만들기 위해 기존 setTimeout()를 clear 한다.
    if (timerId) {
      clearTimeout(timerId);
    }

    // 사용자가 추가로 함수를 호출하지 않을 경우에는 아래 함수가 구문이 실행된다.
    // 인자로 받아온 함수를 실행하고, 메모리 관리를 위해 timerId을 null로 초기화 한다.
    // 목적을 달성했는데, 함수를 또 호출해서는 안되기 때문. (동일한 검색이 2번 이상 중복되면 안된다.)
    timerId = setTimeout(() => {
      fn(...args);
      // 함수가 호출되었으니 setTimeout()은 쓰임새를 다했고, 메모리에서 사라져야한다.
      // 원래대로면 clearTimeout()를 사용하는게 맞지만, 여기서 clearTimeout()를 사용하게 되면..
      // setTimeout()의 콜백 함수가 이미 실행되었기 때문에 아무 동작도 할 수가 없다.

      // 따라서 그냥 setTimeout()의 ID 참조를 없애버리면..
      // 쓰임새도 다하고 어디에서도 참조하고 있지 않은 setTimeout()은 가비지 컬렉터의 청소 대상이 되어 알아서 제거되도록 하는 것이다.
      timerId = null;
    }, delay);
  };
}

// clearTimeout(timerId);과 timerId = null;의 차이점.
// clearTimeout()는 setTimeout()의 ID를 참조하여 setTimeout()의 동작을 취소해버린다.
// timerId = null;은 단지 setTimeout()의 참조된 ID를 제거하는 것 뿐이다.
// 참조가 사라지면 참조를 잃은 setTimeout()는 가비지 컬렉터의 청소 대상이 되어 알아서 사라지게 된다.

// 사용자가 '코로나'라는 단어를 입력할 경우에..
// 매 입력마다 API 호출이 이루어진다.

// 예를 들어..

// ㅋ ㅗ ㄹ ㅗ ㄴ ㅏ

// 6회의 API 호출이 발생 : 비효율적.

// 그렇다면 어떻게 해야하는가?

// 1. API를 호출할 때, 시간 지연이 발생하도록 한다.

// 2. 지연된 시간이 끝나기 전에 새로운 요청이 들어오면 (사용자가 입력을 계속하면), 기존에 존재하는 시간지연 API 호출을 취소한다.

// 3. 지연된 시간이 끝나기 전까지 새로운 요청이 들어오지 않으면 (사용자가 입력을 멈추면), 기존에 존재하는 시간 지연 API 호출이 실행된다.
