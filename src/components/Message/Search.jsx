import React, { Component } from 'react';
export default class Search extends Component {
  render() {
    return (
      <div className="search container">
        <form className="form-inline ml-3">
          <i className="fa fa-search"></i>
          <input className="form-control ml-3" type="text" placeholder="Search"
            aria-label="Search"/>
        </form>
      </div>
    );
  }
}