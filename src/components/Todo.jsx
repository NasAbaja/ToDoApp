import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';
import './Todo.css'; // Import the CSS file

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState(""); 
  const inputRef = useRef();
  const editInputRef = useRef();
  const deadlineRef = useRef(); // Reference for deadline input

  const formatDate = (date, includeTime = true) => {
    if (includeTime) {
      return new Date(date).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' });
    } else {
      return new Date(date).toLocaleDateString('en-GB');
    }
  }

  const add = () => {
    const inputText = inputRef.current.value.trim();
    const deadline = deadlineRef.current.value; 
    if (inputText === "" || deadline === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
      dateCreated: formatDate(new Date()), // Format dateCreated with time
      deadline: formatDate(deadline, false) // Format deadline without time
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
    deadlineRef.current.value = ""; // Clear the deadline input
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodoList((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
    }
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  const editTodo = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === editingId) {
          return { ...todo, text: editText };
        }
        return todo;
      });
    });
    setEditingId(null);
    setEditText("");
  };

  const markAllDone = () => {
    if (window.confirm("Are you sure you want to mark all items as done?")) {
      setTodoList((prevTodos) => {
        return prevTodos.map((todo) => ({ ...todo, isComplete: true }));
      });
    }
  };

  const markAllUndone = () => {
    if (window.confirm("Are you sure you want to mark all items as undone?")) {
      setTodoList((prevTodos) => {
        return prevTodos.map((todo) => ({ ...todo, isComplete: false }));
      });
    }
  };

  const deleteAll = () => {
    if (window.confirm("Are you sure you want to delete all items?")) {
      setTodoList([]);
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="todo-container">
      <div className="todo-header">
        <img className="todo-icon" src={todo_icon} alt="To-do Icon" />
        <h1 className="todo-title">What to do?</h1>
      </div>

      <div className="todo-input-container">
        <input 
          ref={inputRef} 
          className="todo-input"
          type="text" 
          placeholder='Add your task' 
        />
        <input 
          ref={deadlineRef}
          className="todo-input"
          type="date" 
        />
        <button 
          onClick={add} 
          className="todo-add-button"
        >
          ADD+
        </button>
      </div>

      <div className="todo-actions">
        <button onClick={markAllDone} className="todo-action-button">Done All</button>
        <button onClick={markAllUndone} className="todo-action-button">Undone All</button>
        <button onClick={deleteAll} className="todo-action-button">Delete All</button>
      </div>

      {editingId && (
        <div className="todo-edit-container">
          <input
            ref={editInputRef}
            className="todo-edit-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder='Edit your task'
          />
          <button
            onClick={saveEdit}
            className="todo-save-edit-button"
          >
            SAVE
          </button>
        </div>
      )}

      <div>
        {todoList.map((item) => (
          <TodoItems 
            key={item.id} 
            text={item.text} 
            id={item.id}
            isComplete={item.isComplete} 
            dateCreated={item.dateCreated} // Pass dateCreated to TodoItems
            deadline={item.deadline} // Pass deadline to TodoItems
            deleteTodo={deleteTodo} 
            toggle={toggle}
            editTodo={editTodo} 
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
