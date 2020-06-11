import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Menu extends Component {
//   const MenuLink = ({
//     label, // nội dung trong thẻ
//     to, // giống như href trong thẻ a
//     activeOnlyWhenExact
//   }) => {
//     return (
//         <Route 
//             path={to}
//             exact={activeOnlyWhenExact}
//             children={ ({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
//                 var active = match ? 'active abc' : '';

//                 return (
//                     <li className={`my-li ${active}`}>
//                         <Link  to={to} className="my-link">{label}</Link>
//                     </li>
//                 );
//             }}
//         />
//     );
// }
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto nav-pills" id="topmenu">
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
            <Link className="nav-link" to="/message">Message</Link>
          </li>
          <li className="nav-item">
            <button className="toggle-search"><i className="fa fa-search icon-search"></i></button>
          </li>
        </ul>
      </div>
    )
  }
}
