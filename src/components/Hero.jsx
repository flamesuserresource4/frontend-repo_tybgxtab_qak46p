import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white/60" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-4 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              Portfolio • AI/ML • Full Stack
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              I’m Himanshu Srivastava — a Computer Science & AIML Student passionate about building intelligent systems that solve real-world problems.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              AI • Machine Learning • Full Stack Enthusiast • Innovator
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed">
              I’m a B.Tech CSE (AIML) student at Lovely Professional University, currently in my 4th semester. My goal is to become a skilled AI/ML Engineer and build impactful solutions that combine data, intelligence, and innovation. I love working on projects that bridge technology with human experience — from AI-based apps to practical automation tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700 transition"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-indigo-700 ring-1 ring-indigo-200 hover:ring-indigo-300 transition"
              >
                View My Projects
              </a>
              <a
                href="mailto:himanshu.srivastava@email.com"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300 transition"
              >
                Let’s Connect
              </a>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] md:h-[620px]">
            <div className="absolute inset-0 rounded-2xl border border-white/60 shadow-xl shadow-indigo-100/50 bg-white/60 backdrop-blur">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
