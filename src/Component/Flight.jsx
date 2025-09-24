import React, { useState } from 'react';
import { MdOutlineChangeCircle } from "react-icons/md";

import './Style/Flight.css';

const Flight = () => {
  const [fromCity, setFromCity] = useState("Mumbai, India");
  const [toCity, setToCity] = useState("Pune, India");

  return (
    <div className='flight-container'>
      <div className='flight-block'>
        <label className="label-text">From</label>
        <select
          className='Starting-point'
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
        >
          <option value="Mumbai, India">Mumbai, India</option>
          <option value="New Delhi, India">New Delhi, India</option>
          <option value="Bangkok, Thailand">Bangkok, Thailand</option>
          <option value="Bengaluru, India">Bengaluru, India</option>
          <option value="Pune, India">Pune, India</option>
          <option value="Hyderabad, India">Hyderabad, India</option>
          <option value="Kolkata, India">Kolkata, India</option>
          <option value="Chennai, India">Chennai, India</option>
          <option value="Goa - Dabolim Airport, India">Goa - Dabolim Airport, India</option>
          <option value="Dubai, United Arab Emirates">Dubai, United Arab Emirates</option>
        </select>
        <div className="selected-city">
          <strong>{fromCity.split(",")[0]}</strong>
          <div className="sub-text">{fromCity}</div>
        </div>
      </div>

       <MdOutlineChangeCircle className='change'/>
      <div className='flight-block'>
        <label className="label-text">To</label>
        <select
          className='Starting-point'
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        >
          <option value="Mumbai, India">Mumbai, India</option>
          <option value="New Delhi, India">New Delhi, India</option>
          <option value="Bangkok, Thailand">Bangkok, Thailand</option>
          <option value="Bengaluru, India">Bengaluru, India</option>
          <option value="Pune, India">Pune, India</option>
          <option value="Hyderabad, India">Hyderabad, India</option>
          <option value="Kolkata, India">Kolkata, India</option>
          <option value="Chennai, India">Chennai, India</option>
          <option value="Goa - Dabolim Airport, India">Goa - Dabolim Airport, India</option>
          <option value="Dubai, United Arab Emirates">Dubai, United Arab Emirates</option>
        </select>
        <div className="selected-city">
          <strong>{toCity.split(",")[0]}</strong>
          <div className="sub-text">{toCity}</div>
        </div>
      </div>

      <div>
        <label className="label-text">Departure</label>
      </div>
    </div>
  );
}

export default Flight;
