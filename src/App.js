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
import MailAction from './Routes/Mail';
import Contact from './Routes/Contact.js'
import Dashboard from './Routes/Dashboard.js';
import Candidats from './Routes/Candidats.js'
import Offres_Emplois from './Routes/Offres_Emplois.js'
import Add_offer from './Routes/Add-offer';
import Formations from './Routes/Formations';
import Services from './Routes/Services';
import { Error } from './Routes/Error';
import { AsideDashNav, TopDashNav, Nav } from './GlobalComponents/Nav';
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from './GlobalComponents/Footer';
import { useState } from 'react';
import FinaliserInscription from './Routes/FinaliserInscription';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Global_Offer from './Routes/Global-Offers';
import Admin from './Routes/Admin';
import { AuthProvider, useAuth } from './hooks/authHooks';
import { Modal } from './GlobalComponents/Modal';

import { modalAccountNotActivatedContent } from './RawData/modal';

const RequireAuth = ({ children }) => {
  const { authed, userType, authedInfo } = useAuth();

  return authed === true ? <>
    {
      authedInfo != null && authedInfo.other != null ?
        <><AsideDashNav />
          <TopDashNav />
        </> :
        ''
    }
    {children}</>
    : <Navigate to="/Authentification/Connexion" />
}

const NotRequiredAuth = ({ children }) => {
  const { authed, userType } = useAuth();
  return <>
    {authed === false ?
      <div className='bodyNotConnected'>
        <Nav />
        {children}
        {/* <p>Home</p> */}
      </div>
      : <Navigate to="/Dashboard" />}
    <Footer />
  </>
}
const RequireActivation = ({ children }) => {
  const { accountIsActivated } = useAuth();
  const setToggleModal = () => {
    return;
  }
  const [ok, setOk] = useState(accountIsActivated())
  return <>
    {
      children
      // ok 
      // ? children
      //   :
      //   <div className='whitePageBg'>
      //     <Modal props={{
      //       content: modalAccountNotActivatedContent,
      //       setToggleModal, className: ''
      //     }} />
      //   </div>
    }
  </>


}

function App() {
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
  const routesTab = [
    { path: '/', components: <Accueil />, requireAuth: false },
    { path: '/Formations', components: <Formations />, requireAuth: false },
    { path: '/Services', components: <Services />, requireAuth: false },
    { path: '/Contact', components: <Contact />, requireAuth: false },
    { path: '/GDA-Offre/:typeOffer', components: <Global_Offer />, requireAuth: false },
    { path: '/GDA-Offre/:typeOffer/:subTypeOffer', components: <Global_Offer />, requireAuth: false },
    { path: '/Authentification/:typeAuth', components: <Auth />, requireAuth: false },
    { path: '/Authentification/:typeAuth/:typeAccount', components: <Auth />, requireAuth: false },

    { path: '/Mail/:mailAction', components: <MailAction />, requireAuth: false },
    { path: '/Choice', components: <Choice />, requireAuth: true },

    { path: '/Dashboard', components: <Dashboard />, requireAuth: true },
    { path: '/Finaliser-Inscription', components: <FinaliserInscription />, requireAuth: true },

    { path: '/Candidats/:type/:page', components: <RequireActivation><Candidats /></RequireActivation>, requireAuth: true },
    {
      path: '/Offres-Emplois/:type/:page', components: <RequireActivation>
        <Offres_Emplois />
      </RequireActivation>, requireAuth: true
    },
    { path: '/Ajouter-offre', components: <Add_offer />, requireAuth: true },

  ]
  return (<>
    <AuthProvider>
      <Routes>
        {
          routesTab.map((route, index) => <Route key={'routeNum' + index}
            path={route.path}
            element={
              (() => {
                if (route.requireAuth) {
                  return <RequireAuth>
                    {route.components}
                  </RequireAuth>

                } else if (route.requireAuth == false) {
                  return <NotRequiredAuth>
                    {route.components}
                  </NotRequiredAuth>
                }
              })()

            }
          >
          </Route>)
        }
        <Route path='/Admin/:menu/:action' element={<Admin />} ></Route>
        <Route path='/Admin/:menu/:action/:target' element={<Admin />} ></Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </AuthProvider>
  </ >
  );
}

export default App;
