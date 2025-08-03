import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>Select a flight to book:</p>
      <ul>
        <li><button>Book Flight A</button></li>
        <li><button>Book Flight B</button></li>
        <li><button>Book Flight C</button></li>
      </ul>
    </div>
  );
};

export default UserPage;
