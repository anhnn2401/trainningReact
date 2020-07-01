import React, { Component } from 'react';
// import { messagers } from '../../store/test/messager';
import { connect } from 'react-redux';
import * as actions from './../../actions/test/messager'
class FormAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      content: '',
      id: ''      
    }
  }
  componentDidMount() {
    // console.log('didmount');
    console.log('props',this.props);
  }
  
  clearData = () => {
    this.setState ({
      name: '',
      content: ''      
    })
  }

  // generateID() {
  //   let id = Math.random().toString(36).substring(2,8);
  //   return id;
  // }
  onChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState ({
      [name]: value
    });
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onEdit = (messenge) => {
    this.props.onEdit(messenge);
  }

  onToggleForm = () => {
    console.log('object',this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevPropsFormadd',prevProps);
    if(prevProps.formEditing !== this.props.formEditing) {
      this.setState({
        id : this.props.formEditing.id,
        name : this.props.formEditing.name,
        content : this.props.formEditing.content,
      });
    }
  }

  onSendMessager = (event) => {
    event.preventDefault();
    // const {  } = this.state;
    this.props.onSaveForm(this.state)
    // this.props.onAddNewMessenge(this.state)
    // const params = {
    //   content: this.state.content, 
    //   name: this.state.name,
    //   id: this.state.id || this.generateID()
    // }
    // console.log("params",params);
    // this.props.onAddNewMessage(params);
    this.clearData();
    this.onCloseForm();
  }
  render() {
    // if(!this.props.isDisplayForm) return null;
    return (
      <div hidden={this.props.hidden}>
      {/* <div hidden={this.props.hidden}> */}
        <div className="panel-heading">
          <h3 className="panel-title">
            Tin nhắn mới
            <span 
              className="fa fa-times-circle btn-cancel"
              onClick={ this.onCloseForm }
            >
            </span>
          </h3>
          <form className="form-message" onSubmit={this.onSendMessager}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                placeholder="Đến : "
                onChange={this.onChange}
              />
              <textarea
                type="text"
                className="form-control form-messager"
                name="content"
                value={this.state.content}
                placeholder="Messager :"
                onChange={this.onChange}
              >
              </textarea>
            </div>
            <div className="btn d-flex justify-content-center">
              <button 
              type="submit" 
              className="btn btn-primary"
              >Gửi</button>
              &nbsp;
              <button
              type="button"
              className="btn btn-danger"
              onClick={ this.onCloseForm }
              >Hủy</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log('state-FormAdd',state);
  return {
    formEditing : state.formEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    // onAddNewMessenge : (messenge) => {
    //   dispatch(actions.addMessenge(messenge))
    // },
    onSaveForm : (messenge) => {
      dispatch(actions.saveForm(messenge))
    },
    onCloseForm : () => {
      dispatch(actions.closeForm())
    },
    onToggleForm : () => {
      dispatch(actions.toggleForm())
    },
    onEdit : (messenge) => {
      dispatch(actions.editMessenge(messenge))
      // console.log('edit-messs',messenge);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (FormAdd);