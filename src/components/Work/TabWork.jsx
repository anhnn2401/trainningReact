import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Filterizr from 'filterizr';
export default class TabWork extends Component {
  render() {
    return (
      <div>
      <div class="filter-container">
        <div class="filtr-item" data-category="1" data-sort="value">
          <img src="img/sample1.jpg" alt="sample" />
        </div>
        <div class="filtr-item" data-category="2, 1" data-sort="value">
          <img src="img/sample2.jpg" alt="sample" />
        </div>
        <div class="filtr-item" data-category="1, 3" data-sort="value">
          <img src="img/sample3.jpg" alt="sample" />
        </div>
      </div>
      <ul>
 {/* For filtering controls add */}
        <li data-filter="all"> All items </li>
        <li data-filter="1"> Category 1 </li>
        <li data-filter="2"> Category 2 </li>
        <li data-filter="3"> Category 3 </li>
        {/* <!-- For a shuffle control add --> */}
        <li data-shuffle> Shuffle items </li>
        {/* <!-- For sorting controls add --> */}
        <li data-sortAsc> Ascending </li>
        <li data-sortDesc> Descending </li>
      </ul>
      {/* // <!-- To choose the value by which you want to sort add --> */}
      <select data-sortOrder>
        <option value="index"> Position </option>
        <option value="sortData"> Custom Data </option>
      </select>
      {/* // <!-- To create a search control --> */}
      <input type="text" name="filtr-search" value="" placeholder="Your search" data-search=""></input>
      </div>
    )
  }
}

// export const TabWork = () => (
//   <Tabs>
//     <TabList>
//       <Tab>All</Tab>
//       <Tab>Graphic Design</Tab>
//       <Tab>Web Design</Tab> 
//       <Tab>Landing Pages</Tab> 
//       <Tab>Wordpress</Tab> 
//     </TabList>

//     <TabPanel>
//     <div class="filtr-item col-sm-3" data-category="@@data">
//       <img src={require('../../assets/images/team-1.jpg')} alt="image1" class="image-work"/>
//     </div>
//     </TabPanel>
//     <TabPanel>
//     <div className="tab-pane">
//         <p className="interface-biog progress">user interface</p>
//         <p className="web-design-biog progress">web design</p>
//         <p className="wordpress-biog progress">wordpress</p>
//         <p className="html-biog progress">html & css</p>
//         <p className="app-design-biog progress">app design</p>
//       </div>
//     </TabPanel>
//     <TabPanel>
//     <div className="tab-pane">
//         <p className="interface-skill progress">user interface</p>
//         <p className="web-design-skill progress">web design</p>
//         <p className="wordpress-skill progress">wordpress</p>
//         <p className="html-skill progress">html & css</p>
//         <p className="app-design-skill progress">app design</p>
//       </div>
//     </TabPanel>
    
//   </Tabs>
// )
