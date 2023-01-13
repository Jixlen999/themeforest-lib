import React from "react";
import { ComponentStory } from "@storybook/react";

import { RoundButton } from "../components/RoundButton";

export default {
  title: "RoundButton",
  component: RoundButton,
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  args: {
    text: "Button text",
    size: 200,
  },
};

const Template: ComponentStory<typeof RoundButton> = (args) => (
  <RoundButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: "Learn more",
  size: 120,
  fontSize: 14,
  fontWeight: 600,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: "Learn more",
  size: 120,
  fontSize: 14,
  fontWeight: 600,
};
