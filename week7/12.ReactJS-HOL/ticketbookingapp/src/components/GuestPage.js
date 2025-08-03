import React from 'react';

const GuestPage = () => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Here are some available flights:</p>
      <ul>
        <li>Flight A: Mumbai to Dubai</li>
        <li>Flight B: Bangalore to Singapore</li>
        <li>Flight C: Delhi to London</li>
      </ul>
      <p>Please log in to book a ticket.</p>
    </div>
  );
};

export default GuestPage;
