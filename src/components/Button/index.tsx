import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

import { ButtonWrapper, ButtonText } from "./styled";

export interface IButtonProps {
  state: "enabled" | "hovered" | "pressed" | "disabled";
  width: number;
  height: number;
  text: string;
  onClick?: () => {};
}

export const Button = ({
  state = "enabled",
  width = 200,
  height = 60,
  text = "Button text",
  onClick,
}: IButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper
        state={state}
        width={width}
        height={height}
        onClick={onClick}
      >
        <ButtonText> {text}</ButtonText>
      </ButtonWrapper>
    </ThemeProvider>
  );
};
