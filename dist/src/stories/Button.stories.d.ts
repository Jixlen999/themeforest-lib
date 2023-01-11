/// <reference types="react" />
import { ComponentStory } from "@storybook/react";
declare const _default: {
    title: string;
    component: ({ state, width, height, text, onClick, }: import("../components/Button").IButtonProps) => JSX.Element;
    argTypes: {
        state: {
            control: string;
            options: string[];
        };
    };
    args: {
        text: string;
        width: number;
        height: number;
        state: string;
    };
};
export default _default;
export declare const Default: ComponentStory<({ state, width, height, text, onClick, }: import("../components/Button").IButtonProps) => JSX.Element>;
