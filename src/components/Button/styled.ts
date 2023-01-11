import styled from "styled-components";

interface IButton {
  state: "enabled" | "hovered" | "pressed" | "disabled";
  width: number;
  height: number;
}

export const ButtonWrapper = styled.div<IButton>`
  box-sizing: border-box;
  padding: 0 20px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ theme }) => theme.borderRadius[6]}px;
  background-color: ${({ theme, state }) => {
    if (state === "enabled") return theme.colors.primary;
    if (state === "disabled") return theme.colors.grey;
  }};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gap[10]}px;
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ state }) => state === "enabled" && "pointer"};
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.button};
  &:hover {
    background-color: ${({ theme, state }) =>
      state === "enabled" && theme.colors.hoverBlue};
  }
  &:active {
    box-shadow: ${({ state }) => state === "enabled" && "none"};
    background-color: ${({ theme, state }) =>
      state === "enabled" && theme.colors.primary};
  }
`;

export const ButtonText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  overflow: hidden;
`;
