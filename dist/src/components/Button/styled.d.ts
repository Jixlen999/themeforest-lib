interface IButton {
    state: "enabled" | "hovered" | "pressed" | "disabled";
    width: number;
    height: number;
}
export declare const ButtonWrapper: import("styled-components").StyledComponent<"div", any, IButton, never>;
export declare const ButtonText: import("styled-components").StyledComponent<"p", any, {}, never>;
export {};
