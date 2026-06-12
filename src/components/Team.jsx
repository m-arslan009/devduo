const stack = {
    arslan: ["MERN", "JAVA", "NEXT.js", "GitHub", "Docker", "MongoDB", "SQL Server", "Prompt Engineering"]
}

function Team() {
  return (
    <section className="mt-10">
        <p className="text-left text-[14px] font-semibold uppercase tracking-[0.45em] text-yellow-300">
            The Team
        </p>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
            <section className="flex flex-row gap-4 bg-[#121214] border border-gray-700/45 p-4 rounded-md">
                <span className="border border-yellow-300 bg-yellow-300/10 text-yellow-300 w-fit h-fit p-3 rounded-md">MA</span>
                <section className="text-left">
                    <div className="flex flex-col gap-0">
                        <h2 className="mb-0">Muhammad Arslan</h2>
                        <p className="text-[12px] text-gray-300/40">Full Stack Developer. Fiverr</p>
                    </div>
                    <div className="flex flex-row flex-wrap mb-3">
                        {stack.arslan.map((s) => (
                            <span key={s} className="mr-2 mt-2 sm:mt-3 border border-yellow-300 px-1.5 py-0 bg-yellow-300/10 text-yellow-300 rounded text-[10px]">{s}</span>
                        ))}
                    </div>
                    <p className="text-[14px] text-gray-300/50 leading-5">Builds full-stack apps end-to-end. 3rd place at UCP Web Hackathon. Available on Fiverr for MERN projects.</p>
                    <div className="flex flex-row gap-3 mt-3">
                        <a href="#" className="text-[14px] text-gray-300/60 hover:text-gray-100">Fiverr</a>
                        <a href="#" className="text-[14px] text-gray-300/60 hover:text-gray-100">GitHub</a>
                        <a href="#" className="text-[14px] text-gray-300/60 hover:text-gray-100">LinkdIn</a>
                    </div>
                </section>
            </section>
            <section className="flex flex-row gap-4 bg-[#121214] border border-gray-700/45 p-4 rounded-md">
                <span className="border border-orange-500 bg-orange-500/10 text-orange-500 w-fit h-fit p-3 rounded-md">UN</span>
                <section className="text-left">
                    <div className="flex flex-col gap-0">
                        <h2 className="mb-0">Umer Naseer</h2>
                        <p className="text-[12px] text-gray-300/40">Full Stack Developer. Upwork</p>
                    </div>
                    <div className="flex flex-row flex-wrap mb-3">
                        {stack.arslan.map((s) => (
                            <span key={s} className="mr-2 mt-2 sm:mt-3 border border-yellow-300 px-1.5 py-0 bg-yellow-300/10 text-yellow-300 rounded text-[10px]">{s}</span>
                        ))}
                    </div>
                    <p className="text-[14px] text-gray-300/50 leading-5">Builds full-stack apps end-to-end. 3rd place at UCP Web Hackathon. Available on Fiverr for MERN projects.</p>
                    <div className="flex flex-row gap-3 mt-3">
                        <a href="#" className="text-[14px] text-gray-300/60 hover:text-gray-100">Fiverr</a>
                        <a href="#" className="text-[14px] text-gray-300/60 hover:text-gray-100">GitHub</a>
                        <a href="#" className="text-[14px] text-gray-300/60 hover:text-gray-100">LinkdIn</a>
                    </div>
                </section>
            </section>
        </section>
    </section>
  )
}

export default Team 