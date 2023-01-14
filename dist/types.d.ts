import { ReactNode } from 'react';
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
export interface IButton extends IRoundButton {
    icon: ReactNode;
}
export interface IButtonText {
    fontSize?: number;
    fontWeight?: number;
}
interface ICommonButtonsProps {
    disabled?: boolean;
    onClick: () => void;
    fontSize?: number;
    fontWeight?: number;
}
export interface IButtonProps extends ICommonButtonsProps {
    width: number;
    height: number;
    text: string;
    icon?: JSX.Element;
}
export interface IRoundButtonProps extends ICommonButtonsProps {
    size: number;
    text: string;
}
export interface ICard {
    name: string;
    image: string;
    position: string;
    comment: string;
}
export interface ICardCarouselProps {
    title: string | undefined;
    cards: Array<ICard>;
}
export {};
