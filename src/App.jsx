import React, { Component, useState } from 'react';
import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';

const App = () => {
  const [inputCourse, setInputCourse] = useState('');
  const [courses, setCourses] = useState([]);

  const handleInputChange = (e) => {
    setInputCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCourses([...courses, inputCourse]);
    setInputCourse('');
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>UIUC MCSR</h1>
      </div>
      <p className="App-intro">
        Welcome to the UIUC MCSR website!
      </p>
      <div className="input">
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Enter a CS course number (e.g. 425)'
            value={inputCourse}
            onChange={handleInputChange} />
          <Button variant="contained" type='submit'>Submit</Button>
        </form>
      </div>
      <div className="badges">
        {courses}
      </div>
      <div className="restricts">
      </div>
    </div>
  );
}
export default App;
