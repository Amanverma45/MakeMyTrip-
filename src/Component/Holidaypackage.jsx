import React, { forwardRef, useState, useRef } from 'react';
import './Style/Holidaypackage.css'
import { IoSearchSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaAngleDown, FaAngleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DepartureButton = forwardRef(({ value, onClick }, ref) => {
  return (
    <button className='Departure-button' onClick={onClick} ref={ref}>{value || "Departure Date"}<FaAngleDown /></button>
  )
})

const Holidaypackage = () => {
  const [bookingType, setBookingType] = useState("Search");
  const [fromCity, setFromCity] = useState("Ahmedabad, India");
  const [toCity, setToCity] = useState("Ahmedabad, India");
  const [departure, setDeparture] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const scrollRef = useRef(null);
  const lastminuteRef = useRef(null);
  const visafreeRef = useRef(null);
  const exploreholidayRef = useRef(null);
  const internationalRef = useRef(null);
  const offerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth / 2;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleScroll1 = (direction) => {
    const container = lastminuteRef.current;
    const scrollAmount = container.clientWidth / 2;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleScroll2 = (direction) => {
    const container = visafreeRef.current;
    const scrollAmount = container.clientWidth / 2;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleScroll3 = (direction) => {
    const container = exploreholidayRef.current;
    const scrollAmount = container.clientWidth / 2;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleScroll4 = (direction) => {
    const container = internationalRef.current;
    const scrollAmount = container.clientWidth / 2;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleScrolloffer = (direction) => {
    const container = offerRef.current;
    const scrollAmount = container.clientWidth / 2;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className='holidaypackage-container'>
      <div className='packages'>
        <div className='radio-buttons'>
          <label className='radio-1'>
            <input
              type="radio"
              name='booking'
              value="Search"
              checked={bookingType === "Search"}
              onChange={(e) => setBookingType(e.target.value)}
            />
            <strong><IoSearchSharp className='search-icon' />Search</strong>
          </label>

          <label className='radio-1'>
            <input
              type="radio"
              name='booking'
              value="Honeymoon"
              checked={bookingType === "Honeymoon"}
              onChange={(e) => setBookingType(e.target.value)}
            />
            <strong><img src="./Images/honeymoon.avif" alt="" />Honeymoon</strong>
          </label>

          <label className='radio-1'>
            <input
              type="radio"
              name='booking'
              value="Book1"
              checked={bookingType === "Book1"}
              onChange={(e) => setBookingType(e.target.value)}
            />
            <strong><img src="./Images/book.avif" alt="" />Book @1</strong>
          </label>

          <label className='radio-1'>
            <input
              type="radio"
              name='booking'
              value="Group-Tour-Package"
              checked={bookingType === "Group-Tour-Package"}
              onChange={(e) => setBookingType(e.target.value)}
            />
            <strong><img src="./Images/gtp.avif" alt="" />Group Tour package</strong>
          </label>

          <label className='radio-1'>
            <input
              type="radio"
              name='booking'
              value="Last-Minute-Deals"
              checked={bookingType === "Last-Minute-Deals"}
              onChange={(e) => setBookingType(e.target.value)}
            />
            <strong><img src="./Images/lmd.avif" alt="" />Last Minute Deals</strong>
          </label>
        </div>

        {/* Search  */}

        {bookingType === "Search" && (
          <div className='search-container'>
            <div className='from-city-container'>
              <div className='from-city'>
                <label>From City</label>
                <select className='from-city-starting-point'
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}>

                  <option value="Agartala, India">Agartala, India</option>
                  <option value="Agra, India">Agra, India</option>
                  <option value="Ahmedabad, India">Ahmedabad, India</option>
                  <option value="Aizawl, India">Aizawl, India</option>
                  <option value="Ajmer, India">Ajmer, India</option>
                  <option value="Alwar, India">Alwar, India</option>
                  <option value="Allahabad, India">Allahabad, India</option>
                  <option value="Amravati, India">Amravati, India</option>
                  <option value="Bangalore, India">Bangalore (Bengaluru), India</option>
                  <option value="Bareilly, India">Bareilly, India</option>
                  <option value="Belgaum, India">Belgaum, India</option>
                  <option value="Bhopal, India">Bhopal, India</option>
                  <option value="Bhubaneswar, India">Bhubaneswar, India</option>
                  <option value="Bilaspur, India">Bilaspur, India</option>
                  <option value="Chandigarh, India">Chandigarh, India</option>
                  <option value="Chennai, India">Chennai, India</option>
                  <option value="Coimbatore, India">Coimbatore, India</option>
                  <option value="Cuttack, India">Cuttack, India</option>
                  <option value="Darjeeling, India">Darjeeling, India</option>
                  <option value="Dehradun, India">Dehradun, India</option>
                  <option value="Delhi, India">Delhi, India</option>
                  <option value="Dhanbad, India">Dhanbad, India</option>
                  <option value="Durgapur, India">Durgapur, India</option>
                  <option value="Dubai, UAE">Dubai, UAE</option>
                  <option value="Erode, India">Erode, India</option>
                  <option value="Faridabad, India">Faridabad, India</option>
                  <option value="Gangtok, India">Gangtok, India</option>
                  <option value="Gaya, India">Gaya, India</option>
                  <option value="Ghaziabad, India">Ghaziabad, India</option>
                  <option value="Gurugram, India">Gurugram, India</option>
                  <option value="Guwahati, India">Guwahati, India</option>
                  <option value="Gwalior, India">Gwalior, India</option>
                  <option value="Haridwar, India">Haridwar, India</option>
                  <option value="Hubballi, India">Hubballi, India</option>
                  <option value="Hyderabad, India">Hyderabad, India</option>
                  <option value="Imphal, India">Imphal, India</option>
                  <option value="Indore, India">Indore, India</option>
                  <option value="Itanagar, India">Itanagar, India</option>
                  <option value="Jaipur, India">Jaipur, India</option>
                  <option value="Jalandhar, India">Jalandhar, India</option>
                  <option value="Jamshedpur, India">Jamshedpur, India</option>
                  <option value="Jodhpur, India">Jodhpur, India</option>
                  <option value="Kanpur, India">Kanpur, India</option>
                  <option value="Kochi, India">Kochi, India</option>
                  <option value="Kohima, India">Kohima, India</option>
                  <option value="Kolhapur, India">Kolhapur, India</option>
                  <option value="Kolkata, India">Kolkata, India</option>
                  <option value="Kota, India">Kota, India</option>
                  <option value="Lucknow, India">Lucknow, India</option>
                  <option value="Ludhiana, India">Ludhiana, India</option>
                  <option value="London, United Kingdom">London, United Kingdom</option>
                  <option value="Madurai, India">Madurai, India</option>
                  <option value="Mangalore, India">Mangalore, India</option>
                  <option value="Margao, India">Margao, India</option>
                  <option value="Meerut, India">Meerut, India</option>
                  <option value="Moradabad, India">Moradabad, India</option>
                  <option value="Mumbai, India">Mumbai, India</option>
                  <option value="Mysuru, India">Mysuru, India</option>
                  <option value="Nanded, India">Nanded, India</option>
                  <option value="Nagpur, India">Nagpur, India</option>
                  <option value="Nashik, India">Nashik, India</option>
                  <option value="New York, USA">New York, USA</option>
                  <option value="Noida, India">Noida, India</option>
                  <option value="Panaji, India">Panaji, India</option>
                  <option value="Paris, France">Paris, France</option>
                  <option value="Patna, India">Patna, India</option>
                  <option value="Port Blair, India">Port Blair, India</option>
                  <option value="Pune, India">Pune, India</option>
                  <option value="Puri, India">Puri, India</option>
                  <option value="Raipur, India">Raipur, India</option>
                  <option value="Rajkot, India">Rajkot, India</option>
                  <option value="Ranchi, India">Ranchi, India</option>
                  <option value="Rewa, India">Rewa, India</option>
                  <option value="Rishikesh, India">Rishikesh, India</option>
                  <option value="Salem, India">Salem, India</option>
                  <option value="Satna, India">Satna, India</option>
                  <option value="Shillong, India">Shillong, India</option>
                  <option value="Shimla, India">Shimla, India</option>
                  <option value="Siliguri, India">Siliguri, India</option>
                  <option value="Singapore, Singapore">Singapore, Singapore</option>
                  <option value="Solapur, India">Solapur, India</option>
                  <option value="Srinagar, India">Srinagar, India</option>
                  <option value="Surat, India">Surat, India</option>
                  <option value="Sydney, Australia">Sydney, Australia</option>
                  <option value="Thrissur, India">Thrissur, India</option>
                  <option value="Thiruvananthapuram, India">Thiruvananthapuram, India</option>
                  <option value="Tiruchirappalli, India">Tiruchirappalli, India</option>
                  <option value="Tirunelveli, India">Tirunelveli, India</option>
                  <option value="Tirupati, India">Tirupati, India</option>
                  <option value="Tokyo, Japan">Tokyo, Japan</option>
                  <option value="Toronto, Canada">Toronto, Canada</option>
                  <option value="Udaipur, India">Udaipur, India</option>
                  <option value="Vadodara, India">Vadodara, India</option>
                  <option value="Varanasi, India">Varanasi, India</option>
                  <option value="Vijayawada, India">Vijayawada, India</option>
                  <option value="Visakhapatnam, India">Visakhapatnam, India</option>
                </select>
                <div className="selected-city1">
                  <strong>{fromCity.split(",")[0]}</strong>
                </div>
              </div>
              <div className='to-city'>
                <label>To City/Country/Category</label>
                <select className='to-city-starting-point'
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}>

                  <option value="Agartala, India">Agartala, India</option>
                  <option value="Agra, India">Agra, India</option>
                  <option value="Ahmedabad, India">Ahmedabad, India</option>
                  <option value="Aizawl, India">Aizawl, India</option>
                  <option value="Ajmer, India">Ajmer, India</option>
                  <option value="Alwar, India">Alwar, India</option>
                  <option value="Allahabad, India">Allahabad, India</option>
                  <option value="Amravati, India">Amravati, India</option>
                  <option value="Bangalore, India">Bangalore (Bengaluru), India</option>
                  <option value="Bareilly, India">Bareilly, India</option>
                  <option value="Belgaum, India">Belgaum, India</option>
                  <option value="Bhopal, India">Bhopal, India</option>
                  <option value="Bhubaneswar, India">Bhubaneswar, India</option>
                  <option value="Bilaspur, India">Bilaspur, India</option>
                  <option value="Chandigarh, India">Chandigarh, India</option>
                  <option value="Chennai, India">Chennai, India</option>
                  <option value="Coimbatore, India">Coimbatore, India</option>
                  <option value="Cuttack, India">Cuttack, India</option>
                  <option value="Darjeeling, India">Darjeeling, India</option>
                  <option value="Dehradun, India">Dehradun, India</option>
                  <option value="Delhi, India">Delhi, India</option>
                  <option value="Dhanbad, India">Dhanbad, India</option>
                  <option value="Durgapur, India">Durgapur, India</option>
                  <option value="Dubai, UAE">Dubai, UAE</option>
                  <option value="Erode, India">Erode, India</option>
                  <option value="Faridabad, India">Faridabad, India</option>
                  <option value="Gangtok, India">Gangtok, India</option>
                  <option value="Gaya, India">Gaya, India</option>
                  <option value="Ghaziabad, India">Ghaziabad, India</option>
                  <option value="Gurugram, India">Gurugram, India</option>
                  <option value="Guwahati, India">Guwahati, India</option>
                  <option value="Gwalior, India">Gwalior, India</option>
                  <option value="Haridwar, India">Haridwar, India</option>
                  <option value="Hubballi, India">Hubballi, India</option>
                  <option value="Hyderabad, India">Hyderabad, India</option>
                  <option value="Imphal, India">Imphal, India</option>
                  <option value="Indore, India">Indore, India</option>
                  <option value="Itanagar, India">Itanagar, India</option>
                  <option value="Jaipur, India">Jaipur, India</option>
                  <option value="Jalandhar, India">Jalandhar, India</option>
                  <option value="Jamshedpur, India">Jamshedpur, India</option>
                  <option value="Jodhpur, India">Jodhpur, India</option>
                  <option value="Kanpur, India">Kanpur, India</option>
                  <option value="Kochi, India">Kochi, India</option>
                  <option value="Kohima, India">Kohima, India</option>
                  <option value="Kolhapur, India">Kolhapur, India</option>
                  <option value="Kolkata, India">Kolkata, India</option>
                  <option value="Kota, India">Kota, India</option>
                  <option value="Lucknow, India">Lucknow, India</option>
                  <option value="Ludhiana, India">Ludhiana, India</option>
                  <option value="London, United Kingdom">London, United Kingdom</option>
                  <option value="Madurai, India">Madurai, India</option>
                  <option value="Mangalore, India">Mangalore, India</option>
                  <option value="Margao, India">Margao, India</option>
                  <option value="Meerut, India">Meerut, India</option>
                  <option value="Moradabad, India">Moradabad, India</option>
                  <option value="Mumbai, India">Mumbai, India</option>
                  <option value="Mysuru, India">Mysuru, India</option>
                  <option value="Nanded, India">Nanded, India</option>
                  <option value="Nagpur, India">Nagpur, India</option>
                  <option value="Nashik, India">Nashik, India</option>
                  <option value="New York, USA">New York, USA</option>
                  <option value="Noida, India">Noida, India</option>
                  <option value="Panaji, India">Panaji, India</option>
                  <option value="Paris, France">Paris, France</option>
                  <option value="Patna, India">Patna, India</option>
                  <option value="Port Blair, India">Port Blair, India</option>
                  <option value="Pune, India">Pune, India</option>
                  <option value="Puri, India">Puri, India</option>
                  <option value="Raipur, India">Raipur, India</option>
                  <option value="Rajkot, India">Rajkot, India</option>
                  <option value="Ranchi, India">Ranchi, India</option>
                  <option value="Rewa, India">Rewa, India</option>
                  <option value="Rishikesh, India">Rishikesh, India</option>
                  <option value="Salem, India">Salem, India</option>
                  <option value="Satna, India">Satna, India</option>
                  <option value="Shillong, India">Shillong, India</option>
                  <option value="Shimla, India">Shimla, India</option>
                  <option value="Siliguri, India">Siliguri, India</option>
                  <option value="Singapore, Singapore">Singapore, Singapore</option>
                  <option value="Solapur, India">Solapur, India</option>
                  <option value="Srinagar, India">Srinagar, India</option>
                  <option value="Surat, India">Surat, India</option>
                  <option value="Sydney, Australia">Sydney, Australia</option>
                  <option value="Thrissur, India">Thrissur, India</option>
                  <option value="Thiruvananthapuram, India">Thiruvananthapuram, India</option>
                  <option value="Tiruchirappalli, India">Tiruchirappalli, India</option>
                  <option value="Tirunelveli, India">Tirunelveli, India</option>
                  <option value="Tirupati, India">Tirupati, India</option>
                  <option value="Tokyo, Japan">Tokyo, Japan</option>
                  <option value="Toronto, Canada">Toronto, Canada</option>
                  <option value="Udaipur, India">Udaipur, India</option>
                  <option value="Vadodara, India">Vadodara, India</option>
                  <option value="Varanasi, India">Varanasi, India</option>
                  <option value="Vijayawada, India">Vijayawada, India</option>
                  <option value="Visakhapatnam, India">Visakhapatnam, India</option>
                </select>
                <div className="selected-city1">
                  <strong>{toCity.split(",")[0]}</strong>
                </div>
              </div>
              <div className='departure-container-hp'>
                <label className='Departure-text'>Departure </label>
                <DatePicker
                  selected={departure}
                  onChange={(date) => setDeparture(date)}
                  dateFormat="dd MMM yyyy"
                  customInput={<DepartureButton />}
                />
                {departure && (
                  <div className='selected-date-departure-search'>
                    {departure.toDateString()}
                  </div>
                )}
              </div>

              {/* Guest  */}

              <div className='R-G-container'>
                <button className='Room-guests-button' onClick={() => setShowDetails(!showDetails)}>
                  Rooms & Guests<FaAngleDown className='faangle-Guests' />
                </button>
                {
                  showDetails && (
                    <div className='guest-choice1'>
                      <div className='adult-line'>
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
                      <div className='child-line'>
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
                      <div className='ageofchildren-line'>
                        <h3>Age of Children</h3>
                        <div className='child1-contain'>
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
                        <div className='child2-contain'>
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
                        <div className='child3-contain'>
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

                        <div className='child4-contain'>
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
                      <button className='SUBMIT-btn' onClick={() => setShowDetails(false)}>Submit Now</button>
                    </div>
                  )}
              </div>
              <div className='search-search-button'>
                <button>SEARCH</button>
              </div>
            </div>
          </div>
        )}

        {/* honeymoon  */}

        {bookingType === "Honeymoon" && (
          <div className='booking-container'>
            <div className='booking-1st'>
              <h1>MakeMyTrip Honeymoon Packages</h1>
            </div>
            <h2><FaAngleRight className='right-angle' /></h2>
            <div className='honeymoon-packeages'>
              <button>Maldives</button>
              <button>Bali</button>
              <button>Thailand</button>
              <button>Mauritius</button>
              <button>Vietnam</button>
            </div>
            <div className='honeymoon-packeages'>
              <button>Himachal Pradesh</button>
              <button>South India</button>
              <button>Andaman</button>
              <button>Goa</button>
              <button>Kerala</button>
            </div>
            <div className='trending'>
              <img src="./Images/trending.avif" alt="trnding" /><p>Trending</p>
            </div>
            <div className='trending'>
              <img src="./Images/budget.avif" alt="trnding" /><p>Bucket List</p>
            </div>
            <div className='trending'>
              <img src="./Images/tripFinder.avif" alt="trnding" /><p>Trip Finder</p>
            </div>
            <div className='trending'>
              <img src="./Images/viewAll.avif" alt="trnding" /><p>View All</p>
            </div>
          </div>
        )}

        {/* Book @1 */}

        {bookingType === "Book1" && (
          <div className='booking-container'>
            <div className='booking-1st'>
              <h1>Book 1@</h1>
            </div>
            <h2><FaAngleRight className='right-angle' /></h2>
            <div className='honeymoon-packeages'>
              <button>Kerela</button>
              <button>Andmaan</button>
              <button>Mauritius</button>
              <button>Goa</button>
              <button>North East</button>
              <button>Almaty</button>
            </div>
            <div className='honeymoon-packeages'>
              <button>Indonesia</button>
              <button>Thailand</button>
              <button>Maldives</button>
              <button>Bhutan</button>
              <button>Dubai</button>
              <button>Uttarakhand</button>
            </div>
            <div className='trending'>
              <img src="./Images/domestic.avif" alt="trnding" /><p>Domestic</p>
            </div>
            <div className='trending'>
              <img src="./Images/International.avif" alt="trnding" /><p>International</p>
            </div>
            <div className='trending'>
              <img src="./Images/Viewallll.avif" alt="trnding" /><p>View All</p>
            </div>
          </div>
        )}

        {/* GourTourPackages  */}

        {bookingType === "Group-Tour-Package" && (
          <div className='booking-container'>
            <div className='booking-1st'>
              <h1>Expertly Planned Group Tours</h1>
            </div>
            <h2><FaAngleRight className='right-angle' /></h2>
            <div className='honeymoon-packeages'>
              <button>Europe</button>
              <button>Japan</button>
              <button>Australia</button>
              <button>South Africa</button>
              <button>Singapore</button>
            </div>
            <div className='honeymoon-packeages'>
              <button>Andmaan</button>
              <button>Char Dham</button>
              <button>Kashmir</button>
              <button>Sri Lanka</button>
              <button>Bhutan</button>
            </div>
            <div className='trending'>
              <img src="./Images/DOM Group.avif" alt="trnding" /><p>Domestic</p>
            </div>
            <div className='trending'>
              <img src="./Images/quickfly.avif" alt="trnding" /><p>Quick Fly</p>
            </div>
            <div className='trending'>
              <img src="./Images/Group LH.avif" alt="trnding" /><p>Bucket List</p>
            </div>
            <div className='trending'>
              <img src="./Images/Group View all2.avif" alt="trnding" /><p>View All</p>
            </div>
          </div>
        )}

        {/* LastMinuteDeals  */}

        {bookingType === "Last-Minute-Deals" && (
          <div className='booking-container'>
            <div className='booking-1st'>
              <h1>Because the best trips are last-minute!</h1>
            </div>
            <h2><FaAngleRight className='right-angle' /></h2>
            <div className='honeymoon-packeages'>
              <button>Goa</button>
              <button>South Africa</button>
              <button>Kerela</button>
              <button>Rajasthan</button>
              <button>Himachal Pradesh</button>
            </div>
            <div className='honeymoon-packeages'>
              <button>Maharashtra</button>
              <button>Uttar Predesh</button>
              <button>Uttarakhand</button>
              <button>North East</button>
              <button>Andmaan</button>
            </div>
            <div className='trending'>
              <img src="./Images/Jet Set Easy- A.avif" alt="trnding" /><p>Jet Set Easy</p>
            </div>
            <div className='trending'>
              <img src="./Images/Mini Moon.avif" alt="trnding" /><p>Mini Moon</p>
            </div>
            <div className='trending'>
              <img src="./Images/Staycation.avif" alt="trnding" /><p>Staycation</p>
            </div>
            <div className='trending'>
              <img src="./Images/Last Min Deals- A.avif" alt="trnding" /><p>View All</p>
            </div>
          </div>
        )}
      </div>

      {/* Best-Selling-deal  */}

      <div className='holiday-container2'>
        <h1>Best Selling Destinations</h1>
        <p>Top trending Holiday Packages!</p>
        <div className='All-tours' ref={scrollRef}>
          <div className='angle-buttons'>
            <button className='scroll-btn-right' onClick={() => handleScroll('right')}>
              <FaChevronRight />
            </button>
            <button className='scroll-btn-left' onClick={() => handleScroll('left')}>
              <FaChevronLeft />
            </button>
          </div>
          <div className='special-tours'>
            <img src="./Images/img1.webp" alt="" /><p>Phu Quoc Fly Direct</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Andaman.avif" alt="" /><p>Andaman</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Thailand.avif" alt="" /><p>Thailand</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Goa.avif" alt="" /><p>Goa</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Maldives.webp" alt="" /><p>Maldives</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Kerala.webp" alt="" /><p>Kerala</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Dubai.webp" alt="" /><p>Dubai</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Ooty&Coorg.avif" alt="" /><p>Ooty&Coorg</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Himachal.avif" alt="" /><p>Himachal</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Europe.webp" alt="" /><p>Europe</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Bali.webp" alt="" /><p>Bali</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Rajasthan.avif" alt="" /><p>Rajasthan</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Singapore.avif" alt="" /><p>Singapore</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Uttarakhand.avif" alt="" /><p>Uttarakhand</p>
          </div>
          <div className='special-tours'>
            <img src="./Images/Sri Lanka.avif" alt="" /><p>Sri Lanka </p>
          </div>
        </div>
      </div>

      {/* last-minute Deals */}

      <div className='holiday-container3'>
        <h1>Last-minute Deals</h1>
        <p>Apply code LASTMIN to lock the lowest prices on last- minute holidays!</p>
        <div className='angle-buttons3'>
          <button className='scroll-btn-right3' onClick={() => handleScroll1('right')}>
            <FaChevronRight />
          </button>
          <button className='scroll-btn-left3' onClick={() => handleScroll1('left')}>
            <FaChevronLeft />
          </button>
        </div>
        <div className='All-tours3' ref={lastminuteRef}>
          <div className='special-tours1'>
            <img src="./Images/Goa1X.webp" alt="" /><p>Goa</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/SI.webp" alt="" /><p>Andaman</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/Shimla & Manali.avif" alt="" /><p>Shimla & Manali</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/Rajasthan1X.avif" alt="" /><p>Rajasthan</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/Kashmir1X.avif" alt="" /><p>Kashmir</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/Kerala1x.avif" alt="" /><p>Kerala</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/uk1.avif" alt="" /><p>Uttarakhand</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/Andaman1.avif" alt="" /><p>Andaman</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/UttarPredesh.avif" alt="" /><p>Uttar Predesh</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/NE1.avif" alt="" /><p>North East</p>
          </div>
          <div className='special-tours1'>
            <img src="./Images/Maharashtra1.webp" alt="" /><p>Maharashtra</p>
          </div>

        </div>
      </div>

      {/* Visa free destination */}

      <div className='holiday-container4'>
        <h1>Visa Free Destinations</h1>
        <p>Up to 30% off! Limited time offer</p>
        <div className='angle-buttons4'>
          <button className='scroll-btn-right4' onClick={() => handleScroll2('right')}>
            <FaChevronRight />
          </button>
          <button className='scroll-btn-left4' onClick={() => handleScroll2('left')}>
            <FaChevronLeft />
          </button>
        </div>
        <div className='All-tours4' ref={visafreeRef}>
          <div className='special-tours2'>
            <img src="./Images/phuket11.webp" alt="" />
            <strong>Thailand</strong>
            <p>Starting at ₹40,000 Per Person</p>
          </div>
          <div className='special-tours2'>
            <img src="./Images/Grand Park.avif" alt="" />
            <strong>Maldives</strong>
            <p>Starting at ₹18,600 Per Person</p>
          </div>
          <div className='special-tours2'>
            <img src="./Images/Sri lanka (1).avif" alt="" />
            <strong>Sri Lanka</strong>
            <p>Starting at ₹52,000 Per Person</p>
          </div>
          <div className='special-tours2'>
            <img src="./Images/Almaty.avif" alt="" />
            <strong>Almaty</strong>
            <p>Starting at ₹27,000 Per Person</p>
          </div>
          <div className='special-tours2'>
            <img src="./Images/Vietnam.avif" alt="" />
            <strong>Vietnam</strong>
            <p>Starting at ₹9,400 Per Person</p>
          </div>
          <div className='special-tours2'>
            <img src="./Images/Malaysia.avif" alt="" />
            <strong>Malaysia</strong>
            <p>Starting at ₹53,200 Per Person</p>
          </div>
          <div className='special-tours2'>
            <img src="./Images/HK.jpg" alt="" />
            <strong>Honk Kong</strong>
          </div>
          <div className='special-tours2'>
            <img src="./Images/Seychelles.avif" alt="" />
            <strong>Seychelles</strong>
          </div>
        </div>
      </div>

      {/* Explore holiday by theme*/}

      <div className='holiday-container5'>
        <div className='girl-section'>
          <img src="./Images/girl.png" alt="" />
          <div className='explore'>
            <h2>EXPLORE</h2>
            <h1>HOLIDAYS</h1>
            <h3>BY THEMES</h3>
            <p>Pick from our specially curated <br />packages</p>
          </div>
        </div>
        <div className='angle-buttons4'>
          <button className='scroll-btn-right4' onClick={() => handleScroll3('right')}>
            <FaChevronRight />
          </button>
          <button className='scroll-btn-left4' onClick={() => handleScroll3('left')}>
            <FaChevronLeft />
          </button>
        </div>
        <div className='All-tours5' ref={exploreholidayRef}>
          <div className='Explore-contain'>
            <div className='card-explores'>
              <img src="./Images/Honeymoon_category.avif" alt="" />
              <strong>HONEYMOON</strong>
              <div className='para'>
                <p>Trip Finder</p>
                <p>Bucket List</p>
                <p>Trending</p>
                <p>Top choices</p>
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className='Explore-contain'>
            <div className='card-explores'>
              <img src="./Images/Senios.avif" alt="" />
              <strong>SENIOR GROUP TOUR</strong>
              <div className='para'>
                <p>Europe</p>
                <p>Maldives</p>
                <p>Dubai</p>
                <p>Pilgrimage</p>
                <p>Egypy</p>
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className='Explore-contain'>
            <div className='card-explores'>
              <img src="./Images/Pilgrimage.avif" alt="" />
              <strong>PILGRIMAGE</strong>
              <div className='para'>
                <p>Uttar Pradesh</p>
                <p>South India</p>
                <p>Gujarat</p>
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className='Explore-contain'>
            <div className='card-explores'>
              <img src="./Images/GT.avif" alt="" />
              <strong>GROUP TOURS</strong>
              <div className='para'>
                <p>Europe</p>
                <p>Australia</p>
                <p>Sri Lanka</p>
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className='Explore-contain'>
            <div className='card-explores'>
              <img src="./Images/LH.avif" alt="" />
              <strong>LUXU HOLIDAYS</strong>
              <div className='para'>
                <p>Beach</p>
                <p>Cultural</p>
                <p>Island</p>
                <p>Hill</p>
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className='Explore-contain'>
            <div className='card-explores'>
              <img src="./Images/Family on beach.avif" alt="" />
              <strong>FAMILY & KIDS SPECIAL</strong>
              <div className='para'>
                <p>Domestic</p>
                <p>International</p>
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/*International Destinations! */}

      <div className='holiday-container-6'>
        <h1>International Destinations!</h1>
        {/* <p>Up to 30% off! Limited time offer</p> */}
        <div className='angle-buttons-6'>
          <button className='scroll-btn-right-6' onClick={() => handleScroll4('right')}>
            <FaChevronRight />
          </button>
          <button className='scroll-btn-left-6' onClick={() => handleScroll4('left')}>
            <FaChevronLeft />
          </button>
        </div>
        <div className='All-tours-6' ref={internationalRef}>
          <div className='packages-6'>
            <img src="./Images/th.avif" alt="" />
            <strong>Thailand</strong>
            <p>Starting at ₹40,400 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/md.avif" alt="" />
            <strong>Maldives</strong>
            <p>Starting at ₹30,800 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/jp.avif" alt="" />
            <strong>Japan</strong>
            <p>Starting at ₹2,82,000 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/bl.avif" alt="" />
            <strong>Bali</strong>
          </div>
          <div className='packages-6'>
            <img src="./Images/db.avif" alt="" />
            <strong>Dubai</strong>
            <p>Starting at ₹19,700 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/vt.avif" alt="" />
            <strong>Vietnam</strong>
            <p>Starting at ₹92,900 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/ep.avif" alt="" />
            <strong>Europe</strong>
            <p>Starting at ₹2,10,200 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/sp.avif" alt="" />
            <strong>Singapore</strong>
            <p>Starting at ₹69,900 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/ml.avif" alt="" />
            <strong>Malaysia</strong>
            <p>Starting at ₹48,700 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/sl.avif" alt="" />
            <strong>Sri Lanka</strong>
            <p>Starting at ₹77,300 Per Person</p>
          </div>
          <div className='packages-6'>
            <img src="./Images/mt.avif" alt="" />
            <strong>Mauritius</strong>
            <p>Starting at ₹36,500 Per Person</p>
          </div>
        </div>
      </div>

      {/* offer  */}

      <div className='offers-container'>
        <div className='offers-packages'>
          <div className='radio-click-buttons'>
            <div className='offers-radioline'>
              <h1>Offers</h1>
              <label className='rdo'>
                <input
                  type="radio"
                  name='Holiday'
                  value="Holiday"
                  checked={bookingType === "Holiday"}
                  onChange={(e) => setBookingType(e.target.value)}
                />
                <b>Holidays</b>
              </label>

              <label className='holiday-radio'>
                <input
                  type="radio"
                  name='alloffers'
                  value="All-offers"
                  checked={bookingType === "All-offers"}
                  onChange={(e) => setBookingType(e.target.value)}
                />
                <b>All Offers</b>
              </label>

              <label className='holiday-radio'>
                <input
                  type="radio"
                  name='hotel'
                  value="Hotel"
                  checked={bookingType === "Hotel"}
                  onChange={(e) => setBookingType(e.target.value)}
                />
                <b>Hotels</b>
              </label>

              <label className='holiday-radio'>
                <input
                  type="radio"
                  name='flight'
                  value="Flight"
                  checked={bookingType === "Flight"}
                  onChange={(e) => setBookingType(e.target.value)}
                />
                <b>Flights</b>
              </label>

              <label className='holiday-radio'>
                <input
                  type="radio"
                  name='bus'
                  value="Bus"
                  checked={bookingType === "Bus"}
                  onChange={(e) => setBookingType(e.target.value)}
                />
                <b>Buses</b>
              </label>

              <label className='holiday-radio'>
                <input
                  type="radio"
                  name='bank-offers'
                  value="Bank-offers"
                  checked={bookingType === "Bank-offers"}
                  onChange={(e) => setBookingType(e.target.value)}
                />
                <b>Bank-offers</b>
              </label>

              <label className='holiday-radio'>
                <input
                  type="radio"
                  name='activities'
                  value="Activities"
                  checked={bookingType === "Activities"}
                  onChange={(e) => setBookingType(e.target.value)}
                />
                <b>Activities</b>
              </label>
              <button className='viev-all-offer'>VIEW ALL<FaLongArrowAltRight className='va-arrow' /></button>
              <div className='angle-btn-slide'>
                <button className='scroll-btn-left-offer' onClick={() => handleScrolloffer('left')}>
                  <FaChevronLeft />
                </button>
                <button className='scroll-btn-right-offer' onClick={() => handleScrolloffer('right')}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
            {bookingType === "Holiday" && (
              <div className='container-offer' ref={offerRef}>
                <div className='first-offer-card'>
                  <img src="./Images/indiamost.avif" alt="" />
                  <div className='first-off-text'>
                    <h5>T&C'S APPLY</h5>
                    <strong>Live Now: Last-minute-Deals on Packages for you. </strong>
                    <p>Book your trip for the upcoming festive long weekend, Use Code:MOSTWANTED</p>
                    <button className='fist-off-button'>BOOK NOW</button>
                  </div>
                </div>

                <div className='second-offer-card'>
                  <img src="./Images/free-emi.webp" alt="" />
                  <div className='second-off-text'>
                    <h5>T&C'S APPLY</h5>
                    <strong>Grab Up to 35% OFF* + Interest-FREE*EMI</strong>
                    <p>on domestic & international flight, stays and holiday packages!</p>
                    <button className='second-off-button'>BOOK NOW</button>
                  </div>
                </div>

                <div className='second-offer-card'>
                  <img src="./Images/kotak.jpg" alt="" />
                  <div className='second-off-text'>
                    <h5>T&C'S APPLY</h5>
                    <strong>Travel All Around the World with Up to 25% OFF </strong>
                    <p>on flight and hotel</p>
                    <button className='second-off-button'>BOOK NOW</button>
                  </div>
                </div>
                <div className='second-offer-card'>
                  <img src="./Images/federal.avif" alt="" />
                  <div className='second-off-text'>
                    <h5>T&C'S APPLY</h5>
                    <strong>Up to 25% OFF* +INTEREST-FREE* EMI</strong>
                    <p>on flight,hotels & holiday packages</p>
                    <button className='second-off-button'>BOOK NOW</button>
                  </div>
                </div>

                <div className='second-offer-card'>
                  <img src="./Images/yes.webp" alt="" />
                  <div className='second-off-text'>
                    <h5>T&C'S APPLY</h5>
                    <strong>Avail Interest-free EMI* + Up to 35% OFF*</strong>
                    <p>on flight,hotels & holiday packages in India and abroad</p>
                    <button className='second-off-button'>BOOK NOW</button>
                  </div>
                </div>

                <div className='second-offer-card'>
                  <img src="./Images/idbi.avif" alt="" />
                  <div className='second-off-text'>
                    <h5>T&C'S APPLY</h5>
                    <strong>Save Big on Festive Gateways</strong>
                    <p>with upto 15% OFF* on Flights,Hotels,Buses & Cabs</p>
                    <button className='second-off-button'>BOOK NOW</button>
                  </div>
                </div>

                <div className='second-offer-card'>
                  <img src="./Images/gn.avif" alt="" />
                  <div className='second-off-text'>
                    <h5>T&C'S APPLY</h5>
                    <strong>GOOD NEWS FOR YOUR NEXT TRIP:</strong>
                    <p>Grab Up to 20% OFF* on flights, hotels and holiday packages!</p>
                    <button className='second-off-button'>BOOK NOW</button>
                  </div>
                </div>

                <div className='second-offer-card'>
                  <img src="./Images/sf.webp" alt="" />
                  <div className='second-off-text'>
                    <h5>T&C'S APPLY</h5>
                    <strong>SAVE MORE, TRAVEL MORE:</strong>
                    <p>Grab Upto 15% OFF* on flights, hotels, buses & outstation cabs</p>
                    <button className='second-off-button'>BOOK NOW</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* country-pack  */}
      <div className='country-pakages-last'>
        <div className='country-card-last'>
          <img src="./Images/q.webp" alt="" />
          <div className='txt-kashmir'>
            <strong>Kashmir</strong>
            <p>Kashmir Tour Packages , Kashmir Tourism, Kashmir Honeymoon Packages</p>
          </div>
        </div>
        <div className='country-card-last'>
          <img src="./Images/w.webp" alt="" />
          <div className='txt-kashmir'>
          <strong>Andaman</strong>
          <p>Andaman Tour Packages , Andaman Tourism, Andaman Honeymoon Packages</p></div>
        </div>
        <div className='country-card-last'>
          <img src="./Images/e.webp" alt="" />
          <div className='txt-kashmir'>
            <strong>Ladakh</strong>
            <p>Ladakh Tour Packages , Ladakh Tourism, Ladakh Honeymoon Packages</p></div>
        </div>
        <div className='country-card-last'>
          <img src="./Images/r.avif" alt="" />
          <div className='txt-kashmir'>
            <strong>North East</strong>
            <p>North East Tour Packages , North East India Tourism, North East India Honeymoon Packages</p></div>
        </div>
        <div className='country-card-last'>
          <img src="./Images/t.avif" alt="" />
          <div className='txt-kashmir'>
            <strong>Goa</strong>
            <p>Goa Tour Packages , Goa Tourism, Goa Honeymoon Packages</p></div>
        </div>
        <div className='country-card-last'>
          <img src="./Images/y.avif" alt="" />
          <div className='txt-kashmir'>
            <strong>Kerala</strong>
            <p>Kerala Tour Packages , Kerala Tourism, Kerala Honeymoon Packages</p></div>
        </div>
        <div className='country-card-last'>
          <img src="./Images/u.avif" alt="" />
          <div className='txt-kashmir'>
            <strong>Maldives</strong>
            <p>Maldives Tour Packages , Maldives Tourism, Maldives Honeymoon Packages</p></div>
        </div>
        <div className='country-card-last'>
          <img src="./Images/i.avif" alt="" />
          <div className='txt-kashmir'>
            <strong>Sri Lanka</strong>
            <p>Sri Lanka Tour Packages , Sri lanka Tourism, Sri Lanka Honeymoon Packages</p>
          </div>
        </div>
        <div className='country-card-last'>
          <img src="./Images/o.avif" alt="" />
          <div className='txt-kashmir'>
            <strong>Dubai</strong>
            <p>Dubai Tour Packages , Dubai Tourism, Dubai Honeymoon Packages</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Holidaypackage
