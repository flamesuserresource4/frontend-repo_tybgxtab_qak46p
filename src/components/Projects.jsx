function Projects() {
  const projects = [
    {
      title: 'Automated Deadlock Detection Tool (OS Project)',
      desc: 'Detects system deadlocks using graph-based algorithms — built for supervised learning. Role: Core developer (algorithm logic + system design).',
      tags: ['OS', 'Graphs', 'Algorithms'],
    },
    {
      title: 'Smart To-Do List App',
      desc: 'A productivity app with enhanced UX and smart features beyond ordinary to-do lists.',
      tags: ['Python', 'Tkinter', 'JSON'],
    },
    {
      title: 'Currency Converter with Real-Time API',
      desc: 'Fetches live currency data using APIs and converts it instantly.',
      tags: ['APIs', 'UI'],
    },
    {
      title: 'Chatbot with Text & Voice Interface',
      desc: 'Interactive chatbot using speech recognition and TTS with both text and voice input.',
      tags: ['Python', 'speech_recognition', 'pyttsx3', 'tkinter'],
    },
    {
      title: 'Particle Swarm Optimization for Portfolio Management',
      desc: 'Soft computing project applying AI-inspired optimization for financial decision-making.',
      tags: ['PSO', 'Optimization'],
    },
    {
      title: 'Women Safety SOS Alert App (Flutter Project)',
      desc: 'AI-integrated mobile app concept designed for real-time safety alerts and GPS tracking.',
      tags: ['Flutter', 'Safety', 'AI'],
    },
    {
      title: 'LangFlip – Code Converter Website',
      desc: 'A web-based code converter for multiple languages, built to assist in learning syntax differences.',
      tags: ['Web', 'Education'],
    },
  ]

  const certificates = [
    {
      name: 'The Bits and Bytes of Computer Networking',
      org: 'Google',
    },
    {
      name: 'Fundamentals of Network Communication',
      org: 'University of Colorado',
    },
    {
      name: 'Peer-to-Peer Protocols and Local Area Networks',
      org: 'University of Colorado',
    },
    {
      name: 'DSA, C, and C++ Certification',
      org: 'Iamneo Colab',
    },
    {
      name: 'GATE Preparation Proof',
      org: 'Edu Revolution (LPU)',
    },
  ]

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Projects</h2>
            <p className="mt-2 text-gray-600">Selected work spanning AI, apps, and useful tools.</p>
          </div>
          <a href="#contact" className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition">
            Get in touch
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">{p.title}</h3>
              <p className="mt-2 text-gray-700">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6" id="contact">
          <div className="lg:col-span-2 rounded-xl border bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-900">Certificates</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((c) => (
                <li key={c.name} className="rounded-lg bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">{c.name}</p>
                  <p className="text-sm text-gray-600">{c.org}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
            <h3 className="text-xl font-semibold">Let’s Connect</h3>
            <p className="mt-2 text-white/90">
              Open to internships, collaborations, and AI product ideas.
            </p>
            <div className="mt-4 space-y-2">
              <a href="mailto:himanshu.srivastava@email.com" className="block rounded-md bg-white/10 px-4 py-2 hover:bg-white/20 transition">Email</a>
              <a href="https://linkedin.com/in/himanshu-srivastava" target="_blank" rel="noreferrer" className="block rounded-md bg-white/10 px-4 py-2 hover:bg-white/20 transition">LinkedIn</a>
              <a href="https://github.com/himanshu-srivastava" target="_blank" rel="noreferrer" className="block rounded-md bg-white/10 px-4 py-2 hover:bg-white/20 transition">GitHub</a>
            </div>
            <p className="mt-4 text-sm text-white/80">Location: Jaitpur Gaon, Southeast Delhi, India</p>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-gray-50 p-6">
          <p className="text-gray-700">
            Favorite Quote: <span className="italic">“Stay curious, stay humble, and let your code speak louder than words.”</span>
          </p>
          <p className="mt-2 text-gray-700">Hobbies: 🏋️ Gym • 🏏 Cricket • 💻 Coding • 🎥 Tech Videos • 📚 Reading about AI Startups</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
