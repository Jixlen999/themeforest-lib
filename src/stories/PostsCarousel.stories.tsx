import React from 'react';
import { ComponentStory } from '@storybook/react';

import posts from '@constants/postsCards';
import { PostsCarousel } from '@components/PostsCarousel';

export default {
  title: 'PostsCarousel',
  component: PostsCarousel,
  argTypes: {},
  args: {
    posts,
  },
};

const Template: ComponentStory<typeof PostsCarousel> = (args) => <PostsCarousel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Testimonials',
};
