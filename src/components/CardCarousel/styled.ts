import styled from "styled-components";

export const TitleAndControls = styled.div`
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

export const Cards = styled.div`
  width: inherit;
  height: ${({ theme }) => theme.height[370]}px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0px;
  gap: ${({ theme }) => theme.gap[30]}px;
  padding: ${({ theme }) => theme.padding[10]}px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.padding[35]}px;
  gap: ${({ theme }) => theme.gap[25]}px;
  width: ${({ theme }) => theme.width[350]}px;
  box-shadow: ${({ theme }) => theme.shadows.card3};
  background-color: ${({ theme }) => theme.colors.white};
  flex-basis: ${({ theme }) => theme.flexBasis[25]}%;
  flex-shrink: 0;
`;
export const CardImage = styled.img`
  width: ${({ theme }) => theme.width[80]}px;
  height: ${({ theme }) => theme.height[80]}px;
  border-radius: ${({ theme }) => theme.borderRadius[100]}%;
  overflow: hidden;
`;
export const CardName = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
`;
export const CardPosition = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
`;
export const CardComment = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[28]}px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap[25]}px;
`;

export const CardNameAndPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ControlButtonRight = styled.div`
  width: ${({ theme }) => theme.width[110]}px;
  height: inherit;
`;
export const ControlButtonLeft = styled.div`
  width: ${({ theme }) => theme.width[110]}px;
  height: inherit;
`;
