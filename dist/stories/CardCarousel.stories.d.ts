/// <reference types="react" />
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: ({ title, cards }: import("../types").ICardCarouselProps) => JSX.Element;
    argTypes: {};
    args: {
        cards: {
            name: string;
            position: string;
            image: any;
            comment: string;
        }[];
    };
};
export default _default;
export declare const Basic: ComponentStory<({ title, cards }: import("../types").ICardCarouselProps) => JSX.Element>;
