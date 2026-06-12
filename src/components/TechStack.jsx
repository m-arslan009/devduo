function TechStack() {
  const stacks = [
    {
      title: 'Frontend',
      items: [
        { name: 'React.js', active: true },
        { name: 'Next.js', active: true },
        { name: 'Tailwind CSS', active: true },
        { name: 'Redux Toolkit', active: true },
        { name: 'JavaFX', active: false },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', active: true },
        { name: 'Express.js', active: true },
        { name: 'Django', active: true },
        { name: 'Spring Boot', active: false },
        { name: 'Fast API', active: false },
      ],
    },
    {
      title: 'Database',
      items: [
        { name: 'MongoDB', active: true },
        { name: 'Firebase', active: true },
        { name: 'SQL Server', active: false },
        { name: 'Mongoose', active: false },
      ],
    },
    {
      title: 'Security & Tools',
      items: [
        { name: 'JWT auth', active: true },
        { name: 'REST APIs', active: true },
        { name: 'RBAC', active: true },
        { name: 'Git / GitHub', active: false },
        { name: 'Vercel / Render', active: false },
      ],
    },
  ]

  return (
    <section className="w-full mt-10 sm:mt-12 lg:mt-16 text-left">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-[14px] font-semibold uppercase tracking-[0.45em] text-yellow-300">
          Tech Stack
        </p>

        <div className="mt-5 rounded-2xl border border-gray-700/45 bg-[#121214] px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-9">
          {stacks.map((stack) => (
            <div key={stack.title} className="min-w-0">
              <h3 className="pb-4 text-[14px] font-medium uppercase tracking-[0.22em] text-yellow-300 border-b border-gray-700/70">
                {stack.title}
              </h3>

              <ul className="mt-5 text-[14px] sm:text-[15px]">
                {stack.items.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center gap-3 ${item.active ? 'text-white' : 'text-gray-500'}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.active ? 'bg-yellow-300' : 'bg-gray-500'}`}
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack