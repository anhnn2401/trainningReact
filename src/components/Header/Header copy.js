import React, { Component } from "react";
import logo from '../assets/images/logo.png';
class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">

              <img src={ logo } alt="logo" className="logo" />

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
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
              <form className="search-form">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn my-2 my-sm-0" type="submit"><i className="fa fa-search icon-search"></i></button>
                </form>
            </nav>
        </div>
      </header>
    )
  }
}

export default Header;
