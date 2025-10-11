import React, { forwardRef, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import { FaAngleDown } from "react-icons/fa";
import './Style/Villas.css';

const CheckInButton = forwardRef(({ value, onClick }, ref) => {
  return (
    <button className='checkin-button' onClick={onClick} ref={ref}>
      {value || "Select CheckIn"}<FaAngleDown className='faangle' />
    </button>
  )
})

const CheckOutButton = forwardRef(({ value, onClick }, ref) => {
  return (
    <button className='checkout-button' onClick={onClick} ref={ref}>
      {value || "Select CheakOut"}<FaAngleDown className='faangle' />
    </button>
  )
})

const Villas = () => {
  const [selectCity, setSelectCity] = useState("Delhi");
  const [checkinDate, setCheckInDate] = useState(null);
  const [checkoutDate, setCheckOutDate] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [price, setPrice] = useState("₹0 - ₹1500")

  return (
    <div className='homestays-container'>
      <h3>Book your ideal Homestay - Villas, Apartments & more.</h3>
      <div className='heading'>
        <div className='city-checkin-checkout'>
          <div className='City-container'>
            <h4>City,PropertyName or Location</h4>
            <select
              className='select-city'
              value={selectCity}
              onChange={(e) => setSelectCity(e.target.value)}
            >

              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Goa">Goa</option>
              <option value="Chennai">Chennai</option>
              <option value="Dubai">Dubai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Bangkok">Bangkok</option>
              <option value="Singapore">Singapore</option>
              <option value="Pattaya">Pattaya</option>
              <option value="Phuket">Phuket</option>
            </select>
            <div className='selectedcity'>
              <strong>{selectCity.split(",")[0]}</strong>
            </div>
          </div>
        </div>

        {/* CheckiIn  */}
        <div className='checkin-container'>
          <label className='checkin-text'>CheckIn</label>
          <DatePicker
            selected={checkinDate}
            onChange={(date) => setCheckInDate(date)}
            dateFormat="dd MMM yyyy"
            customInput={<CheckInButton />}
          />
          {checkinDate && (
            <div className='selected-date-checkin'>
              {checkinDate.toDateString()}
            </div>
          )}
        </div>

        {/* CheckOut  */}
        <div className='checkout-container'>
          <label className='checkout-text'> CheckOut</label>
          <DatePicker
            selected={checkoutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd MMM yyyy"
            customInput={<CheckOutButton />}
          />
          {checkoutDate && (
            <div className='selected-date-checkout'>
              {checkoutDate.toDateString()}
            </div>
          )}
        </div>

        {/* Guest  */}

        <div className='Guest-container'>
          <button className='main-button' onClick={() => setShowDetails(!showDetails)}>
            Guests<FaAngleDown className='faangle-Guests' />
          </button>
          {
            showDetails && (
              <div className='guest-choice'>
                <div className='adult-row'>
                  <h2>Adult</h2>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className='child-row'>
                  <h2>Children <p>0 - 17 Years Old</p></h2>
                  <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <h5>Please provide right number of children along with their right age for best options and prices.</h5>
                <hr className='hr' />
                <div className='ageofchildren'>
                  <h3>Age of Children</h3>
                  <div className='child1'>
                    <h2>Child 1</h2>
                    <select>
                      <option value="">01 yr</option>
                      <option value="">02 yrs</option>
                      <option value="">03 yrs</option>
                      <option value="">04 yrs</option>
                      <option value="">05 yrs</option>
                      <option value="">06 yrs</option>
                      <option value="">07 yrs</option>
                      <option value="">08 yrs</option>
                      <option value="">09 yrs</option>
                      <option value="">10 yrs</option>
                      <option value="">11 yrs</option>
                      <option value="">12 yrs</option>
                      <option value="">13 yrs</option>
                      <option value="">14 yrs</option>
                      <option value="">15 yrs</option>
                      <option value="">16 yrs</option>
                      <option value="">17 yrs</option>
                    </select>
                  </div>
                  <div className='child2'>
                    <h2>Child 2</h2>
                    <select>
                      <option value="">01 yr</option>
                      <option value="">02 yrs</option>
                      <option value="">03 yrs</option>
                      <option value="">04 yrs</option>
                      <option value="">05 yrs</option>
                      <option value="">06 yrs</option>
                      <option value="">07 yrs</option>
                      <option value="">08 yrs</option>
                      <option value="">09 yrs</option>
                      <option value="">10 yrs</option>
                      <option value="">11 yrs</option>
                      <option value="">12 yrs</option>
                      <option value="">13 yrs</option>
                      <option value="">14 yrs</option>
                      <option value="">15 yrs</option>
                      <option value="">16 yrs</option>
                      <option value="">17 yrs</option>
                    </select>
                  </div>
                  <div className='child3'>
                    <h2>Child 3</h2>
                    <select>
                      <option value="">01 yr</option>
                      <option value="">02 yrs</option>
                      <option value="">03 yrs</option>
                      <option value="">04 yrs</option>
                      <option value="">05 yrs</option>
                      <option value="">06 yrs</option>
                      <option value="">07 yrs</option>
                      <option value="">08 yrs</option>
                      <option value="">09 yrs</option>
                      <option value="">10 yrs</option>
                      <option value="">11 yrs</option>
                      <option value="">12 yrs</option>
                      <option value="">13 yrs</option>
                      <option value="">14 yrs</option>
                      <option value="">15 yrs</option>
                      <option value="">16 yrs</option>
                      <option value="">17 yrs</option>
                    </select>
                  </div>

                  <div className='child4'>
                    <h2>Child 4</h2>
                    <select>
                      <option value="">01 yr</option>
                      <option value="">02 yrs</option>
                      <option value="">03 yrs</option>
                      <option value="">04 yrs</option>
                      <option value="">05 yrs</option>
                      <option value="">06 yrs</option>
                      <option value="">07 yrs</option>
                      <option value="">08 yrs</option>
                      <option value="">09 yrs</option>
                      <option value="">10 yrs</option>
                      <option value="">11 yrs</option>
                      <option value="">12 yrs</option>
                      <option value="">13 yrs</option>
                      <option value="">14 yrs</option>
                      <option value="">15 yrs</option>
                      <option value="">16 yrs</option>
                      <option value="">17 yrs</option>
                    </select>
                  </div>
                </div>
                <button className='btn' onClick={() => setShowDetails(false)}>Apply Now</button>
              </div>

            )
          }
        </div>

        {/* price  */}

        <div className='price-container'>
          <button className='price-button' onClick={() => setShowPrice(!showPrice)}>Price Per Night <FaAngleDown className='faangle-Guests' />
          </button>
          {showPrice && (
            <div className='price-box'>
              <select className='price-card2'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="₹0 - ₹1500">₹0 - ₹1500</option>
                <option value="₹1500 - ₹2500">₹1500 - ₹2500</option>
                <option value="₹2500 - ₹5000">₹2500 - ₹5000</option>
                <option value="₹5000+">₹5000+</option>
              </select>
              <div className='selected-price-of-HSV'>
                <strong>{price}</strong>
              </div>
            </div>
          )}

        </div>
      </div>
      <div className='last-btn'>
        <button className='home-stays-btn'>Search</button>
      </div>
    </div>
  )
}

export default Villas
