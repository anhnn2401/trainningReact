import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.isOpenSearch = this.isOpenSearch.bind(this);
  }
  isOpenSearch() {
    console.log('Click happened');
  }
  render() {
    return (
      <div className="navbar-collapse">
        <ul className="navbar-nav ml-auto nav-pills">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">about</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills">skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">service</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/work">work</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/testimonial">testimonial</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/team">team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/messenges">Messenges</Link>
          </li>
          <li className="nav-item">
            <button className="toggle-search" onClick={this.isOpenSearch}><i className="fa fa-search icon-search"></i></button>
          </li>
        </ul>
      </div>
    )
  }
}
