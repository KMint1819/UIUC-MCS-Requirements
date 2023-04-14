import React, { Component, useState } from 'react';
import logo from './logo.svg';
import { Badge, Button, Chip } from '@mui/material';
import AdvancedRequirement from './components/AdvancedRequirement';
import './App.css';

const App = () => {
  const [inputCourse, setInputCourse] = useState('');
  const [courses, setCourses] = useState([]);

  const handleInputChange = (e) => {
    setInputCourse(e.target.value);
  };

  // todo filters:
  // 1. invalid course number
  // 2. duplicate course number
  // 3. alphabetical characters
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputCourse) return;

    setCourses([...courses, inputCourse]);
    setInputCourse('');
  };

  const handleDelete = (index) => {
    const copy = [...courses];
    copy.splice(index, 1);
    setCourses(copy);
  }

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
            autoFocus
            placeholder='Enter a CS course number (e.g. 425)'
            value={inputCourse}
            onChange={handleInputChange} />
          <Button variant="contained" type='submit'>Submit</Button>
        </form>
      </div>
      <div className="badges">
        {courses.map((course, index) => {
          return <Chip
            label={course}
            key={index}
            onDelete={() => handleDelete(index)}
            color='primary'
            variant='Chip Outlined'
          />
        })}
      </div>
      <div className="restricts">
        <AdvancedRequirement selectedCourses={courses} />
      </div>
    </div >
  );
}
export default App;
