import React, { useLayoutEffect, useRef, useState } from 'react';
import { TabGroup, Tab, SlidingBar, TabPanel } from './styled';

type TabsProps = {
  tabs: {
    key: string,
    name: string
  }[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [isSelected, setIsSelected] = useState('surf');
  const refTab = useRef<HTMLButtonElement>(null);
  const [clientWidth, setClientWidth] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);

  // using useLayoutEffect to do DOM changes directly and because I'm using useRef
  useLayoutEffect(() => {
    const updatePosition = () => {
      // https://fettblog.eu/typescript-react/hooks/#useref
      if (refTab && refTab.current) {
        setClientWidth(refTab.current.clientWidth);
        setOffsetLeft(refTab.current.offsetLeft);
      }
    }

    window.addEventListener('resize', updatePosition);
    updatePosition()

    return () => {
      window.removeEventListener('resize', updatePosition)
    };
  })

  return (
    <div className="tabs">
      <TabGroup role="tablist" aria-orientation="horizontal">
        {
          tabs.map((tab) => (
            <Tab
              key={tab.key}
              type="button"
              ref={isSelected === tab.key ? refTab : null}
              active={isSelected === tab.key}
              onClick={() => setIsSelected(tab.key)}
              role="tab"
              aria-selected={isSelected === tab.key ? 'true' : 'false'}
              id={`${tab.key}-tab`}
              aria-controls={`${tab.key}-content-panel`}>
              {tab.name}
            </Tab>
          ))
        }
        <SlidingBar style={{
          left: offsetLeft,
          width: clientWidth
        }} />
      </TabGroup>
      {
        tabs.map((tab) => {
          return (
            <TabPanel
              key={tab.key}
              isSelected={isSelected === tab.key}
              id={`${tab.key}-content-panel`}
              role="tabpanel"
              aria-labelledby={`${tab.key}-tab`}>
                <h2>{tab.name} Section</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </TabPanel>
          )
        })
      }
    </div>
  )
};

export default Tabs;


