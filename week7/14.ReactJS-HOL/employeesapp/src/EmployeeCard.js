import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext); // 'light' or 'dark'

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <button className={`btn-${theme}`}>View Profile</button>
    </div>
  );
};

export default EmployeeCard;
