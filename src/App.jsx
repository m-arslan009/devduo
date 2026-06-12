import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Project from './pages/Project'

function App() {

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Project />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
