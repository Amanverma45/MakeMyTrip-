import Navbar from './Component/Navbar'
import Mainnavbar from './Component/Mainnavbar'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Flight from './Component/Flight'
import Hotel from './Component/Hotel'
import Villas from './Component/Villas'
import Holidaypackage from './Component/Holidaypackage'
import Train from './Component/Train'
import Buses from './Component/Buses'
import Cabs from './Component/Cabs'
import Tour from './Component/Tour'
import Visa from './Component/Visa'
import Cruise from './Component/Cruise'
import FCC from './Component/FCC'
import Travelinsurance from './Component/Travelinsurance'  
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainnavbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

       
        <Route path="/flight" element={<Flight />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/holidaypackages" element={<Holidaypackage />} />
        <Route path="/train" element={<Train />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/cruise" element={<Cruise />} />
        <Route path="/fcc" element={<FCC />} />
        <Route path="/travelinsurance" element={<Travelinsurance />} />
      </Routes>
    </div>
  )
}

export default App
