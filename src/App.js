import React, { Component } from 'react';
import logo from './logo.png';
import Users from './Users'
import Add from './Add'
import Edit from './Edit'

class App extends Component {
    state = {
      duplicateEmail:false,
      showUser: true,
      showForm: false,
      showEdit: false,
      login: false,
      update: null,
      users : []
    }
      //ID generator
     generator = () => {
      let min = Math.ceil(10000);
      let max = Math.floor(99999);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Fetch all users
    listUsers = () => {
      this.setState({
        showUser:true,
        showForm: false,
        showEdit:false
      })
    }

    //Add new user
    showForm = () => {
      this.setState({
        showForm: true,
        showUser:false,
        showEdit:false
      })
    }

    //Delete selected user
    deleteUser = (id) => {
      let users = this.state.users.filter(user => {
        return user.id != id
      })
      this.setState({
        users
      })
    }

    //Edit user field
    showEdit = (id) => {
      let data = this.state.users.find(user => user.id == id)
      this.setState({
        update: data
      }, this.setState({
        showForm: false,
        showUser:false,
        showEdit:true
      }))
    }

    //Update changes
    updateUser = (data) => {
      let oldusers = this.state.users.filter(user => {
        return user.id != data.id
      })
      let users = [...oldusers, data]
      this.setState({
        ...this.state,
        users,
        showEdit:false,
        showUser:true
      })
    }
   
    //Form handler
    handleSubmit = (data) => {
     let email = this.state.users.find(user => user.email == data.email)
     if(email)
     if(data){
        this.setState({
          ...this.state,
          duplicateEmail:true
        })
        return
      }
     data.id = this.generator()
     let users = [...this.state.users, data]
      this.setState({
        ...this.state,
        users,
        duplicateEmail:false,
        showForm:false,
        showUser:true
      })
    }

  render(){
    return (
      <div>
        <div id="wrapper">
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></a>
              </li>
              <hr className="sidebar-divider"/>
              <div className="sidebar-heading">
                Interface
              </div>
              <li className="nav-item">
                <a className="nav-link" href="#" >
                  <i className="fas fa-fw fa-users"></i>
                  <span onClick={this.listUsers}>All Users</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  <i className="fas fa-fw fa-folder"></i>
                  <span onClick={this.showForm}>Add New User</span>
                </a>
              </li>
              <hr className="sidebar-divider d-none d-md-block"/>
          </ul>
        
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                  </button>
                  <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                    <img src={logo} width="200" alt="logo" />
                    </div>
                  </form>
                  <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Super Admin</span>
                        <img className="img-profile rounded-circle" src="brand.png"/>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                          Settings
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
              </nav>
            
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12 col-lg-7">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6>
                        {this.state.showUser ? "All Users" : ""}
                        {this.state.showForm ? "Add New User" : ""}
                        {this.state.showEdit ? "Edit User" : ""}
                        </h6>
                      </div>
                      <div className="card-body">
                        <div>
                          { this.state.showUser ? <Users users={this.state.users} delete={this.deleteUser} edit={this.showEdit}/> : " "}
                          { this.state.showForm ? <Add adduser={this.handleSubmit} error={this.state.duplicateEmail}/> : " "}
                          { this.state.showEdit ? <Edit update={this.updateUser} data={this.state.update}/> : " "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Made By Christian Okpakpo</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
  </div>
    );
  }
}
export default App;
