import React from 'react';
// import { tabData } from '../__mock__/Data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const TabProgress = () => (
  <Tabs className="tab-content">
    <TabList className="nav">
      <Tab className="nav-item">
        our history
      </Tab>
      <Tab className="nav-item">
        our biography
      </Tab>
      <Tab className="nav-item">
        our skills
      </Tab> 
    </TabList>
    <TabPanel>
      <div className="tab-pane">
        <p className="interface-history progress">user interface</p>
        <p className="web-design-history progress">web design</p>
        <p className="wordpress-history progress">wordpress</p>
        <p className="html-history progress">html & css</p>
        <p className="app-design-history progress">app design</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab-pane">
        <p className="interface-biog progress">user interface</p>
        <p className="web-design-biog progress">web design</p>
        <p className="wordpress-biog progress">wordpress</p>
        <p className="html-biog progress">html & css</p>
        <p className="app-design-biog progress">app design</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="tab-pane">
        <p className="interface-skill progress">user interface</p>
        <p className="web-design-skill progress">web design</p>
        <p className="wordpress-skill progress">wordpress</p>
        <p className="html-skill progress">html & css</p>
        <p className="app-design-skill progress">app design</p>
      </div>
    </TabPanel>
  </Tabs>
);

