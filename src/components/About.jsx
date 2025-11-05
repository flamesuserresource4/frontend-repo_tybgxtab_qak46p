function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mt-3 text-sm text-gray-500">Curiosity-driven. Impact-focused.</p>
            <blockquote className="mt-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-5 text-indigo-800">
              “Learning never stops — it evolves with every problem you solve.”
            </blockquote>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Born in Bihar and raised in Delhi, I’ve always been curious about how technology can transform lives. I started coding with Python and C, gradually expanding my skills to C++, Java, SQL, HTML, CSS, and JavaScript. Over time, I discovered my passion for Artificial Intelligence and Machine Learning, and I’m now focused on mastering AI concepts — from mathematics (linear algebra, probability, calculus) to building real-world models.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Apart from academics, I’m a gym enthusiast, a cricket lover, and a lifelong learner. I also enjoy teaching Science and Math to students, which helps me strengthen my own logic and problem-solving skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                <p className="mt-2 text-gray-700">
                  B.Tech in Computer Science and Engineering (AIML), Lovely Professional University (2023–2027)
                  — Currently in 4th Semester.
                </p>
                <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                  <li>The Bits and Bytes of Computer Networking — Google (Coursera)</li>
                  <li>Fundamentals of Network Communication — University of Colorado</li>
                  <li>Peer-to-Peer Protocols and Local Area Networks — University of Colorado</li>
                  <li>DSA, C, and C++ — Iamneo Colab, LPU</li>
                </ul>
              </div>
              <div className="rounded-xl border bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">Experience & Volunteering</h3>
                <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-2">
                  <li>Volunteer Intern — Al Rizvia Madadgar Trust, Delhi (community development, awareness)</li>
                  <li>Teaching Experience — Science and Math (Class X) improving communication and mentoring</li>
                </ul>
                <div className="mt-4 rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
                  Interests: AI innovation, startups, fitness, cricket, and modern web development.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border bg-white p-5">
                <h4 className="font-semibold text-gray-900">Investments & Interests</h4>
                <p className="mt-2 text-gray-700">
                  Ongoing SIP investor in Aditya Birla Sun Life PSU Equity Fund – Direct Growth (₹100/month).
                </p>
              </div>
              <div className="rounded-xl border bg-white p-5">
                <h4 className="font-semibold text-gray-900">Goals & Roadmap</h4>
                <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                  <li>Master Machine Learning and Deep Learning concepts</li>
                  <li>Build and deploy 10+ AI projects before placements in 2027</li>
                  <li>Crack top AIML placement roles</li>
                  <li>Launch an AI Store/Hub in Southeast Delhi</li>
                </ul>
              </div>
              <div className="rounded-xl border bg-white p-5">
                <h4 className="font-semibold text-gray-900">Contact</h4>
                <ul className="mt-2 text-gray-700 space-y-1">
                  <li>Email: <a href="mailto:himanshu.srivastava@email.com" className="text-indigo-600 hover:underline">himanshu.srivastava@email.com</a></li>
                  <li>Location: Jaitpur Gaon, Southeast Delhi, India</li>
                  <li>LinkedIn: <a href="https://linkedin.com/in/himanshu-srivastava" className="text-indigo-600 hover:underline" target="_blank" rel="noreferrer">linkedin.com/in/himanshu-srivastava</a></li>
                  <li>GitHub: <a href="https://github.com/himanshu-srivastava" className="text-indigo-600 hover:underline" target="_blank" rel="noreferrer">github.com/himanshu-srivastava</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
