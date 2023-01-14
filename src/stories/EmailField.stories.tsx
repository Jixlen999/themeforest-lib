import React from 'react';
import { ComponentStory } from '@storybook/react';

import { EmailField } from '@components/EmailField';

export default {
  title: 'EmailField',
  component: EmailField,
};

const Template: ComponentStory<typeof EmailField> = () => <EmailField />;

export const Basic = Template.bind({});
