import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';
import edit_icon from '../assets/edit.png'; // Add an icon for edit

const TodoItems = ({ text, id, isComplete, dateCreated, deadline, deleteTodo, toggle, editTodo }) => {
  return (
    <div 
      className='flex items-center my-3 gap-2 p-2 rounded-md'
      style={{ border: '2px solid rgb(94, 27, 137)' }} // Lawful Purple
    >
      <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
        <img 
          src={isComplete ? tick : not_tick} 
          alt="" 
          className='w-7'
          style={{ width: '30px', height: '30px' }}
        />
        <div className='ml-4'>
          <p 
            className={`text-[18px] ${isComplete ? "line-through" : ""}`}
            style={{ 
              fontFamily: 'Lato', // Font family set to Lato
              color: isComplete ? 'rgb(108, 117, 125)' : 'rgb(157, 113, 188)', 
              textDecorationColor: isComplete ? 'rgb(108, 117, 125)' : 'none',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {text}
          </p>
          <small 
            className='text-gray-500'
            style={{ 
              fontFamily: 'Lato', // Font family set to Lato
              color: 'rgb(108, 117, 125)',
            }}
          >
            Created: {dateCreated}
          </small>
          <small 
            className='text-gray-500'
            style={{ 
              fontFamily: 'Lato', // Font family set to Lato
              color: 'rgb(108, 117, 125)',
            }}
          >
             |  Deadline: {deadline}
          </small>
        </div>
      </div>
      <img 
        onClick={() => editTodo(id, text)} // Add onClick for edit
        src={edit_icon} 
        alt="Edit" 
        className='w-9 cursor-pointer'
      />
      <img 
        onClick={() => deleteTodo(id)} 
        src={delete_icon} 
        alt="Delete" 
        className='w-10 cursor-pointer'
      />
    </div>
  );
}

export default TodoItems;
