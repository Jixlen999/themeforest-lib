import styled from "styled-components";
import { IRoundButton, IRoundButtonText, IRoundContainer } from "../../types";

export const ButtonWrapper = styled.div<IRoundButton>`
  box-sizing: border-box;
  padding: 0 5px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: transparent;
`;

export const ButtonText = styled.p<IRoundButtonText>`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? fontWeight : theme.fontWeight[700]};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  overflow: hidden;
`;

export const ButtonContainer = styled.div<IRoundContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 100%;
  background-color: ${({ theme, disabled }) => {
    if (disabled) return theme.colors.grey;
    return theme.colors.primary;
  }};
  cursor: ${({ disabled }) => {
    if (disabled) return "not-allowed";
    return "pointer";
  }};
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.hoverBlue};
  }
  &:active {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.primary};
  }
  border: ${({ width }) => width * 0.08}px solid
    ${({ theme }) => theme.colors.white};
`;
