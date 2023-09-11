import React from 'react';
import './App.css';
import {Header, Sidebar, Mail, EmailList} from './Components';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {SendMail} from '../src/Components/index';
import {useSelector} from "react-redux";
import {selectsendMessageIsOpen} from './features/mailSlice';


function App() {

  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);

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

        {sendMessageIsOpen && <SendMail/>}
      </div>
    </Router>
  );
}

export default App;
