import React from 'react';

import Menu from '../components/Menu';
import Slider from './Slider';

const App = () => (
  <>
    <Menu ariaLabel="Main Navigation" />
    <Slider ariaLabel="Featured Photography" />
  </>
);

export default App;
