import React from 'react';
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import lexmeet_bg from './assets/lexmeet_bg.png'; // Adjust the path according to your file structure
import lex_icon from './assets/lex_icon.png'; // Import the new logo

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div
        style={{
          background: `url(${lexmeet_bg}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          flex: 1,
          marginTop: '0', // Adjust the margin top if needed
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center the logo and text horizontally
        }}
        className='grid py-4'
      >
        {/* Logo and text */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          marginTop: '20px',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for contrast
          borderRadius: '10px', // Rounded corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow effect
        }}>
          <img 
            src={lex_icon} 
            alt="To Do App Logo" 
            style={{
              width: '100px', // Adjust size as needed
              height: '100px',
              marginRight: '15px',
            }} 
          />
          <h1 style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 'bold',
            color: 'rgb(94, 27, 137)', // Lawful Purple
            fontSize: '50px', // Increased font size
            margin: 0, // Remove default margin
          }}>
            To Do App
          </h1>
        </div>
        
        {/* Todo Container */}
        <Todo />
      </div>
    </div>
  );
}

export default App;
