
const projectList = [
    {
        name: "Eventer",
        date: "01 / 2025",
        highlight:"Full-stack event management system. Supports 250–500 concurrent users with JWT auth, RBAC, and real-time sync via MongoDB Atlas.",
        Detail: "",
        stack: ["MongoDB", "Express", "React", "Node", "JWt", "RBAC"]
    },
    {
        name: "Eventer",
        date: "01 / 2025",
        highlight:"Full-stack event management system. Supports 250–500 concurrent users with JWT auth, RBAC, and real-time sync via MongoDB Atlas.",
        Detail: "",
        stack: ["MongoDB", "Express", "React", "Node", "JWt", "RBAC"]
    },
    {
        name: "Eventer",
        date: "01 / 2025",
        highlight:"Full-stack event management system. Supports 250–500 concurrent users with JWT auth, RBAC, and real-time sync via MongoDB Atlas.",
        Detail: "",
        stack: ["MongoDB", "Express", "React", "Node", "JWt", "RBAC"]
    },
    {
        name: "Eventer",
        date: "01 / 2025",
        highlight:"Full-stack event management system. Supports 250–500 concurrent users with JWT auth, RBAC, and real-time sync via MongoDB Atlas.",
        Detail: "",
        stack: ["MongoDB", "Express", "React", "Node", "JWt", "RBAC"]
    }
]
function Projects() {
  return (
    <div className="w-full text-left px-15">
        <div className='flex flex-row gap-2 items-center justify-center m-auto'>
            <div className="bg-gray-400/20 h-px w-70 rounded-full"></div>
            <span className="text-gray-400/70 text-[14px]">Our Projects</span>
            <div className="bg-gray-400/20 h-px w-70 rounded-full"></div>
        </div>
        <div>
            <div className="flex flex-row justify-between items-end">
                <div>
                    <p className="text-yellow-300 font-light text-[14px]">Selected Work</p>
                    <h2 className="font-bold">What we've built</h2>
                </div>
                <button className="bg-transparent text-[14px] text-gray-300/50 cursor-pointer hover:text-gray-300/90">All Projects</button>
            </div>
            <div className="mt-6 grid grid-cols-1 lg:gap-0 md:gap-3 sm:gap-3 lg:grid-cols-2 border-0 lg:border lg:border-gray-300/40 rounded-sm overflow-hidden">
                {/* i just want to demonstrate my projects will be there */}
                {projectList.map((el) => (
                    <div key={el.name} className="px-5 py-7 flex flex-col gap-3 hover:bg-gray-300/3 cursor-pointer border border-gray-300/30 rounded-sm lg:border-gray-300/40 lg:rounded-none">
                        <p className="text-gray-400/40 text-[10px] italic">{el.date}</p>
                        <h2>{el.name}</h2>
                        <p className="text-[14px] leading-5 text-gray-300/60">{el.highlight}</p>
                        <div className="flex flex-row flex-wrap">
                            {el.stack.map((s) => (
                                <span className="mr-2 mt-3 border border-emerald-700 px-3 py-1 bg-emerald-900/40 text-emerald-400 rounded text-xs font-medium">{s}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects