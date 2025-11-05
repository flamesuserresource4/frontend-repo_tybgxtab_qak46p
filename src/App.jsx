import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-white/60">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-indigo-700">Himanshu</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-700 hover:text-indigo-700">About</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-700">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-700">Projects</a>
          </nav>
          <a href="mailto:himanshu.srivastava@email.com" className="text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md">
            Contact
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="mt-12 border-t">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Himanshu Srivastava. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-indigo-700" href="https://linkedin.com/in/himanshu-srivastava" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-indigo-700" href="https://github.com/himanshu-srivastava" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
