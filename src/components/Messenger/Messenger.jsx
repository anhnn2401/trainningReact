import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import Search from './Search';
// import { messagers } from './../../store/test/messager.jsx';
import FormAdd from './FormAdd';
import Sort from './Sort';
import { connect } from 'react-redux';
import * as actions from '../../actions/test/messager'


class Messenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messenges: JSON.parse(localStorage.getItem('contentMessenges')) || [],
      isDisplayForm: true,
      formEditing: null,
      filter: {
        name: '',
        status: -1
      },
      sortBy: 'name',
      sortValue : 1,
    }
    console.log('log messs',this.state.messenges);
    console.log('this.props', this.props);
  }
  
  componentDidMount() {
    console.log('didmount', this.props)
    this.props.dispatch(actions.listAll())
  }

  componentDidUpdate() {
    console.log('new', this.props)
  }
	
  onFilter = ( filterName ) => {
    this.setState ({
      filter : {
        name: filterName.toLowerCase()
      }
    })
    // filterName.preventDefault()
  }

  handleMessegeSubmit = (data) => {
    console.log('submit',data)
    let storeMess = this.state.messenges;
    const index = this.state.messenges.findIndex(item => item.id === data.id);
    console.log('index', index)
    if (index === -1) {
      storeMess.push(data);
      }else {
        storeMess[index] = data;
      }
    this.setState({
      messenges: storeMess    
    });
    localStorage.setItem('contentMessenges', JSON.stringify(storeMess));

  }
    
  onCloseForm = () => {
    this.setState({
      isDisplayForm : true
    });
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    })
  }
  onDelete = (id) => {
		const { messenges } = this.state;
		const newData = messenges && messenges.filter(item => item.id !== id);
    this.setState ({
			messenges: newData,
		});
    localStorage.setItem('contentMessenges', JSON.stringify(newData));
  }
  onOpenForm = () => {
    this.setState({
      isDisplayForm : false
    });
    // this.onToggleForm()
  }

  findIndex = (id) => {
    var { messenges } = this.state;
    var result = -1;
    messenges.forEach((message, index) => {
      if (message.id === id) {
        result = index;
      }
    });
    return result;
  }
  onEdit = (id) => {
    const { messenges } = this.state;
    const index = this.findIndex(id);
    const formEditing = messenges[index];
    this.setState({
      formEditing: formEditing
    }, () => {this.onOpenForm();}) ;
  }
  onSort=(sortBy, sortValue) => {
    console.log('sort',sortBy, sortValue);
    this.setState ({
      sortBy : sortBy,
      sortValue : sortValue
    })
  }

  render() {
    const {match, } = this.props;
    console.log("this.props",this.props);
    console.log("this.state",this.state);

    const { filter,
            isDisplayForm, 
            formEditing, 
            sortValue,
            messenges } = this.state ;
            messenges.sort((a,b) => {
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return sortValue;
      } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -sortValue;
      } else {
        return 0;
      }
    })
    const temp = messenges.filter(item => {
      const lowercase = (item.name && item.name.toLowerCase()) || ''
      return lowercase.includes(filter?.name || '')
    })
    
    const url = match.url;
    const Messeges = temp.map((messege,index) => {
      return (
        <li 
          key={index} 
          className="list-messager"
          >
          <Link className="link-messager" to={`${url}/${messege.id}`}>
            <img className="messager-img" src={messege.image} alt="anh - message" />
            <div className="content-messager">
              <h2 className="massager-title">{messege.name} </h2>
              <p>{messege.content}</p>
            </div>
          </Link>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick = { () => this.onEdit(messege.id)}
              ><i className="fa fa-pencil"/> Sửa
            </button>
            <button
              type = "button"
              className = "btn btn-danger mt-10"
              onClick = {() => this.onDelete(messege.id)}
            >
              <i className="fa fa-trash"/> Xóa
            </button>
          </div>
        </li>
      )
    })
    return (
      <div className="messager">
        <Header/>
        <Search 
          onFilter = {this.onFilter}
        />
        <div className="container">
          <FormAdd 
            onAddNewMessage={(name, content, id) => this.handleMessegeSubmit(name, content, id)} 
            hidden={isDisplayForm}
            onCloseForm={this.onCloseForm}
            update={formEditing}
          />

        </div>
        <div className="container buttonControl">
          <button 
          className={isDisplayForm ? "btn btn-primary" : "hidden"}
          onClick = {this.onToggleForm}
          >
            <i className="fa fa-plus" aria-hidden="true"/> { isDisplayForm ? "Thêm tin nhan" : "Đóng"}
          </button>
          &nbsp;
          <Sort 
            onSort={this.onSort}
            // sortBy={sortBy}
            // sortValue={sortValue}
          />
        </div>
        <ul className="pdt-50 container mt-10">
          {Messeges}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('aaaastate',state);
  return { 
    messenges : state.messages.data
   }
}

const mapDispatchToProps = (dispatch) => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(Messenges)