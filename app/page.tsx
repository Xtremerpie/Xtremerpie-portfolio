export default function Portfolio() {
  const projects = [
    {
      title: 'Minecraft Clone',
      desc: '3D open-world game built with Ursina Engine.',
      link: 'https://github.com/Xtremerpie',
    },
    {
      title: 'AI Assistant',
      desc: 'Voice-controlled AI assistant for mobile devices.',
      link: 'https://github.com/Xtremerpie',
    },
    {
      title: 'Automation Bot',
      desc: 'Discord + workflow automation project.',
      link: 'https://github.com/Xtremerpie',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          Xtremerpie
        </h1>

        <div className="flex gap-4">
          <a
            href="https://github.com/Xtremerpie"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            GitHub
          </a>

          <a
            href="https://discord.gg/hAQC2MyrUs"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Discord
          </a>

          <a
            href="https://x.com/Xtremerpie"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            X
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="mb-6">
          <div className="w-36 h-36 rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.7)] mx-auto animate-bounce">
            <img
              src="https://i.pinimg.com/736x/33/03/8d/33038d322729ce7d9a7cdaef33f85390.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          FUTURE BUILDER
        </h2>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed">
          I build AI systems, games, automation tools and futuristic projects.
          Passionate about coding, innovation and creating insane experiences.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="https://github.com/Xtremerpie"
            className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.6)]"
          >
            Explore Projects
          </a>

          <a
            href="https://x.com/Xtremerpie"
            className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            Update Soon
          </a>
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 px-8 py-24 max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl hover:scale-[1.01] transition-all duration-500">
          <h3 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h3>

          <p className="text-gray-300 leading-8 text-lg">
            Hey 👋 I’m Xtremerpie — a student developer focused on game
            development, AI systems, automation and futuristic tech projects.
            I love experimenting with new ideas and building creative digital
            experiences.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="relative z-10 px-8 pb-32 max-w-7xl mx-auto">
        <h3 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          My Work
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h4>

                <p className="text-gray-300 leading-7 mb-8">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-400 backdrop-blur-md bg-white/5">
        <p>© 2026 Xtremerpie — Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
