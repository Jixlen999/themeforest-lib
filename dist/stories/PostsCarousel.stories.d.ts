/// <reference types="react" />
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: ({ title, posts }: import("../types").IPostsCarouselProps) => JSX.Element;
    argTypes: {};
    args: {
        posts: {
            title: string;
            text: string;
            date: string;
            image: any;
            readMoreLink: string;
        }[];
    };
};
export default _default;
export declare const Basic: ComponentStory<({ title, posts }: import("../types").IPostsCarouselProps) => JSX.Element>;
