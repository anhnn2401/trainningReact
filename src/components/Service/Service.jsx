import React, { Component } from 'react';
import TabsService from './TabsService';

export default class Service extends Component {
  render() {
    return (
      <div className="service" id="service">
        <p className="title-feature wow fadeInLeft">Our Services</p>
        <TabsService />
      </div>

    )
  }
}
