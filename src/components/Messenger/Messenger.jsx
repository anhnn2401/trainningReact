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
      // messenges: JSON.parse(localStorage.getItem('contentMessenges')) || [],
      // isDisplayForm: true,
      // formEditing: null,
      filter: {
        name: '',
        status: -1
      },
      sortBy: 'name',
      sortValue : 1,
    }
  }
  
  componentDidMount() {
    this.props.dispatch(actions.listAll())
    console.log('this.state-Messenger',this.props);

  }

  componentDidUpdate() {
  }
	
  // onFilter = ( filterName ) => {
  //   this.setState ({
  //     filter : {
  //       name: filterName.toLowerCase()
  //     }
  //   })
  //   // filterName.preventDefault()
  // }



//chuwcs nang do FormAdd thuc hienj
  // handleMessegeSubmit = (data) => {

  //   let storeMess = this.props.messenges;
  //   const index = storeMess.findIndex(item => item.id === data.id);
  //   if (index === -1) {
  //     storeMess.push(data);
  //     }else {
  //       storeMess[index] = data;
  //     }
  //   this.setState({
  //     messenges: storeMess    
  //   });
  //   localStorage.setItem('contentMessenges', JSON.stringify(storeMess));

  // }
    
  // onCloseForm = () => {
  //   this.props.onCloseForm();
  //   this.setState({
  //     isDisplayForm : true
  //   });
  // }

  onToggleForm = () => {
    this.props.onToggleForm();
    // this.setState({
    //   isDisplayForm : !this.props.isDisplayForm
    // })
  }
  onDelete = (id) => {
    this.props.onDelete(id);
    this.props.onCloseForm();

  }
  // onDelete = (id) => {
	// 	const { messenges } = this.state;
	// 	const newData = messenges && messenges.filter(item => item.id !== id);
  //   this.setState ({
	// 		messenges: newData,
	// 	});
  //   localStorage.setItem('contentMessenges', JSON.stringify(newData));
  // }
  // onOpenForm = () => {
  //   this.setState({
  //     isDisplayForm : false
  //   });
  //   // this.onToggleForm()
  // }

  // findIndex = (id) => {
  //   var { messenges } = this.props;
  //   var result = -1;
  //   messenges.forEach((message, index) => {
  //     if (message.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // }
  onEdit = (messege) => {
    this.props.onOpenForm();
    this.props.onEdit(messege);
    console.log('!!!__messenger__!!!!',messege);
  }
  // onEdit = (id) => {
  //   const { messenges } = this.props;
  //   const index = this.findIndex(id);
  //   const formEditing = messenges[index];
  //   this.setState({
  //     formEditing: formEditing
  //   }, () => {this.onOpenForm();}) ;
  // }
  onSort=(sortBy, sortValue) => {
    this.setState ({
      sortBy : sortBy,
      sortValue : sortValue
    })
  }

  render() {
    const {match, messenges, isDisplayForm  } = this.props;

    const { filter,
            // isDisplayForm, 
            // formEditing, 
            sortValue,
            // messenges,
           } = this.state ;
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
              // onClick = { () => this.onEdit(messege.id)}
              onClick = {() => this.onEdit(messege)}
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
    // console.log('isDisplayForm',isDisplayForm.isDisplayForm)
    return (
      <div className="messager">
        <Header/>
        <Search 
          onFilter = {this.onFilter}
        />
        <div className="container">
          <FormAdd 
            // onAddNewMessage={(name, content, id) => this.handleMessegeSubmit(name, content, id)} 
            hidden={isDisplayForm}
            // onCloseForm={this.onCloseForm}
            // update={formEditing}
          />

        </div>
        <div className="container buttonControl">
          <button 
          // className={isDisplayForm ? "btn btn-primary" : "hidden"}
          className="btn btn-primary"
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
  console.log(state);
  return { 
    messenges : state.messages,
    isDisplayForm : state.isDisplayForm.isDisplayForm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch : () => {},
    onToggleForm : () => {
      dispatch(actions.toggleForm())
    },
    onEdit : (messenge) => {
      dispatch(actions.editMessenge(messenge))
      console.log('edit_MEss',messenge);
    },
    onCloseForm : () => {
      dispatch(actions.closeForm())
    },
    onOpenForm : () => {
      dispatch(actions.openForm())
    },
    onDelete : (id) => {
      dispatch(actions.deleteMessenge(id))
      console.log('delete',id);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenges)