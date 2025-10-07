import React from 'react'
import { Link } from 'react-router-dom'
import { FaHotel ,FaHome ,FaUmbrella,FaCar} from "react-icons/fa";
import { SlPlane } from "react-icons/sl";
import { GiAirBalloon } from "react-icons/gi";
import { GiFishingBoat } from "react-icons/gi";
import { SiVisa } from "react-icons/si";
import { WiTrain } from "react-icons/wi";
import { GrBus } from "react-icons/gr";
import { FcCurrencyExchange } from "react-icons/fc";
import { FaShieldAlt } from "react-icons/fa";
import './Style/Mainnavbar.css'

const Mainnavbar = () => {
  return (
    <div className="main-navbar">
      <Link className='flight' to="/flights"><SlPlane />Flights</Link>
      <Link className='hotel' to="/hotels"><FaHotel />Hotels</Link>
      <Link className='villas' to="/villas"><FaHome />Homestays & Villas</Link>
      <Link className='holidaypackages' to="/holidaypackages"><FaUmbrella />Holiday Packages</Link>
      <Link className='train' to="/trains"><WiTrain />Trains</Link>
      <Link className='buses' to="/buses"><GrBus />Buses</Link>
      <Link className='cabs' to="/cabs"><FaCar />Cabs</Link>
      <Link className='tour' to="/tours"><GiAirBalloon />Tours & attractions</Link>
      <Link className='visa' to="/visa"><SiVisa />Visa</Link>
      <Link className='cruise' to="/cruise"><GiFishingBoat />Cruise</Link>
      <Link className='fcc' to="/fcc"><FcCurrencyExchange />Forex card & currency</Link>
      <Link className='travelinsurance' to="/travelinsurance"><FaShieldAlt />Travel insurance</Link>
    </div>
  )
}

export default Mainnavbar
