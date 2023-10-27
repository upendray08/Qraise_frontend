import "./App.css";
import React , {useState} from "react";
import Index from "./components/Index";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Forgot from "./components/Forgotpass";
import ViewCampaign from "./components/ViewCampaign";
import CreateCampaign from "./components/CreateCampaign";
import Notification from "./components/Notification";
import UserProfile from "./components/UserProfile";
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
        <Route path="/view_campaign" element={<ViewCampaign />} />
        <Route path="/create_campaign" element={<CreateCampaign />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<UserProfile />} />
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
