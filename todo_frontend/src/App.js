import React, { useState, useEffect } from 'react';
import './App.css';
import './todoPage.css';
import StatusBar from "./components/StatusBar";
import AppBar from "./components/AppBar";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";
import AddTodoButton from "./components/AddTodoButton";

function App() {
  // Simulate theme feature (leave for future, not used in this screen):
  // const [theme, setTheme] = useState('light');
  // useEffect(() => {
  //    document.documentElement.setAttribute('data-theme', theme);
  // }, [theme]);
  // const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  // Tabs: 'all' or 'completed'
  const [currentTab, setCurrentTab] = useState("all");

  // Placeholder todos modelled after Figma/HTML
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "TODO TITLE",
      subtitle: "TODO SUB TITLE",
      completed: false,
    },
    {
      id: 2,
      title: "TODO TITLE",
      subtitle: "TODO SUB TITLE",
      completed: false,
    },
    {
      id: 3,
      title: "TODO TITLE",
      subtitle: "TODO SUB TITLE",
      completed: false,
    },
    {
      id: 4,
      title: "TODO TITLE",
      subtitle: "TODO SUB TITLE",
      completed: true,
    },
    {
      id: 5,
      title: "TODO TITLE",
      subtitle: "TODO SUB TITLE",
      completed: false,
    },
  ]);

  // Filter todos per tab
  const displayedTodos =
    currentTab === "all"
      ? todos
      : todos.filter((todo) => todo.completed);

  // Action handlers (Demo: just alert)
  const handleCheck = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const handleEdit = (id) => {
    alert("Edit TODO id " + id); // To be implemented further
  };
  const handleAddTodo = () => {
    alert("Add ToDo clicked! (Implement modal or navigation for adding TODOs)");
  };

  return (
    <div className="todo-page">
      <StatusBar />
      <AppBar />
      <NavBar currentTab={currentTab} onTabChange={setCurrentTab} />
      <TodoList
        todos={displayedTodos}
        onCheck={handleCheck}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <AddTodoButton onClick={handleAddTodo} />
    </div>
  );
}

export default App;
