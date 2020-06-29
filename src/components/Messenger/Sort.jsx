import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

export default class Sort extends Component {
  
  onSort = (sortBy, sortValue) => {
    // console.log(sortBy,'onSort',sortValue); 
    this.props.onSort(sortBy, sortValue);
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success">
          Sắp xếp
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item 
            onClick={() => this.onSort('name', 1)}
          >Tên A - Z
          </Dropdown.Item>
          <Dropdown.Item 
            onClick={ () => this.onSort('name', -1)}
          >Tên Z - A</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}