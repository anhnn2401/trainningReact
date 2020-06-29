import React, { Component } from "react";
import logo from '../../assets/images/logo.png';
// import Menu from './Menu';
import {Link} from 'react-router-dom';
import Example from './Example.jsx'
// import {Collapse} from 'react-collapse'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }
  componentDidMount() {
    const screen = window.innerWidth
    if (screen < 991) {
      this.setState({
        isOpen: false
      })
    }
  }
  
  render() {
    return (
      <header className="header-container">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/">
              <img src={ logo } alt="logo" className="logo" />
            </Link>
            <Example isOpen={this.state.isOpen} />
            <button className="navbar-toggler" onClick={() => {this.setState({isOpen: !this.state.isOpen})}}>
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <Menu /> */}
            
            <form className="search-form">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn my-2 my-sm-0" type="submit">
                <i className="fa fa-search icon-search"/>
              </button>
            </form>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
