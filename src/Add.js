import React, { Component } from 'react'

class Add  extends Component {
    state = {
        firstname : null,
        lastname : null,
        email : null,
        role : null,
        status : null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
       this.props.adduser(this.state)
    }

    error = () => {
        return (
            <div class="alert alert-danger" role="alert">
                Email already exist!
            </div>
        )
    }

    render (){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address {this.props.error ? this.error() : ""} </label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange} required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" id="role" onChange={this.handleChange} required>
                            <option value="" defaultValue>Select Role</option>
                            <option value="doctor">Doctor</option>
                            <option value="admin">Admin</option>
                            <option value="accountant">Accountant</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" id="status" onChange={this.handleChange} required>
                            <option value="" defaultValue>Select status</option>
                            <option value="inactive">Inactive</option>
                            <option value="active">Active</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>    
                </form>
            </div>
        )
    }  
}
export default Add


