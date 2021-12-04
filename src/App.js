import {Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from "./pages/Home";
import LiveStream from "./pages/LiveStream";
import SignIn from "./pages/Tickets/SignIn";
import Dashboard from "./pages/Tickets/Dashboard";
import Register from "./pages/Tickets/Register";
import Scan from "./pages/Tickets/Scan";
import "./App.css";


function App() {

  const pathToRedirectForRoot = localStorage.getItem('token') ? '/tickets' : '/';

  return <div className="App">
    < BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/livestream" element={<LiveStream />} />
          
          <Route exact path="/tickets/sign_in" element={<SignIn />} />
          <Route exact path="/tickets/register" element={<Register />} />
          <Route exact path="/tickets/scan" element={<Scan />} />
          <Route exact path="/tickets/transactions" element={<Scan />} />
          <Route exact path="/tickets" element={<Dashboard />} />
          
          <Route path="/tickets/*" element={<Navigate to="/tickets" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </ BrowserRouter >
  </div>;
}

export default App;
