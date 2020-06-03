import React, { Component } from 'react';
import {recentFooter} from '../__mock__/Data' 

export default class RecentTop extends Component {
  
  render() {
    const RecentFooter = recentFooter.map((recent, index) => {
      return (
        <div key= {index} className="recent wow fadeInUp" data-wow-delay={ recent.delay }>
            <img src={ recent.image } alt="anh" />
            <div className="wrap-recent">
              <a href="#a" className="title-recent">{ recent.titleRecent }</a>
              <p className="desc-recent">{ recent.descRecent }</p>
              <p className="date-recent">{ recent.date }</p>
            </div>
          </div>
      )
    })
    return(
      <div className="col-lg-4 col-md-6">
        <h3 className="col-12 title-footer wow fadeInUp" data-wow-delay="0.5s">recent post</h3>
        { RecentFooter }
      </div>
    )
  }
}