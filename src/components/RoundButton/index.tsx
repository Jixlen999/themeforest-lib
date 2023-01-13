import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../../theme";
import { IRoundButtonProps } from "../../types";

import { ButtonWrapper, ButtonText, ButtonContainer } from "./styled";

export const RoundButton = ({
  size = 200,
  text = "Button text",
  disabled = false,
  onClick,
  ...rest
}: IRoundButtonProps) => {
  const { fontSize, fontWeight } = rest;
  const fifteenPercent = 0.15;

  return (
    <ThemeProvider theme={theme}>
      <ButtonContainer width={size} height={size} disabled={disabled}>
        <ButtonWrapper
          width={size - size * fifteenPercent}
          height={size - size * fifteenPercent}
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
