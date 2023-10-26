import './App.css';
import Index from './components/Index';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';


function App() {
     return (
          <>
               <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/index' element={<Index />} />
               </Routes>
          </>
     );
}

export default App;
