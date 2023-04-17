import React, { Component, useMemo, useState } from 'react';
import logo from './logo.svg';

import { Autocomplete, Badge, Button, Chip } from '@mui/material';
import RequirementItem from './components/RequirementItem';
import requirements from './requirements';
import Courses from './files/Courses.json'
import './App.css';
import MyTable from './components/MyTable';

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

    if (!Courses.includes(inputCourse)) {
      alert("Course does not exist");
      setInputCourse('');
      return;
    }
    if (courses.includes(inputCourse)) {
      alert("Duplicate course number");
      setInputCourse('');
      return;
    }
    setCourses([...courses, inputCourse]);
    setInputCourse('');
  };

  const handleDelete = (index) => {
    const copy = [...courses];
    copy.splice(index, 1);
    setCourses(copy);
  }

  return (
    <div className="App" >
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>UIUC MCSR v0.1.2</h1>
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

      <MyTable courses={courses} />

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
        {requirements.map((requirement, index) => {
          return <RequirementItem
            key={index}
            description={requirement.description}
            checker={requirement.checker}
            selectedCourses={courses}
          />
        })}
      </div>
      <p>

      </p>
    </div >
  );
}
export default App;
