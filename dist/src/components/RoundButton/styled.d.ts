interface IRoundContainer {
    width: number;
    height: number;
    disabled: boolean;
}
interface IRoundButton {
    width: number;
    height: number;
    disabled: boolean;
}
interface IRoundButtonText {
    fontSize?: number;
    fontWeight?: number;
}
export declare const ButtonWrapper: import("styled-components").StyledComponent<"div", any, IRoundButton, never>;
export declare const ButtonText: import("styled-components").StyledComponent<"p", any, IRoundButtonText, never>;
export declare const ButtonContainer: import("styled-components").StyledComponent<"div", any, IRoundContainer, never>;
export {};
