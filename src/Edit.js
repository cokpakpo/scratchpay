import React, { Component } from 'react'

class Add  extends Component {
    state = {
        id: this.props.data.id,
        email : this.props.data.email,
        firstname : this.props.data.firstname,
        lastname : this.props.data.lastname,
        role : this.props.data.role,
        status : this.props.data.status,
    }
    componentDidMount(){
        document.getElementById(this.state.role).setAttribute("selected", "selected")
        document.getElementById(this.state.status).setAttribute("selected", "selected") 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
       e.preventDefault()
       this.props.update(this.state)  
    }

    render (){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" value={this.state.firstname} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" value={this.state.lastname} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" value={this.state.email} aria-describedby="emailHelp" onChange={this.handleChange} required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" id="role" onChange={this.handleChange}>
                            <option defaultValue>Select Role</option>
                            <option value="doctor" id="doctor" >Doctor</option>
                            <option value="admin" id="admin" >Admin</option>
                            <option value="accountant" id="accountant">Accountant</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="custom-select" id="status" onChange={this.handleChange}>
                            <option value="inactive" id="inactive">Inactive</option>
                            <option value="active" id="active">Active</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>    
                </form>
            </div>
        )
    }  
}
export default Add


