/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

const useScroll = (type: string) => {
  let carousel: Element | null = null;
  let scrollItem: Element | null = null;
  useEffect(() => {
    if (type === 'cardsCarousel') {
      carousel = document.querySelector('.cardsCarousel');
      scrollItem = document.querySelector('.card');
    }
    if (type === 'postsCarousel') {
      carousel = document.querySelector('.postsCarousel');
      scrollItem = document.querySelector('.post');
    }
  }, []);

  const leftClickHandler = () => {
    const padding = 30;
    carousel!.scrollLeft -= scrollItem!.clientWidth + padding;
  };

  const rightClickHandler = () => {
    const padding = 30;
    carousel!.scrollLeft += scrollItem!.clientWidth + padding;
  };

  return { leftClickHandler, rightClickHandler };
};

export default useScroll;
