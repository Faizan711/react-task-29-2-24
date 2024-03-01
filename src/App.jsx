import React, { useState, useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import {db} from './firebase';
import './App.css'

function App() {
  const [employees, setEmployees] = useState([]);
  //search state
  const [searchTerm, setSearchTerm] = useState('');
//dropwdown for number of rows with 5 default
  const [rowsToShow, setRowsToShow] = useState(5);

  //Loader
  const [isLoading, setIsLoading] = useState(true);


  //to fetch data from employees node from database
  useEffect(() => {
    const dbRef = ref(db, 'employees');
    const handleData = snap => {
      if (snap.val()) {
        setEmployees(Object.values(snap.val()))
        setIsLoading(false);
      };
    }

    onValue(dbRef, handleData, {
      onlyOnce: true,
    });

    //cleanup funcition
    return () => {
      onValue(dbRef, null);
    };

  }, []);

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee => {
    const fullName = `${employee.name} ${employee.position} ${employee.department}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  // Slice the filtered employees array based on the number of rows to show
  const slicedEmployees = filteredEmployees.slice(0, rowsToShow);

  return (
    <>
      <h1 className='heading'>React Assessment</h1>
      <h3>Employee Data</h3>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={rowsToShow}
          onChange={e => setRowsToShow(parseInt(e.target.value))}
          className="rows-dropdown"
        >
          <option value={5}>5 Rows</option>
          <option value={10}>10 Rows</option>
          <option value={15}>15 Rows</option>
        </select>

      </div>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Position</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {slicedEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default App
