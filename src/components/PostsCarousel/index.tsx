import React from 'react';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { ThemeProvider } from 'styled-components';

import useScroll from '@hooks/useScroll';
import theme from '@src/theme';
import { IPostsCarouselProps } from '@src/types';

import {
  TitleAndControls,
  Title,
  Controls,
  ControlButtonLeft,
  ControlButton,
  ControlButtonRight,
  ReadMoreLink,
  PostText,
  Post,
  PostDate,
  PostImage,
  Posts,
  PostTitle,
  Container,
} from './styled';

export const PostsCarousel = ({ title, posts }: IPostsCarouselProps) => {
  const { leftClickHandler, rightClickHandler } = useScroll('postsCarousel');

  return (
    <ThemeProvider theme={theme}>
      <Container>
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
        <Posts className="postsCarousel">
          {posts.map((postItem, index) => (
            <Post key={index} className="post">
              <PostImage src={postItem.image} />
              <PostDate>{postItem.date}</PostDate>
              <PostTitle>{postItem.title}</PostTitle>
              <PostText>{postItem.text}</PostText>
              <ReadMoreLink>
                <a href={postItem.readMoreLink}>Read more</a>
                <HiOutlineArrowNarrowRight />
              </ReadMoreLink>
            </Post>
          ))}
        </Posts>
      </Container>
    </ThemeProvider>
  );
};
