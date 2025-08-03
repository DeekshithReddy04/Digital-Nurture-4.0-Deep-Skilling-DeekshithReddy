import React from 'react';
import './App.css';


import image from './images/image.png';
import image1 from './images/image1.png';
import image3 from './images/image3.png';

function App() {
  const officeList = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: image
    },
    {
      name: "Eco Space",
      rent: 70000,
      address: "Bangalore",
      image: image1
    },
    {
      name: "Tech Hub",
      rent: 750000,
      address: "Hyderabad",
      image: image3
    }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Office Space, at Affordable Range</h1>

      {officeList.map((office, index) => {
        const colorClass = office.rent <= 60000 ? "textRed" : "textGreen";
        return (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img src={office.image} width="15%" height="20%" alt={office.name} />
            <h2>Name: {office.name}</h2>
            <h3 className={colorClass}>Rent: Rs. {office.rent}</h3>
            <h3>Address: {office.address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
