function Hero() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="text-left text-xs text-gray-500 tracking-widest uppercase mb-8">— Full-Stack Development · Lahore, PK</p>
        <h1 className="text-left leading-none text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
          <span className="block">We don't just</span>
          <span className="block font-bold mt-3 text-[2.5rem] text-yellow-300 font-serif italic tracking-tight drop-shadow-[0_10px_30px_rgba(250,240,120,0.12)]">
            write code.
          </span>
          <span className="block">We ship products.</span>
        </h1>
        <p className="text-left max-w-md lg:max-w-lg text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">Two <span className="text-white">FAST NUCES</span> developers building real, deployed web apps. MERN stack, Django, React — we handle everything from database to live URL so you don't have to coordinate anyone else.</p>
        <div className="text-left mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-black py-2 px-6 rounded font-semibold text-sm w-full sm:w-auto text-center">See our work</button>
          <button className="border border-gray-600 hover:border-gray-400 cursor-pointer py-2 px-6 rounded text-sm text-gray-300 hover:text-white w-full sm:w-auto text-center">Get in touch</button>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm mt-8 sm:mt-10 items-start sm:items-center sm:w-full">
          <p className="text-gray-500 text-xs sm:text-sm sm:min-w-fit">Find us on</p>
          <p className="border border-emerald-700 px-3 py-1 bg-emerald-900/40 text-emerald-400 rounded text-xs font-medium">Fiverr</p>
          <p className="border border-emerald-700 px-3 py-1 bg-emerald-900/40 text-emerald-400 rounded text-xs font-medium">Upwork</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-0 lg:pt-8">
        <div className="border border-gray-700/50 rounded-2xl bg-gray-900/30 p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-center flex-1">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              6<span className="text-yellow-300">+</span>
            </div>
            <div className="text-xs text-gray-500 mt-1 sm:mt-2">
              <div>Projects</div>
              <div>shipped</div>
            </div>
          </div>
          <div className="hidden sm:block border-r border-gray-700/30 h-12"></div>
          <div className="text-center flex-1">
            <div className="text-3xl sm:text-4xl font-bold text-white">2</div>
            <div className="text-xs text-gray-500 mt-1 sm:mt-2">Developers</div>
          </div>
          <div className="hidden sm:block border-r border-gray-700/30 h-12"></div>
          <div className="text-center flex-1">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              24<span className="text-yellow-300">h</span>
            </div>
            <div className="text-xs text-gray-500 mt-1 sm:mt-2">Response time</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-left border border-gray-700/50 rounded-lg bg-gray-900/30 p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-emerald-600 rounded"></div>
              <span className="text-white font-semibold text-sm">JWT + RBAC auth</span>
            </div>
            <p className="text-xs text-gray-600">Security built in</p>
          </div>
          <div className="text-left border border-gray-700/50 rounded-lg bg-gray-900/30 p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-emerald-600 rounded"></div>
              <span className="text-white font-semibold text-sm">Always deployed</span>
            </div>
            <p className="text-xs text-gray-600">Live URL every time</p>
          </div>
          <div className="text-left border border-gray-700/50 rounded-lg bg-gray-900/30 p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-emerald-600 rounded"></div>
              <span className="text-white font-semibold text-sm">Mobile-first UI</span>
            </div>
            <p className="text-xs text-gray-600">Works everywhere</p>
          </div>
          <div className="text-left border border-gray-700/50 rounded-lg bg-gray-900/30 p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-emerald-600 rounded"></div>
              <span className="text-white font-semibold text-sm">Clean REST APIs</span>
            </div>
            <p className="text-xs text-gray-600">Postman docs included</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero