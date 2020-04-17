import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import Slider from '../src/js/containers/Slider';

export default {
  title: 'Slider',
  component: Slider,
  decorators: [withKnobs, withA11y],
};

export const Carousel = () => <Slider ariaLabel={text('aria-label', 'Featured Photography')} />;

export const Autoplay = () => <Slider ariaLabel={text('aria-label', 'Second Featured Photography')} autoplay={number('Autoplay Time', 3000)} />;

Autoplay.story = {
  name: 'with autoplay',
};
