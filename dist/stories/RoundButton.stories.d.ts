/// <reference types="react" />
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: ({ size, text, disabled, onClick, ...rest }: import("../types").IRoundButtonProps) => JSX.Element;
    argTypes: {
        disabled: {
            control: string;
        };
    };
    args: {
        text: string;
        size: number;
    };
};
export default _default;
export declare const Basic: ComponentStory<({ size, text, disabled, onClick, ...rest }: import("../types").IRoundButtonProps) => JSX.Element>;
export declare const Disabled: ComponentStory<({ size, text, disabled, onClick, ...rest }: import("../types").IRoundButtonProps) => JSX.Element>;
