/// <reference types="react" />
export interface IButtonProps {
    state: "enabled" | "hovered" | "pressed" | "disabled";
    width: number;
    height: number;
    text: string;
    onClick: () => {};
}
export declare const Button: ({ state, width, height, text, onClick, }: IButtonProps) => JSX.Element;
