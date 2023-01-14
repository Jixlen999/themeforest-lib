import styled from 'styled-components';

import { IButton, IButtonText } from '@src/types';

export const ButtonWrapper = styled.div<IButton>`
  box-sizing: border-box;
  padding: 0 5px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ theme }) => theme.borderRadius[6]}px;
  background-color: ${({ theme, disabled }) => {
    if (disabled) return theme.colors.grey;
    return theme.colors.primary;
  }};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gap[10]}px;
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => {
    if (disabled) return 'not-allowed';
    return 'pointer';
  }};
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme, disabled }) => {
    if (disabled) return 'none';
    return theme.shadows.button;
  }};
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.hoverBlue};
  }
  &:active {
    box-shadow: ${({ disabled }) => !disabled && 'none'};
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.primary};
  }
`;

export const ButtonText = styled.p<IButtonText>`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme, fontWeight }) => fontWeight || theme.fontWeight[700]};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  overflow: hidden;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0;
    width: 24px;
    height: 24px;
  }
`;
