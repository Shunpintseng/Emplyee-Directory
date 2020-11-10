import React from "react";
import SearchForm from "./components/SearchForm";
import EmployeeList from "./components/EmployeeList"
import "./App.css";

// render multiple components in this function.
function App() {
  return (
  <div>
      <header>
        <h1> Employee Directory </h1>
      </header>
      <SearchForm />
      <EmployeeList />
  </div>
  );
}

export default App;
//  <searchForm />