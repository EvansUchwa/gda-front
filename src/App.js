import './Assets/styles/default.css';
import './Assets/styles/card.css';
import './Assets/styles/app.css';
import './Assets/styles/modal.css';
import "./Assets/styles/slick/slick.css";
import "./Assets/styles/slick/slick-theme.css";
import './Assets/styles/materialdesignicons.min.css'
import Choice from './Routes/Choice';
import Accueil from './Routes/Accueil.js'
import Auth from './Routes/Auth.js'
import Contact from './Routes/Contact.js'
import Dashboard from './Routes/Dashboard.js';
import Inscris from './Routes/Inscris';
import Candidats from './Routes/Candidats.js'
import Offres_Emplois from './Routes/Offres_Emplois.js'
import Add_offer from './Routes/Add-offer';
import Formations from './Routes/Formations';
import Services from './Routes/Services';
import { Error } from './Routes/Error';
import { AsideDashNav, TopDashNav, Nav } from './GlobalComponents/Nav';
import Publications from './Routes/Publications.js'
import { Route, Routes } from "react-router-dom";
import { Footer } from './GlobalComponents/Footer';
import { UserContext } from './Contexts/userContext';
import { useState } from 'react';
import FinaliserInscription from './Routes/FinaliserInscription';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Global_Offer from './Routes/Global-Offers';

function App() {
  const [userIsConnected, setUserIsConnected] = useState(false);
  const [userInfo, setUserInfo] = useState({ userType: '', pseudo: '' })
  const pathName = useLocation();
  const handleMobileMenu = () => {
    if (document.querySelector('.nav-links-visible')) {
      document.querySelector('.nav-links').classList.toggle('nav-links-visible')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    handleMobileMenu()
  }, [pathName])

  return (<>
    <UserContext.Provider value={{ userIsConnected, setUserIsConnected, userInfo, setUserInfo }}>
      {userIsConnected === true ? <><AsideDashNav /><TopDashNav /></> : <Nav />}
      <Routes>
        <Route path='/' element={userIsConnected ? <Error /> : <Accueil />} ></Route>
        <Route path='/GDA-Offre/:typeOffer' element={<Global_Offer />} ></Route>
        <Route path='/Authentification/:typeAuth' element={userIsConnected ? <Error /> : <Auth />} ></Route>
        <Route path='/Verifier-mail' element={userIsConnected ? <Error /> : <Inscris />} ></Route>
        <Route path='/Formations' element={<Formations />} ></Route>
        <Route path='/Nos-services' element={<Services />} ></Route>
        <Route path='/Choice' element={<Choice />} ></Route>
        <Route path='/Dashboard' element={<Dashboard />} ></Route>
        <Route path='/Ajouter-offre' element={<Add_offer />} ></Route>
        <Route path='/Candidats/:type' element={<Candidats />} ></Route>
        <Route path='/Offres-Emplois/:type' element={<Offres_Emplois />} ></Route>
        <Route path='/Finaliser-Inscription' element={<FinaliserInscription />} ></Route>
        <Route path='/Publications' element={<Publications />} ></Route>
        <Route path='/Contact' element={<Contact />} ></Route>
      </Routes>
      <Footer />
    </UserContext.Provider>
  </ >
  );
}

export default App;
