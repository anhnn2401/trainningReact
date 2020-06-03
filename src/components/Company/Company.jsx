import React, { Component } from 'react';
// import { CompanyProgresss } from '../__mock__/Data';
import { TabProgress } from './Tabs'
import 'react-tabs/style/react-tabs.css';

class Company extends Component {
  
    render() {
        return (
          <div className='about-company row' id="about">
            <div className="col-lg-6 col-sm-12">
              <img src={ require('../../assets/images/devices.png') } alt="progress" className="image-company wow fadeInLeft" data-wow-delay="0.5s" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h3 className="title-feature wow fadeInRight" data-wow-duration="5s">About Our Company</h3>
              <div className="wow fadeInRight" data-wow-delay="0.5s"> 
                <div className="tab-content" id="nav-tabContent">
                  <TabProgress />
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Company;
