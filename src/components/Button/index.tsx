import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@src/theme';
import { IButtonProps } from '@src/types';

import { ButtonWrapper, ButtonText, Icon } from './styled';

export const Button = ({
  width = 200,
  height = 60,
  text = 'Button text',
  disabled = false,
  onClick,
  ...rest
}: IButtonProps) => {
  const { icon, fontSize, fontWeight } = rest;

  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper
        width={width}
        height={height}
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
        icon={icon || null}
      >
        {icon && <Icon>{icon}</Icon>}
        <ButtonText fontSize={fontSize && fontSize} fontWeight={fontWeight && fontWeight}>
          {text}
        </ButtonText>
      </ButtonWrapper>
    </ThemeProvider>
  );
};
