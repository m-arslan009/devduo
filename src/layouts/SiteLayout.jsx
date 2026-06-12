import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <Outlet />
    </div>
  )
}

export default SiteLayout