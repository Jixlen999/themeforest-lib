/// <reference types="react" />
export interface IRoundButtonProps {
    size: number;
    text: string;
    disabled: boolean;
    onClick: () => {};
    fontSize: number;
    fontWeight: number;
}
export declare const RoundButton: ({ size, text, disabled, onClick, ...rest }: IRoundButtonProps) => JSX.Element;
