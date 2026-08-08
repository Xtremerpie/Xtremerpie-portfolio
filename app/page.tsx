import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: '🤖 Rafail AI',
      desc: 'Desktop AI assistant with multiple models and voice support.',
      link: 'https://github.com/Xtremerpie',
    },
    {
      title: '🛡️ Xyth Bot',
      desc: 'Discord bot with moderation and AI features.',
      link: 'https://github.com/Xtremerpie',
    },
    {
      title: '⛏️ Hexorpie',
      desc: 'Minecraft automation and assistant bot.',
      link: 'https://github.com/Xtremerpie',
    },
    {
      title: '🎮 XYTHERIA',
      desc: '3D game project with exploration and survival mechanics.',
      link: 'https://github.com/Xtremerpie',
    },
    {
      title: '📊 MANAPIE',
      desc: 'Personal desktop app to manage all activity in one.',
      link: 'https://github.com/Xtremerpie',
    },
    {
      title: '👾 AIZEL',
      desc: 'Personal AI like JARVIS to control all your works with voice controlling and extra features.',
      link: 'https://github.com/Xtremerpie',
    },
  ];

  const gameLinks = [
    {
      name: 'Hill Climb',
      url: 'https://hillclimb-rose.vercel.app/',
      icon: '🏔️',
    },
    {
      name: 'Turbo Drift',
      url: 'https://turbodrift-gold.vercel.app/',
      icon: '🏎️',
    },
  ];

  const appLinks = [
    {
      name: 'Daily Commander',
      url: 'https://daily-commander.vercel.app/',
      icon: '🧭',
    },
    {
      name: 'FocusHeist',
      url: 'https://focusheist-app.vercel.app/',
      icon: '🎯',
    },
    {
      name: 'ClassBoard',
      url: 'https://classboard-vert.vercel.app/',
      icon: '📚',
    },
  ];

  const [cursor, setCursor] = React.useState({ x: -100, y: -100 });

  React.useEffect(() => {
    const moveCursor = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('pointermove', moveCursor);
    return () => window.removeEventListener('pointermove', moveCursor);
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden relative selection:bg-cyan-400 selection:text-black"
      style={{ cursor: 'none' }}
    >
      {/* Custom cursor */}
      <div
        className="pointer-events-none fixed z-[100] w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.95)] transition-transform duration-75"
        style={{ left: cursor.x - 8, top: cursor.y - 8 }}
      />
      <div
        className="pointer-events-none fixed z-[99] w-10 h-10 rounded-full border border-cyan-400/50 transition-all duration-150"
        style={{ left: cursor.x - 20, top: cursor.y - 20 }}
      />

      <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse"></div>
      </div>

       
      
      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          XTREMERPIE
        </h1>

        <div className="flex gap-4">
          <a
            href="https://github.com/Xtremerpie"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            🐙 GitHub
          </a>

          <a
            href="https://discord.com/invite/HVkaVjC3xA"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            🎮 Discord
          </a>

          <a
            href="https://x.com/Xtremerpie"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            ✖️ X
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
<section className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
  <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-black/40 backdrop-blur-2xl p-12 shadow-[0_0_80px_rgba(34,211,238,0.15)]">

    {/* Glow Effects */}
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

    {/* Header */}
    <div className="relative z-10 flex items-center gap-6 mb-10">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(34,211,238,0.6)]">
        👨‍💻
      </div>

      <div>
        <p className="text-cyan-400 tracking-[0.4em] text-sm">
          SYSTEM PROFILE
        </p>

        <h3 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          ABOUT XTREMERPIE
        </h3>
      </div>
    </div>

    {/* Stats Panel */}
    <div className="grid md:grid-cols-4 gap-6 mb-10">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
        <h4 className="text-3xl font-bold text-cyan-400">5+</h4>
        <p className="text-gray-400">Major Projects</p>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
        <h4 className="text-3xl font-bold text-cyan-400">AI</h4>
        <p className="text-gray-400">Focused Builder</p>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
        <h4 className="text-3xl font-bold text-cyan-400">Game Dev</h4>
        <p className="text-gray-400">Explorer</p>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
        <h4 className="text-3xl font-bold text-cyan-400">∞</h4>
        <p className="text-gray-400">Ideas Loading...</p>
      </div>
    </div>

    {/* Main Content */}
    <div className="relative z-10 space-y-6 text-gray-300 text-lg leading-9">
      <p>
        <span className="text-cyan-400 font-bold">
          &gt; Initializing profile...
        </span>
      </p>

      <p>
        Hey 👋 I'm <span className="text-cyan-400 font-semibold">Xtremerpie</span>,
        a student developer, AI builder and creator who enjoys turning ideas
        into software and experiments into reality.
      </p>

      <p>
        My journey began with curiosity about games, websites and intelligent
        systems, eventually evolving into a passion for building my own
        technology. Today I create AI assistants, Discord bots, automation
        tools, desktop applications and game projects.
      </p>

      <p>
        Some of my projects include
        <span className="text-cyan-400"> Rafail AI</span>,
        <span className="text-cyan-400"> Xyth Bot</span>,
        <span className="text-cyan-400"> Hexorpie</span>,
        <span className="text-cyan-400"> XYTHERIA</span> and
        <span className="text-cyan-400"> MANAPIE</span>.
      </p>

      <p>
        I enjoy exploring futuristic concepts and experimenting with ideas
        involving AI, automation, gaming and next-generation interfaces.
      </p>

      <p className="text-xl font-semibold text-white border-l-4 border-cyan-400 pl-6">
        "Programming isn't just writing code — it's building the technology
        that you wish existed tomorrow."
      </p>
    </div>

    {/* Bottom Status Bar */}
    <div className="mt-12 flex flex-wrap gap-4">
      <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
        AI Systems
      </span>

      <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
        Automation
      </span>

      <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
        Game Development
      </span>

      <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
        Future Technology
      </span>
    </div>
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
      {/* Live Creation Links */}
      <section className="relative z-10 px-8 pb-32 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_80px_rgba(34,211,238,0.08)]">
          <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative z-10 mb-10">
            <p className="text-cyan-400 text-sm font-semibold tracking-[0.35em] uppercase">
              Live Builds
            </p>
            <h3 className="mt-3 text-4xl md:text-5xl font-extrabold text-white">
              Creation Links
            </h3>
            <p className="mt-4 max-w-2xl text-gray-400 text-lg">
              Play the games and explore the apps I have built and deployed on the web.
            </p>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8">
            {/* Games */}
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-2xl">
                  🎮
                </div>
                <div>
                  <p className="text-xs tracking-[0.25em] text-cyan-400 uppercase">Interactive</p>
                  <h4 className="text-2xl font-bold">Game Creation</h4>
                </div>
              </div>

              <div className="space-y-3">
                {gameLinks.map((game, index) => (
                  <a
                    key={game.url}
                    href={game.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 hover:bg-cyan-400 hover:text-black hover:border-cyan-300 transition-all duration-300"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xl">{game.icon}</span>
                      <span>
                        <span className="block text-xs opacity-50 font-mono">0{index + 1}</span>
                        <span className="font-semibold">{game.name}</span>
                      </span>
                    </span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Apps */}
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <p className="text-xs tracking-[0.25em] text-purple-400 uppercase">Web Applications</p>
                  <h4 className="text-2xl font-bold">App Creation</h4>
                </div>
              </div>

              <div className="space-y-3">
                {appLinks.map((app, index) => (
                  <a
                    key={app.url}
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 hover:bg-purple-400 hover:text-black hover:border-purple-300 transition-all duration-300"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xl">{app.icon}</span>
                      <span>
                        <span className="block text-xs opacity-50 font-mono">0{index + 1}</span>
                        <span className="font-semibold">{app.name}</span>
                      </span>
                    </span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-400 backdrop-blur-md bg-white/5">
        <p>© 2026 Xtremerpie — Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
