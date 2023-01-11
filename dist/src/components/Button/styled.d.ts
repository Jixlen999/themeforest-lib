import { ReactNode } from "react";
interface IButton {
    width: number;
    height: number;
    icon: ReactNode;
    disabled: boolean;
}
interface IButtonText {
    fontSize?: number;
    fontWeight?: number;
}
export declare const ButtonWrapper: import("styled-components").StyledComponent<"div", any, IButton, never>;
export declare const ButtonText: import("styled-components").StyledComponent<"p", any, IButtonText, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
