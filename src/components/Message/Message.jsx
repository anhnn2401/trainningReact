import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import Search from './Search';
import {massagers} from '../__mock__/Data'
export default class Message extends Component {
  render() {
    const {match} = this.props;
    const url = match.url;
    const Messager = massagers.map((massage,index) => {
      return (
        <div key={index}>
          <Link className="link-messager" to={`${url}/${massage.id}`}>
            <img className="messager-img" src={massage.image} alt="anh - message" />
            <div className="content-messager">
              <h2 className="massager-title">Tin nhắn {massage.name} </h2>
              <p>{massage.description}</p>
            </div>
          </Link>
        </div>
      )
    })
    return (
      <div className="messager">
        <Header/>
        <Search />
        <div className="pdt-50 container">
          {Messager}
        </div>
        {/* <Route path={`${url}/:name`} component = {Message} /> */}
      </div>
    );
  }
}
