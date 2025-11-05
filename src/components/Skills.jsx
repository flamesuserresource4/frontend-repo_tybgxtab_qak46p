function Skills() {
  const skills = [
    {
      title: 'Programming Languages',
      items: ['Python', 'C', 'C++', 'Java', 'SQL'],
    },
    {
      title: 'Web Technologies',
      items: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Frameworks & Tools',
      items: ['Tkinter', 'VS Code', 'Jupyter Notebook'],
    },
    {
      title: 'AI & ML Foundations',
      items: ['Linear Algebra', 'Probability', 'Statistics', 'Calculus'],
    },
    {
      title: 'Databases',
      items: ['MySQL', 'JDBC'],
    },
    {
      title: 'Other Skills',
      items: ['Problem Solving', 'Teaching', 'Communication'],
    },
  ]

  return (
    <section id="skills" className="bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Skills</h2>
          <p className="mt-2 text-gray-600">A blend of fundamentals and hands-on tools.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
