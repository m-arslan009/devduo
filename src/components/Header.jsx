import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="flex flex-row items-center justify-between border-b border-b-gray-100/10 p-3 px-4">
      <NavLink to="/" className="text-white font-bold">
        dev<span className="text-yellow-300">duo</span>.pk
      </NavLink>

      <nav className="hidden flex-row gap-10 text-[16px] md:flex">
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-white' : 'text-gray-300 hover:text-gray-200')}>
          Work
        </NavLink>
        <a className="text-gray-300 hover:text-gray-200" href="#skills">Skills</a>
        <a className="text-gray-300 hover:text-gray-200" href="#team">Team</a>
        <a className="text-gray-300 hover:text-gray-200" href="#contact">Contact</a>
      </nav>

      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[12px] font-medium text-emerald-300 shadow-[0_0_0_1px_rgba(34,197,94,0.08),0_0_20px_rgba(34,197,94,0.12)]">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
        <span>Open to projects</span>
      </div>
    </header>
  )
}

export default Header