import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { MyButton } from "../components/MyButton";

export default {
  title: "Example/MyButton",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton />;
export const Primary = Template.bind({});
