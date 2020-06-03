import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export const TabContent = () => (
  
  <Tabs>
    <TabList className="nav-service container">
        <Tab >web design</Tab>
        <Tab>graphic design</Tab>
        <Tab>online support</Tab>
        <Tab>app design</Tab>
        <Tab>online marketing</Tab>
        <Tab>seo service</Tab>
    </TabList>
    <TabPanel>
      <div className="tab-content container">
        <div className="tab-pane fade show active">
          <img src={require('../../assets/images/img-1.jpg')} alt="anh1" className="img-service wow fadeInRight"/>
          <p className="wow fadeInRight" data-wow-delay="0.4s">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content container">
        <div className="tab-pane fade show active">
          <img src={require('../../assets/images/img-2.jpg')} alt="anh1" className="img-service wow fadeInRight"/>
          <p className="wow fadeInRight" data-wow-delay="0.4s">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content container">
        <div className="tab-pane fade show active">
          <img src={require('../../assets/images/img-3.jpg')} alt="anh1" className="img-service wow fadeInRight"/>
          <p className="wow fadeInRight" data-wow-delay="0.4s">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content container">
        <div className="tab-pane fade show active">
          <img src={require('../../assets/images/img-4.jpg')} alt="anh1" className="img-service wow fadeInRight"/>
          <p className="wow fadeInRight" data-wow-delay="0.4s">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content container">
        <div className="tab-pane fade show active">
          <img src={require('../../assets/images/img-6.jpg')} alt="anh1" className="img-service wow fadeInRight"/>
          <p className="wow fadeInRight" data-wow-delay="0.4s">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content container">
        <div className="tab-pane fade show active">
          <img src={require('../../assets/images/img-6.jpg')} alt="anh1" className="img-service wow fadeInRight"/>
          <p className="wow fadeInRight" data-wow-delay="0.4s">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </TabPanel>
  </Tabs>
);