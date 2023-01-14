/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

const useScroll = () => {
  let carousel: Element | null = null;
  let card: Element | null = null;
  useEffect(() => {
    carousel = document.querySelector('.carousel');
    card = document.querySelector('.card');
  }, []);

  const leftClickHandler = () => {
    const padding = 30;
    carousel!.scrollLeft -= card!.clientWidth + padding;
  };

  const rightClickHandler = () => {
    const padding = 30;
    carousel!.scrollLeft += card!.clientWidth + padding;
  };

  return { leftClickHandler, rightClickHandler };
};

export default useScroll;
