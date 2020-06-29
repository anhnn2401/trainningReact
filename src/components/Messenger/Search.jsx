import React, { Component } from 'react';
// import { messagers } from '../__mock__/Data'

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter :{
        filterName : "",
      }
      // filterStatus : -1 //all : -1, active : 1, deactive : 0
    };
  }
  handleChange = (event) => {  // sắp xếp search
    let name = event.target.name;
    let value = event.target.value;
    this.props.onFilter(name === 'filterName' ? value : this.state.filterName);
    this.setState ({
      [name] : value 
    });
    // event.preventDefault();
  }
  render() {
    var { filterName } = this.state;
    return (
      <div className="search container">
        <input 
        className="form-control ml-3" 
        type="text" 
        placeholder="Search"
        aria-label="Search" 
        value={ filterName } 
        name="filterName"
        onChange={this.handleChange}
      />
      </div>
    );
  }
}