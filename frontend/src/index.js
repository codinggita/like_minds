import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './html/Home/Navbar.jsx';
import Footer from './html/Home/Footer.jsx';
import App from './App.jsx'
import Text from './html/Home/Text.jsx'
import Login from './html/Login/loginpage.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path = "/app" element={<App />} />
     <Route path ="/text" element={<Text/>} />
     <Route path ="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
