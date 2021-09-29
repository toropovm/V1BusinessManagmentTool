import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class ViewUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            user: []
        }
        
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({user: res.data});
            console.log(res.data);
        })

    }
    render() {
        return (
            <div>
               
              <div className="card col-md-6 offset-md-3 font-weight-bold">
                <h2 className="text-center">User Details</h2> 
                <div className="card-body">
                    <div className="row">
                        <label className="font-weight-bold">First Name : </label>
                        <div>{this.state.user.firstName}</div>
                    </div>
                    <div className="row">
                        <label className="font-weight-bold">Last Name : </label>
                        <div>{this.state.user.lastName}</div>
                    </div>
                    <div className="row">
                        <label className="font-weight-bold">Email : </label>
                        <div>{this.state.user.emailId}</div>
                    </div>
                </div>

              </div>
            </div>
        )
    }
}

export default ViewUser