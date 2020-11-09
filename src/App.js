import React from "react";
import searchForm from "./components/searchForm";
import employCard from "./components/employeeCard";
import wrapper from "./component/wrapper";
import "./App.css";

// render multiple components in this function.
function App() {
  return (
    <wrapper>
      <header>
        <h1> Employee Directory </h1>
      </header>

      <searchForm />

      <employeeList/>
    </wrapper>
  );
}

export default App;
