import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import API from "./utils/API";



export default class employeeList extends Component {
   
    state = {
        employees: [],
       }   

    componentDidMount() {
        API.search()
        .then (res => {
            this.setState({
                employees: res.data.results
            });
        })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                {this.state.employees.map(employee => (
                <EmployeeCard 
                id={employee.id.value}
                key={employee.id.value}
                FirstName = {employee.name.first}
                LastName = {employee.name.last}
                picture= {employee.picture.thumbnail}
               /> ))}
            </div>
        )
    }
}

