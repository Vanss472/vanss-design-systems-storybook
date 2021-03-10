import React from 'react';
import { ThemeProvider } from 'styled-components';
import Menu from '../components/Menu';
import Slider from './Slider';
import Accordion from './Accordion';
import AccordionItem from './Accordion/AccordionItem';
import { theme, GlobalStyle } from '../utils/constants';
import Tabs from '../components/Tabs';
import data from '../components/Tabs/data.json';

const App = () => (
  <>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Menu ariaLabel="Main Navigation" />
    <main>
    <Slider ariaLabel="Featured Photography" />
    <Accordion defaultIndex="0">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eaque voluptates corrupti esse. Sunt quod quas expedita illo adipisci
        laudantium laboriosam, vero provident accusamus quidem magnam in, maxime
        eveniet explicabo cumque.
        </p>
      </AccordionItem>
    </Accordion>
    <Tabs tabs={data.tabs} />
    </main>
  </ThemeProvider>
  </>
);

export default App;
