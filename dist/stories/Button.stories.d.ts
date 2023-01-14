/// <reference types="react" />
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: ({ width, height, text, disabled, onClick, ...rest }: import("../types").IButtonProps) => JSX.Element;
    argTypes: {
        disabled: {
            control: string;
        };
        icon: {
            control: string;
        };
    };
    args: {
        text: string;
        width: number;
        height: number;
    };
};
export default _default;
export declare const Basic: ComponentStory<({ width, height, text, disabled, onClick, ...rest }: import("../types").IButtonProps) => JSX.Element>;
export declare const Disabled: ComponentStory<({ width, height, text, disabled, onClick, ...rest }: import("../types").IButtonProps) => JSX.Element>;
export declare const WithIconAndSizesConfigure: ComponentStory<({ width, height, text, disabled, onClick, ...rest }: import("../types").IButtonProps) => JSX.Element>;
