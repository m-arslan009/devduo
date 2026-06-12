import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}

export default SiteLayout