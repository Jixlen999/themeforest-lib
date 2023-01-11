/// <reference types="react" />
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
export declare const Button: ({ width, height, text, disabled, onClick, ...rest }: IButtonProps) => JSX.Element;
