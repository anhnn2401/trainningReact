import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto nav-pills" id="topmenu">
          <li className="nav-item active">
            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">about</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#service">service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work">work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonial">testimonial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#team">team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">contact</a>
          </li>
          <li className="nav-item">
            <button className="toggle-search"><i className="fa fa-search icon-search"></i></button>
          </li>
        </ul>
      </div>
    )
  }
}
