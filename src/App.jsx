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
import Home from './Pages/Home'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/exam' element={<Exam />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/students' element={<Students />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/newfeatures' element={<NewFeatures />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
