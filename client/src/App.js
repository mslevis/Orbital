import React, { Fragment, useState } from 'react';

import './App.css';
//import './components/InputTodo';

// Components
import InputToDo from './components/InputTodo';
import ListTodo from "./components/ListTodo";
import TaskBox from "./components/TaskBox";
import Heading from "./components/Heading";
import EditTodo from './components/EditTodo';


function App() {
  return (
      <Fragment>
        <Heading />
        <TaskBox />
      </Fragment>
  );
}

export default App;
