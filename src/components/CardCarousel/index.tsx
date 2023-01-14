import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import theme from '@src/theme';
import { ICardCarouselProps } from '@src/types';
import useScroll from '@hooks/useScroll';

import {
  Card,
  CardComment,
  CardHeader,
  CardImage,
  CardName,
  CardNameAndPosition,
  CardPosition,
  Cards,
  ControlButton,
  ControlButtonLeft,
  ControlButtonRight,
  Controls,
  Title,
  TitleAndControls,
} from './styled';

export const CardCarousel = ({ title, cards }: ICardCarouselProps) => {
  const { leftClickHandler, rightClickHandler } = useScroll();

  return (
    <ThemeProvider theme={theme}>
      <TitleAndControls>
        <Title>{title}</Title>
        <Controls>
          <ControlButtonLeft onClick={leftClickHandler}>
            <ControlButton>
              <HiOutlineArrowNarrowLeft />
            </ControlButton>
          </ControlButtonLeft>
          <ControlButtonRight onClick={rightClickHandler}>
            <ControlButton>
              <HiOutlineArrowNarrowRight />
            </ControlButton>
          </ControlButtonRight>
        </Controls>
      </TitleAndControls>
      <Cards className="carousel">
        {cards.map((cardItem, index) => (
          <Card key={index} className="card">
            <CardHeader>
              <CardImage src={cardItem.image} />
              <CardNameAndPosition>
                <CardName>{cardItem.name}</CardName>
                <CardPosition>{cardItem.position}</CardPosition>
              </CardNameAndPosition>
            </CardHeader>
            <CardComment>{cardItem.comment}</CardComment>
          </Card>
        ))}
      </Cards>
    </ThemeProvider>
  );
};
