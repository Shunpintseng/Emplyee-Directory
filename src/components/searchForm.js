import React, { Component } from 'react';
import API from "./utils/API"

 class SearchForm extends Component {

    state= {
        searchName: "",
        employees: [], 
        sorted: []       
    };

    componentDidMount() {
        API.search()
        .then (res => {
            this.setState({
                employees: res.data.results
            });
        })
        .catch(err => console.log(err));
    }

    handleInputchange = event => {
        let value = event.target.value;
        let searchName = event.target.searchName
        this.setState({
            [searchName]: value
        })
    }

    handleFormSubmit = event => {
            event.preventDefault();
            const searchName = this.state.searchName;
            const result = this.state.employees.filter(employee => employee.name.first.includes(searchName) || employee.name.last.includes(searchName));
            this.setState({
                sorted: result,
                searchName: ""
            });
        };
    
    

    render() {

    return(
   
    <div className="form">

    
    <search
          handleInputChange={this.handleInputChange}
          search={this.state.searchName}
    />
  
        <button
          onClick={this.handleFormSubmit}
          type="submit"
          className="button">
        Search
        </button> 
               
        </div>
        )
         }
    }

export default SearchForm;