import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import Accordion from '../src/js/containers/Accordion';
import AccordionItem from '../src/js/containers/Accordion/AccordionItem';

export default {
  title: 'Accordion',
  component: Accordion,
  decorators: [withKnobs, withA11y],
};

export const defaultView = () => (
    <Accordion defaultIndex={text('defaultIndex', '2')} onItemClick={action('clicked')}>
      <AccordionItem label="Accordion 1" index="1">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur voluptatem, dignissimos fuga culpa voluptatibus et aliquid
          tempore ullam repudiandae accusamus architecto libero molestias similique
          voluptas ipsam amet alias. Sapiente, reprehenderit!
        </p>
      </AccordionItem>
      <AccordionItem label="Accordion 2" index="2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque voluptates corrupti esse. Sunt quod quas expedita illo adipisci
          laudantium laboriosam, vero provident accusamus quidem magnam in, maxime
          eveniet explicabo cumque.
        </p>
      </AccordionItem>
      <AccordionItem label="Accordion 3" index="3">
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ut facilis suscipit molestiae perspiciatis dignissimos
          ipsum ipsam quam sequi minima tempore. Laboriosam dicta voluptate culpa saepe autem
          facere iure reiciendis nemo?
        </p>
      </AccordionItem>
    </Accordion>
);
