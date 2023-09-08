import React from 'react';
import './App.css';
import {Header, Sidebar, Mail, EmailList} from './Components';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <div className="app_body">
          <Sidebar/>
          <Routes>
            <Route path="/mail" element={<Mail/>}/>
            <Route path="/" element={<EmailList/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
