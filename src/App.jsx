import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Exam from './pages/Exam'
import Settings from './pages/Settings'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Dashboard from './pages/Dashboard'
import NewFeatures from './pages/NewFeatures'
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './pages/Home'


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
