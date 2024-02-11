import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Exam from './Pages/Exam'
import Settings from './Pages/Settings'
import Students from './Pages/Students'
import Teachers from './Pages/Teachers'
import Dashboard from './Pages/Dashboard'
import NewFeatures from './Pages/NewFeatures'
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/landing_page/Home';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Exam' element={<Exam />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Students' element={<Students />} />
          <Route path='/Teachers' element={<Teachers />} />
          <Route path='/NewFeatures' element={<NewFeatures />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;