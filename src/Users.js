import React from 'react'

const Users = props => {
    return (
        <div table-responsive-sm> 
            <table className="table table-hover">
            <thead className="thead-light">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map( value => 
                        <tr  key = {value.id}>
                            <th scope="row">{value.id}</th>
                            <td>{value.firstname}</td>
                            <td>{value.lastname}</td>
                            <td>{value.email}</td>
                            <td>{value.role}</td>
                            <td>{value.status}</td>
                            <td>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#" onClick={() => {props.edit(value.id)}}>Edit</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" onClick={() => {props.delete(value.id)}}>Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr> 
                    )  
                }
            </tbody>
            </table>
        </div>
      )
}
export default Users