// Imports
import React, { Fragment, useState } from 'react';

import './App.css';

// Components
import InputToDo from './components/InputTodo';
import ListTodo from "./components/ListTodo";
import TaskBox from "./components/TaskBox";
import Heading from "./components/Heading";
import EditTodo from './components/EditTodo';

/**
 * Functional Component of our main app
 * @returns JSX for our main app
 */
function App() {
  return (
      <Fragment>
        <Heading />
        <TaskBox />
      </Fragment>
  );
}

export default App;
