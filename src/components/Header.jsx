

function Header() {
  return (
    <div className="flex flex-row justify-between items-center px-4 border-b border-b-gray-100/10 p-3">
        <h3 className="text-white font-bold">dev<span className="text-yellow-300">duo</span>.pk</h3>
        <ul className="flex flex-row gap-10 text-[16px] hover:cursor-pointer">
            <li className="hover:text-gray-200">Work</li>
            <li className="hover:text-gray-200">Skills</li>
            <li className="hover:text-gray-200">Team</li>
            <li className="hover:text-gray-200">Contact</li>
        </ul>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[12px] font-medium text-emerald-300 shadow-[0_0_0_1px_rgba(34,197,94,0.08),0_0_20px_rgba(34,197,94,0.12)]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
          <span>Open to projects</span>
        </div>
    </div>
  )
}

export default Header