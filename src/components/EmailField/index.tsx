import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../../theme";

import { EmailFieldWrapper, EmailInput, EmailButton } from "./styled";

export const EmailField = () => {
  return (
    <ThemeProvider theme={theme}>
      <EmailFieldWrapper>
        <EmailInput placeholder="Your email" />
        <EmailButton>Send</EmailButton>
      </EmailFieldWrapper>
    </ThemeProvider>
  );
};
