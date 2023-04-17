import React, { useState } from 'react';

const MyTable = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Communication Network', department: 'CS', alnum: '438', grade: 'A', credit: 4 },
    { id: 2, name: 'Distributed System', department: 'CS', alnum: '425', grade: 'B-', credit: 4 },
    { id: 3, name: 'Applied Parallel Programming', 
      department: 'CS', alnum: '483', grade: 'B+', credit: 4 },
  ]);
  const availableCredits = [4, 3];

  return (
    <table>
      <tr>
        <td>Course Alnum</td>
        <td>Name</td>
        <td>Grade</td>
        <td>credit</td>
      </tr>
      {courses.map(course => {
        const {id, name, department, alnum, grade, credit} = course;
        return (
          <tr key={id}>
            <td>{department} {alnum}</td>
            <td>{name}</td>
            <td>
              <select name="grade" id="grade">
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C-">C-</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="D-">D-</option>
                <option value="F">F</option>
              </select>
            </td>
            <td>
              {availableCredits.length > 1 
                ? ( 
                  <select name="credit" id="credit">
                    {availableCredits.map((credit, index) => {
                      return (
                        <option key={index} value={credit}>{credit}</option>
                      );
                    })}
                  </select>
                ) 
                : availableCredits[0]
              }
            </td>
          </tr>
        );})}
    </table>
  );
};

export default MyTable;