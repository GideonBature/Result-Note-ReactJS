import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Exam from './Pages/Exam'
import Settings from './Pages/Settings'
import Students from './Pages/Students'
import Teachers from './Pages/Teachers'
import Dashboard from './Pages/Dashboard'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/exam' element={<Exam />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/students' element={<Students />} />
          <Route path='/teachers' element={<Teachers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
