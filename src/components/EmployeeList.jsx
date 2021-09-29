import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';


class EmployeeList extends Component {
    constructor(props) {

        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    deleteEmployee(id) {
        //rest api call
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployee().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee(){
        //react router provides history object of each prop, allows us to control history of browser
        this.props.history.push('/add-employee');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className = "row">
                    <button style={{marginTop: "1.5rem", marginBottom: "1rem"}}className="btn btn-primary "  type="button" onClick={this.addEmployee}> Add Employee</button>
                </div>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map( 
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button style={{marginLeft: "1.5rem"}} onClick = { () => this.editEmployee(employee.id)} className="btn btn-secondary btn-block">Update</button>
                                            <button style={{marginLeft: "1.5rem"}} onClick = { () => this.viewUser(employee.id)} className="btn btn-info btn-block">View</button>
                                            <button style={{marginLeft: "1.5rem"}} onClick = { () => this.deleteEmployee(employee.id)} className="btn btn-danger btn-block">Delete</button>
                                            
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default EmployeeList;
