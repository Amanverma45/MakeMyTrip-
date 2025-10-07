import React, { useState, forwardRef } from 'react';
import { MdOutlineChangeCircle } from "react-icons/md";
import { SiOpenzeppelin } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Style/Flight.css";

const Flight = () => {
  const [fromCity, setFromCity] = useState("Mumbai, India");
  const [toCity, setToCity] = useState("Pune, India");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isDepartureOpen, setIsDepartureOpen] = useState(false);
  const [isReturnOpen, setIsReturnOpen] = useState(false);

  const DepartureButton = forwardRef(({ value }, ref) => (
    <button
      className="departure-btn"
      onClick={() => setIsDepartureOpen(!isDepartureOpen)}
      ref={ref}
    >
      Select Departure<FaAngleDown />
    </button>
  ));

  const ReturnButton = forwardRef(({ value }, ref) => (
    <button
      className="departure-btn1"
      onClick={() => setIsReturnOpen(!isReturnOpen)}
      ref={ref}
    >
      Select Return<FaAngleDown />
    </button>
  ));

  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className='flight-container'>

      <div className='flight-block'>
        <label className="label-text-from">From</label>
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

      <MdOutlineChangeCircle className='change' />

      <div className='flight-block'>
        <label className="label-text-to">To</label>
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

      <div className="departure-container">
        <label className="label-text-departure">Departure</label>
        <DatePicker
          selected={departureDate}
          onChange={(date) => {
            setDepartureDate(date);
            setIsDepartureOpen(false);
          }}
          open={isDepartureOpen}
          onClickOutside={() => setIsDepartureOpen(false)}
          dateFormat="dd MMM yyyy"
          customInput={<DepartureButton />}
        />
        {departureDate && <div className="selected-date">{departureDate.toDateString()}</div>}
      </div>

      <div className="departure-container">
        <label className="label-text-return">Return</label>
        <DatePicker
          selected={returnDate}
          onChange={(date) => {
            setReturnDate(date);
            setIsReturnOpen(false);
          }}
          open={isReturnOpen}
          onClickOutside={() => setIsReturnOpen(false)}
          dateFormat="dd MMM yyyy"
          customInput={<ReturnButton />}
        />
        {returnDate && <div className="selected-date">{returnDate.toDateString()}</div>}
      </div>
      <div className="departure-container">
        <label className="label-text-traveller-class">Travellers & Class</label>
      </div>
      <div className='special-fare'>
        <h4>Select a special fare</h4>
        <h1>EXTRA SAVINGS</h1>
      </div>
      <div className='Regular-fares'>
        <input type="radio" name="fare" value="regular" required />
        <div><strong>Regular</strong> <br /><p>Regular fares</p></div>
      </div>
      <div className='student-fares'>
        <input type="radio" name="fare" value="student" />
        <div><strong>Student</strong> <p>Extra discounts/baggage</p></div>
      </div>
      <div className='senior-fares'>
        <input type="radio" name="fare" value="senior" />
        <div><strong>Senior Citizen</strong> <p>Up to ₹600 off</p></div>
      </div>
      <div className='senior-fares'>
        <input type="radio" name="fare" value="armed_forces" />
        <div><strong>Armed Forces</strong> <p>Up to ₹600 off</p></div>
      </div>
      <div className='senior-fares'>
        <input type="radio" name="fare" value="doctors" />
        <div><strong>Doctor and Nurses</strong> <p>Up to ₹600 off</p></div>
      </div>
      <label class="checkbox-card">
        <input type="checkbox" name="zero_cancellation" value="yes" />
        <div class="checkbox-text">
          <strong>Add Zero Cancellation</strong>   <p>Get 100% refund on cancellation</p>
        </div>
      </label>

      <div className="views">
        <button onClick={() => setShowDetails(!showDetails)}>
          View Details
        </button>

        {showDetails && (
          <div className="view-details-container">
            <h1><SiOpenzeppelin className='zero' /> Zero Cancellation</h1>
            <h3>Starting at only ₹ 149 /traveller</h3>
            <h5>
              <TiTick className='tick' />  Instant full fare refund. <br />
              <TiTick className='tick' />  Hassle free online process.<br />
              <TiTick className='tick' />  Cancel for any reason. No questions    asked.<br />
              <TiTick className='tick' />  Avoid heavy cancellation penalties.<br /> <br /><br />
              <b>If you select this option, Zero Cancellation will be added to all your bookings. You can remove the selection easily at any point of time.</b><br /><br />
              Zero cancellation is based on availability and may vary depending on the specific itinerary selected. It is subject to change based on demand and operational reasons.
            </h5>
            <button
              className="ok-btn"
              onClick={() => setShowDetails(false)}
            >
              OK, Got it
            </button>
          </div>
        )}
      </div>
      <div className='search'>
        <button>SEARCH</button>
      </div>
    </div>
  );
};

export default Flight;
