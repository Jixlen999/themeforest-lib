import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
`;

export const TitleAndControls = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margin[50]}px;
  padding-left: ${({ theme }) => theme.padding[10]}px;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[38]}px;
  line-height: ${({ theme }) => theme.lineHeight[56]}px;
`;
export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.height[60]}px;
  gap: ${({ theme }) => theme.gap[15]}px;
`;

export const ControlButton = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius[20]}px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: ${({ theme }) => `scale(${theme.scale.xs})`};
  }
  svg {
    width: inherit;
    font-size: ${({ theme }) => theme.fontSize[25]}px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Posts = styled.div`
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: ${({ theme }) => theme.gap[30]}px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ theme }) => theme.width[350]}px;
  background-color: ${({ theme }) => theme.colors.white};
  flex-basis: ${({ theme }) => theme.flexBasis[25]}%;
  flex-shrink: 0;
`;
export const PostImage = styled.img`
  width: ${({ theme }) => theme.width[350]}px;
  min-height: ${({ theme }) => theme.height[200]}px;
  border-radius: ${({ theme }) => theme.borderRadius[6]};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.margin[20]}px;
`;
export const PostTitle = styled.div`
  width: inherit;
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize[22]}px;
  line-height: ${({ theme }) => theme.lineHeight[33]}px;
  text-align: start;
  margin-bottom: ${({ theme }) => theme.margin[12]}px;
`;
export const PostDate = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  margin-bottom: ${({ theme }) => theme.margin[12]}px;
  color: ${({ theme }) => theme.colors.grey};
`;
export const PostText = styled.div`
  width: inherit;
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[28]}px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.margin[12]}px;
`;

export const ControlButtonRight = styled.div`
  width: ${({ theme }) => theme.width[110]}px;
  height: inherit;
`;
export const ControlButtonLeft = styled.div`
  width: ${({ theme }) => theme.width[110]}px;
  height: inherit;
`;

export const ReadMoreLink = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  gap: ${({ theme }) => theme.gap[5]}px;
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
