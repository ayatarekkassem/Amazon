import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Electronics from "./Pages/Electronics/Electronics";
import Fashion from "./Pages/Fashion/Fashion";
import HouseholdAppliances from "./Pages/HouseholdAppliances/HouseholdAppliances";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import Phones from "./Pages/Phones/Phones";
import Register from "./Pages/Register/Register";
import VideoGames from "./Pages/VideoGames/VideoGames";
import InnerPage from "./Pages/Electronics/InnerPage";
import FashionInner from "./Pages/Fashion/FashionInner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HouseholdInner from "./Pages/HouseholdAppliances/HouseholdInner";
import PhonesInner from "./Pages/Phones/PhonesInner";
import VideoGameInner from "./Pages/VideoGames/VideoGameInner";


function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="Electronics" element={<Electronics />} />
        <Route path="/ElectronicsDatas/:id" element={<InnerPage />} />        
        <Route path="Fashion" element={<Fashion />} />
        <Route path="Appliances" element={<HouseholdAppliances />} />
        <Route path="Login" element={<Login />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Mobile Phones" element={<Phones />} />
        <Route path="Register" element={<Register />} />
        <Route path="Video Games" element={<VideoGames />} />
        <Route path="/FashionResults/:id" element={<FashionInner />} />        
        <Route path="/HouseholdAppliancesDatas/:id" element={<HouseholdInner />} />
        <Route path="/PhonesDatas/:id" element={<PhonesInner />} />
        <Route path="/VideoGamesDatas/:id" element={<VideoGameInner />} />
      </Routes>
    </BrowserRouter>
  //  <><h1>Amazon</h1></>
  )
  }

export default App;