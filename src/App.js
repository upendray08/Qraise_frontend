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
import YourCampaign from './components/YourCampaign';
import DetailsCampaign from './components/DetailsCampaign';

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
                    <Route path='/your_campaign' element={<YourCampaign />} />
                    <Route path='/notification' element={<Notification />} />
                    <Route path='/profile' element={<UserProfile />} />
                    <Route path='/details_campaign' element={<DetailsCampaign />} />
               </Routes>
          </>
     );
}

export default App;
