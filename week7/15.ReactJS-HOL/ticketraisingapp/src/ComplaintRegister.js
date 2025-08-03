import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeName.trim() || !complaint.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    // Generate a simple reference number
    const referenceNumber = 'REF' + Math.floor(Math.random() * 1000000);

    alert(
      `Complaint submitted successfully!\n\nEmployee Name: ${employeeName}\nComplaint: ${complaint}\nReference No: ${referenceNumber}`
    );

    // Clear the form
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Complaint Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Employee Name:</label><br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Complaint:</label><br />
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows="5"
            style={{ width: '100%', padding: '8px' }}
            required
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintRegister;
