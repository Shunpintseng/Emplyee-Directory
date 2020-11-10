import React, { Component } from 'react';


 class SearchForm extends Component {

    state= {
        name: "",        
    };

    handleInputchange = event => {
        let value = event.target.value;
        let name = event.target.name
    }
    render() {
    return(<SearchForm>
        <FormControl
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
  
        <Button
          onClick={props.handleFormSubmit}
          type="submit"
          className="button">
        Search
        </Button> 
        </SearchForm>     )
    }
}
export default SearchForm;