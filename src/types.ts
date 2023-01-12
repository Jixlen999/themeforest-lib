import { ReactNode } from "react";

export interface IRoundContainer {
  width: number;
  height: number;
  disabled: boolean;
}

export interface IRoundButton {
  width: number;
  height: number;
  disabled: boolean;
}

export interface IRoundButtonText {
  fontSize?: number;
  fontWeight?: number;
}

export interface IButton {
  width: number;
  height: number;
  icon: ReactNode;
  disabled: boolean;
}

export interface IButtonText {
  fontSize?: number;
  fontWeight?: number;
}

interface ICommonButtonProps {
  disabled: boolean;
  onClick: () => {};
  fontSize: number;
  fontWeight: number;
}

export interface IButtonProps extends ICommonButtonProps {
  width: number;
  height: number;
  text: string;
  icon?: JSX.Element;
}

export interface IRoundButtonProps extends ICommonButtonProps {
  size: number;
  text: string;
}
