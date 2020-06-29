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
        <li data-filter="all"> All items </li>
        <li data-filter="1"> Category 1 </li>
        <li data-filter="2"> Category 2 </li>
        <li data-filter="3"> Category 3 </li>
        <li data-shuffle> Shuffle items </li>
        <li data-sortAsc> Ascending </li>
        <li data-sortDesc> Descending </li>
      </ul>
      <select data-sortOrder>
        <option value="index"> Position </option>
        <option value="sortData"> Custom Data </option>
      </select>
      <input type="text" name="filtr-search" value="" placeholder="Your search" data-search=""></input>
      </div>
    )
  }
}
