import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../../../theme";

import { ButtonWrapper, ButtonText, Icon } from "./styled";

export interface IButtonProps {
  width: number;
  height: number;
  text: string;
  icon?: JSX.Element;
  disabled: boolean;
  onClick: () => {};
  fontSize: number;
  fontWeight: number;
}

export const Button = ({
  width = 200,
  height = 60,
  text = "Button text",
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
        icon={icon ? icon : null}
      >
        {icon && <Icon>{icon}</Icon>}
        <ButtonText
          fontSize={fontSize && fontSize}
          fontWeight={fontWeight && fontWeight}
        >
          {text}
        </ButtonText>
      </ButtonWrapper>
    </ThemeProvider>
  );
};
