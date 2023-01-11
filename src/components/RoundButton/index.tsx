import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../../../theme";

import { ButtonWrapper, ButtonText, ButtonContainer } from "./styled";

export interface IRoundButtonProps {
  size: number;
  text: string;
  disabled: boolean;
  onClick: () => {};
  fontSize: number;
  fontWeight: number;
}

export const RoundButton = ({
  size = 200,
  text = "Button text",
  disabled = false,
  onClick,
  ...rest
}: IRoundButtonProps) => {
  const { fontSize, fontWeight } = rest;

  return (
    <ThemeProvider theme={theme}>
      <ButtonContainer width={size} height={size} disabled={disabled}>
        <ButtonWrapper
          width={size - size * 0.15}
          height={size - size * 0.15}
          onClick={!disabled ? onClick : undefined}
          disabled={disabled}
        >
          <ButtonText
            fontSize={fontSize && fontSize}
            fontWeight={fontWeight && fontWeight}
          >
            {text}
          </ButtonText>
        </ButtonWrapper>
      </ButtonContainer>
    </ThemeProvider>
  );
};
