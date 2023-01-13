import React from "react";
import { ComponentStory } from "@storybook/react";
import cards from "../constants/testimonailsCards";

import { CardCarousel } from "../components/CardCarousel";

export default {
  title: "CardCarousel",
  component: CardCarousel,
  argTypes: {},
  args: {
    cards: cards,
  },
};

const Template: ComponentStory<typeof CardCarousel> = (args) => (
  <CardCarousel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Testimonials",
};
