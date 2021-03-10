import React, { useState } from 'react';
import { TabPanel } from './styled';

type TabsProps = {
  tabs: {
    key: string,
    name: string
  }[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [isSelected, setIsSelected] = useState('surf');

  return (
    <div className="tabs">
      <div className="tablist" role="tablist" aria-orientation="horizontal">
        {
          tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setIsSelected(tab.key)}
              role="tab"
              aria-selected={isSelected === tab.key ? 'true' : 'false'}
              id={`${tab.key}-tab`}
              aria-controls={`${tab.key}-content-panel`}>
              {tab.name}
            </button>
          ))
        }
      </div>
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


