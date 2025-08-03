
import React, { useState } from 'react';
import EmployeeList from './EmployeeList'; 
import ThemeContext from './ThemeContext'; 

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Employee Management App</h1>
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
