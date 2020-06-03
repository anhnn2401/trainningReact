import React, { Component } from 'react'
import {descTeams} from '../__mock__/Data'
export default class Team extends Component {
  render() {
    const TeamDesc = descTeams.map((descTeam, index) => {
      return(
        <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={descTeam.delay} data-wow-duration="5s">
          <div className="image-team">
            <img src={descTeam.image} alt="team" className="item-team"/>
            <div className="team-plus">
              <a href="#aaa"><i className="fa fa-plus"></i></a>
            </div>
          </div>
          <div className="name-team">
            <h4 className="name-user">{descTeam.name}</h4>
            <p className="position-name">{descTeam.position}</p>
          </div>
          <div className="icon">
            <a href="#a" className="icon-team"><i className="fa fa-facebook-f"></i></a>
            <a href="#a" className="icon-team"><i className="fa fa-twitter"></i></a>
            <a href="#a" className="icon-team"><i className="fa fa-skype"></i></a>
            <a href="#a" className="icon-team"><i className="fa fa-vimeo-square"></i></a>
          </div>
        </div>
      )
    })
    return (
      <div className="team" id="team">
        <h3 className="title-feature">Meet Out Team</h3>
        <div className="container">
          <div className="team-container row">
            {TeamDesc}
          </div>
        </div>
      </div>
    )
  }
}