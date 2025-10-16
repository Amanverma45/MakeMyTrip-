import React, { useState, forwardRef } from 'react';
import './Style/Hotel.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import { FaAngleDown } from "react-icons/fa";

const CheckInButton = forwardRef(({ value, onClick }, ref) => (
  <button className="checkin-btn" onClick={onClick} ref={ref}>
    {value || "Select CheckIn"} <FaAngleDown />
  </button>
));

const CheckOutButton = forwardRef(({ value, onClick }, ref) => (
  <button className="checkin-btn" onClick={onClick} ref={ref}>
    {value || "Select CheckOut"} <FaAngleDown />
  </button>
));

const Hotel = () => {
  const [bookingType, setBookingType] = useState("Upto 4 Rooms");
  const [selectCity, setSelectCity] = useState("Mumbai, India");
  const [checkinDate, setCheckInDate] = useState(null);
  const [checkoutDate, setCheckOutDate] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [priceDetails, setPriceDetails] = useState(false);
  const [price, setPrice] = useState("₹0 - ₹1500");

  return (
    <div className='hotel-container'>
      <div className='hotel-booking'>
        {/* Row of radios */}
        <div className='radio-row'>
          <label className='radio-card'>
            <input
              type="radio"
              name="booking"
              value="Upto 4 Rooms"
              checked={bookingType === "Upto 4 Rooms"}
              onChange={(e) => setBookingType(e.target.value)}
            />
            <strong>Upto 4 Rooms</strong>
          </label>

          <label className='radio-card'>
            <input type="radio" name="booking" value="Group Deals" checked={bookingType === "Group Deals"}
              onChange={(e) => setBookingType(e.target.value)} />
            <strong>Group Deals</strong>
          </label>
          <p>Book Domestic and International Property Online. To list your property <button>Click Here</button></p>
        </div>

        {bookingType === "Upto 4 Rooms" && (
          <div className="hotel-block">
            <div className="hotel-flex-row">
              <div className="hotelItem-of-upto-4-rooms">
                <label className="label-text1">City, Property name or Location</label>
                <select
                  className="City-select"
                  value={selectCity}
                  onChange={(e) => setSelectCity(e.target.value)}
                >
                  <option value="Mumbai, India">Mumbai, India</option>
                  <option value="New Delhi, India">New Delhi, India</option>
                  <option value="Bangkok, Thailand">Bangkok, Thailand</option>
                  <option value="Bengaluru, India">Bengaluru, India</option>
                  <option value="Pune, India">Pune, India</option>
                  <option value="Hyderabad, India">Hyderabad, India</option>
                  <option value="Kolkata, India">Kolkata, India</option>
                  <option value="Chennai, India">Chennai, India</option>
                  <option value="Goa">Goa</option>
                  <option value="Dubai">Dubai</option>
                </select>

                <div className="selected-city1">
                  <strong>{selectCity.split(",")[0]}</strong>
                </div>
              </div>

              {/* CheckIn */}
              <div className="hotel-item1">
                <label className="label-text1">Check-In</label>
                <DatePicker
                  selected={checkinDate}
                  onChange={(date) => setCheckInDate(date)}
                  dateFormat="dd MMM yyyy"
                  customInput={<CheckInButton />}
                />
                {checkinDate && (
                  <div className="selected-date">{checkinDate.toDateString()}</div>
                )}
              </div>

              {/* Checkout */}
              <div className="hotel-item1">
                <label className="label-text1">Check-Out</label>
                <DatePicker
                  selected={checkoutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  dateFormat="dd MMM yyyy"
                  customInput={<CheckOutButton />}
                />
                {checkoutDate && (
                  <div className="selected-date">{checkoutDate.toDateString()}</div>
                )}
              </div>

              {/* rooms and guests  */}

              <div className="hotel-item1">
                <button onClick={() => setShowDetails(!showDetails)}>
                  Rooms & Guests<FaAngleDown className='angle' />
                </button>

                {showDetails && (
                  <div className="rooms-guest">
                    <div className="room">
                      <h2>Room</h2>
                      <select>
                        <option value="">Select</option>
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

                    <div className="adult">
                      <h2>Adults</h2>
                      <select>
                        <option value="">Select</option>
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

                    <div className="child">
                      <div>
                        <h2>Children</h2>
                        <p className='childrens-age'>0 - 17 Years Old</p>
                      </div>
                      <select>
                        <option value="">Select</option>
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

                    <button className="apply-btn" onClick={() => setShowDetails(false)}>
                      <strong>Apply Now</strong>
                    </button>
                  </div>

                )}
                <div>
                </div>
              </div>
              <div className='hotel-item1-price-card'>
                <button onClick={() => setPriceDetails(!priceDetails)}>
                  Price Per Night<FaAngleDown className='angle' />
                </button>
                {priceDetails && (
                  <div className='price-card'>
                    <select className='price-card1'
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}>
                      <option>₹0 - ₹1500</option>
                      <option>₹1500 - ₹2500</option>
                      <option>₹2500 - ₹5000</option>
                      <option>₹5000+</option>
                    </select>
                    <div className="selected-price">
                      <strong>{price.split(",")[0]}</strong>
                    </div>
                  </div>
                )}
              </div>
              <div className='searches'>
                <h2>Trending Searches:</h2>
              </div>
              <div className='click button'>
                <button>GET ME BEST PRICES</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* open group deals  */}


      {bookingType === "Group Deals" && (
        <div className="hotel-block1">
          <div className="hotel-flex-row">
            <div className="hotelItem-of-GroupDeal">
              <label className="label-text1">City, Property name or Location</label>
              <select
                className="City-select"
                value={selectCity}
                onChange={(e) => setSelectCity(e.target.value)}
              >
                <option value="Mumbai, India">Mumbai, India</option>
                <option value="New Delhi, India">New Delhi, India</option>
                <option value="Bangkok, Thailand">Bangkok, Thailand</option>
                <option value="Bengaluru, India">Bengaluru, India</option>
                <option value="Pune, India">Pune, India</option>
                <option value="Hyderabad, India">Hyderabad, India</option>
                <option value="Kolkata, India">Kolkata, India</option>
                <option value="Chennai, India">Chennai, India</option>
                <option value="Goa">Goa</option>
                <option value="Dubai">Dubai</option>
              </select>

              <div className="selected-city1">
                <strong>{selectCity.split(",")[0]}</strong>
              </div>
            </div>

            {/* CheckIn */}
            <div className="hotel-item2">
              <label className="label-text1">Check-In</label>
              <DatePicker
                selected={checkinDate}
                onChange={(date) => setCheckInDate(date)}
                dateFormat="dd MMM yyyy"
                customInput={<CheckInButton />}
              />
              {checkinDate && (
                <div className="selected-date">{checkinDate.toDateString()}</div>
              )}
            </div>

            {/* Checkout */}
            <div className="hotel-item2">
              <label className="label-text1">Check-Out</label>
              <DatePicker
                selected={checkoutDate}
                onChange={(date) => setCheckOutDate(date)}
                dateFormat="dd MMM yyyy"
                customInput={<CheckOutButton />}
              />
              {checkoutDate && (
                <div className="selected-date">{checkoutDate.toDateString()}</div>
              )}
            </div>

            {/* rooms and guests  */}

            <div className="hotel-item2">
              <button onClick={() => setShowDetails(!showDetails)}>
                Rooms & Guests<FaAngleDown className='angle' />
              </button>

              {showDetails && (
                <div className="rooms-guest2">
                  <div className="room">
                    <h2>Room</h2>
                    <select>
                      <option value="">Select</option>
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

                  <div className="adult">
                    <h2>Adults</h2>
                    <select>
                      <option value="">Select</option>
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

                  <div className="child">
                    <div>
                      <h2>Children</h2>
                      <p className='childrens-age'>0 - 17 Years Old</p>
                    </div>
                    <select>
                      <option value="">Select</option>
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

                  <button className="apply-btn" onClick={() => setShowDetails(false)}>
                    <strong>Apply Now</strong>
                  </button>

                </div>

              )}
              <div>
              </div>
            </div>
          </div>
          <div className='searches'>
            <h2>Trending Searches:</h2>
          </div>
          <div className='click button'>
            <button>GET ME BEST PRICES</button>
          </div>
        </div>
      )}




    </div>
  );
};

export default Hotel;
