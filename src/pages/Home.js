import React, { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

import apiTodos from '../utils/api.utils'

const Home = () => {
  const [ todos, setTodos ] = useState([]);

  const getAllTodos = async () => {
    try {
      const todos = await apiTodos.getTodos();
      setTodos(todos);
    } catch (error) {
      console.error('na home!', error.status)
    }
  }

  useEffect(() => {
    getAllTodos();
  }, [])

  return (
    <>
      <AddTodo getAllTodos={getAllTodos}/>
      <TodoList todos={todos} getAllTodos={getAllTodos}/>
    </>
  );
};

export default Home;
