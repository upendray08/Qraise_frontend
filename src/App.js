import './App.css';
import Index from './components/Index';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Forgot from './components/Forgotpass';


function App() {
     return (
          <>
               <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/forget_pass' element={<Forgot />} />
                    <Route path='/index' element={<Index />} />
               </Routes>
          </>
     );
}

export default App;
