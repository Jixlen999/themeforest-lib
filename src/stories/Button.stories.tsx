import React from "react";
import { ComponentStory } from "@storybook/react";

import { Button } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    state: {
      control: "radio",
      options: ["enabled", "disabled"],
    },
  },
  args: {
    text: "Button text",
    width: 200,
    height: 60,
    state: "enabled",
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
