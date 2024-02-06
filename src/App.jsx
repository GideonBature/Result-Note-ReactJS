import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Exam from './Pages/Exam'
import Settings from './Pages/Settings'
import Students from './Pages/Students'
import Teachers from './Pages/Teachers'
import Dashboard from './Pages/Dashboard'
import NewFeatures from './Pages/NewFeatures'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Exam' element={<Exam />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Students' element={<Students />} />
          <Route path='/Teachers' element={<Teachers />} />
          <Route path='/NewFeatures' element={<NewFeatures />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
