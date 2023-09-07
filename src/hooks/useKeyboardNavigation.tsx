// hooks/useKeyboardNavigation.ts

import { useState, useRef, RefObject } from 'react';

type DataItem = {
  sickNm: string;
  // 다른 필요한 필드들...
};

type UseKeyboardNavigationProps = {
  data: DataItem[];
  setSearchTerm: (term: string) => void;
  search: (term: string) => void;
};

type UseKeyboardNavigationReturn = {
  selectedIndex: number;
  modalRef: RefObject<HTMLDivElement>;
  itemRefs: RefObject<HTMLElement[]>;
  handleKeyDown: (event: React.KeyboardEvent) => void;
};

const useKeyboardNavigation = ({
  data,
  setSearchTerm,
  search,
}: UseKeyboardNavigationProps): UseKeyboardNavigationReturn => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const modalRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLElement[]>([]);

  // 키보드 입력 함수.
  const handleKeyDown = (event: React.KeyboardEvent) => {
    const container = modalRef.current;

    const adjustScroll = (index: number) => {
      const selectedItem = itemRefs.current[index];
      if (!container || !selectedItem) return;

      const topPos = selectedItem.offsetTop;
      const bottomPos = topPos + selectedItem.offsetHeight;

      // container의 현재 스크롤 상단 및 하단 위치를 구합니다.
      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.offsetHeight;

      // 선택된 아이템의 상단이 container의 상단보다 위에 있을 경우
      if (topPos < containerTop) {
        container.scrollTop = topPos;
      }
      // 선택된 아이템의 하단이 container의 하단보다 아래에 있을 경우
      else if (bottomPos > containerBottom) {
        container.scrollTop = bottomPos - container.offsetHeight;
      }
    };

    switch (event.key) {
      case 'ArrowDown':
        setSelectedIndex(prevIndex => {
          const nextIndex = Math.min(prevIndex + 1, data.length - 1);
          adjustScroll(nextIndex);
          return nextIndex;
        });
        break;

      case 'ArrowUp':
        setSelectedIndex(prev => {
          const prevIndex = Math.max(prev - 1, 0);
          adjustScroll(prevIndex);
          return prevIndex;
        });
        break;
      case 'Enter':
        // Enter키가 눌렸을 때
        // selectedIndex가 존재하고, 검색 결과 데이터가 제대로 존재하고, 검색 결과 데이터의 selectedIndex가 제대로 존재하는지 확인한다.
        // 선택된 항목이 있는지, 검색 결과 데이터가 제대로 존재하는지, 선택된 아이템이 결과 데이터에 진짜 있는지 확인한다.
        if (selectedIndex !== -1 && data && data[selectedIndex]) {
          // 검색 결과 데이터의 selectedIndex의 sickNm을 새로운 검색 키워드로 가져온다.
          const selectedKeyword = data[selectedIndex].sickNm;
          // 이를 이용해 API 호출을 실행하고, 화면상에서도 키워드를 변경해준다.
          setSearchTerm(selectedKeyword);
          search(selectedKeyword);
        }
        break;
      default:
        break;
    }
  };

  return {
    selectedIndex,
    modalRef,
    itemRefs,
    handleKeyDown,
  };
};

export default useKeyboardNavigation;
