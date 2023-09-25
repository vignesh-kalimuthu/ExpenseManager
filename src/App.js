import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SingUpPage';
import OtpVerification from './components/OtpVerification';
import PasswordSetPage from './components/PasswordSet';
import Dashboards from './components/Dashboards';
import ProfilePage from './components/ProfilePage'; 
import { useState } from 'react';
import UserDetails from './components/UserDetails';
import Wallet from './components/Wallet';

function App() {
 const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/SingUpPage' element={<SignUpPage />} />
          <Route path="/OtpVerification/" element={<OtpVerification />} />
          <Route path='/PasswordSetPage' element={<PasswordSetPage />} />
          
          <Route path='/ProfilePage' element={<ProfilePage setImageUrl={setImageUrl} />} />
          <Route path='/Dash' element={<Dashboards />} />
          <Route path='/UserDetails' element={<UserDetails />} />
          <Route path='/Wallet' element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


