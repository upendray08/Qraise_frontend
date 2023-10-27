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
}
export default App;
