<<<<<<< HEAD
import "./App.css";
import Index from "./components/Index";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Forgot from "./components/Forgotpass";
import React, { useState } from "react";
import CampaignPage from "./components/CampaignPage";
import FormPage from "./components/CampaignForm";

function App() {
  const [campaignData, setCampaignData] = useState([]);

  const addDataToCampaign = (data) => {
    setCampaignData([...campaignData, data]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget_pass" element={<Forgot />} />
        <Route path="/index" element={<Index />} />
        <Route
          path="/campaignpage"
          element={
            <CampaignPage
              data={campaignData}
              addDataToCampaign={addDataToCampaign}
            />
          }
        />
        <Route
          path="/campaignform"
          element={<FormPage addDataToCampaign={addDataToCampaign} />}
        />
      </Routes>
    </>
  );
=======
import './App.css';
import Index from './components/Index';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Forgot from './components/Forgotpass';
import ViewCampaign from './components/ViewCampaign';
import CreateCampaign from './components/CreateCampaign';
import Notification from './components/Notification';
import UserProfile from './components/UserProfile';

function App() {
     return (
          <>
               <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/forget_pass' element={<Forgot />} />
                    <Route path='/view_campaign' element={<ViewCampaign />} />
                    <Route path='/create_campaign' element={<CreateCampaign />} />
                    <Route path='/notification' element={<Notification />} />
                    <Route path='/profile' element={<UserProfile />} />
               </Routes>
          </>
     );
>>>>>>> 0256439d84b9a5b41aa1c33af17a135e33934d07
}

export default App;
