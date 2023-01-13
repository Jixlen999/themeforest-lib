import React from "react";
import { ComponentStory } from "@storybook/react";
import { BsPlayCircle } from "react-icons/bs";

import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    icon: {
      control: "none",
    },
  },
  args: {
    text: "Button text",
    width: 200,
    height: 60,
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithIconAndSizesConfigure = Template.bind({});
WithIconAndSizesConfigure.args = {
  text: "Watch the demo",
  icon: <BsPlayCircle />,
  width: 168,
  height: 46,
  fontSize: 14,
  fontWeight: 600,
};
