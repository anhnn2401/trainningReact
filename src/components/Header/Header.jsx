import React, { Component } from "react";
import logo from '../../assets/images/logo.png';
import Menu from './Menu';

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
            <Menu />
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
