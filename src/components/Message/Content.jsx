import React, { Component } from 'react';
import Header from '../Header/Header';
import Search from './Search';
import {massagers} from '../__mock__/Data';
import { Link } from 'react-router-dom';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    console.log(this.state)
  }
  
  render() {
    let {match} = this.props;
    let id = match.params.id;
    let item = massagers.find(item => item.id === id )
    return (
      <div>
        <Header/>
        <Search />
        <div className="mt-50">
          <div className="desc-messager container">
            <div className="title-messager">
              <button className="btn-back">
                <Link to="/message">
                <i className="fa fa-angle-left"></i>  
                </Link>
              </button>
              <img className="messager-img" src={item.image} alt="anh - message" />
              <h2 className="name-massager">{item.name}</h2>
            </div>
            <div className="content-messager">
              <p className="aaaa">{item.messager}</p>
              <p className="send">{item.messager1}</p>
              <p className="aaaa">{item.messager2}</p>
            </div>
          </div>
          {/* <div>
            <input type="message"/>
            <button className="btn-send-messager">
              <i className="fa fa-telegram-plane"></i>
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}