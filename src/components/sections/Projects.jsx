import { RevealOnScroll } from "../RevealOnScroll";

const projectList = [
  {
    title: "CRM System",
    description:
      "A full-featured Customer Relationship Management system for managing leads, contacts, deals, and sales pipelines. Built with a clean architecture focused on scalability and team collaboration.",
    tech: ["Django", "Python", "PostgreSQL", "REST API"],
    link: "https://github.com/aritra1243/crm-system",
    github: "https://github.com/aritra1243/crm-system",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "VoiceAst",
    description:
      "An AI-powered voice assistant application that interprets spoken commands and delivers intelligent, context-aware responses. Combines speech recognition with NLP for a seamless voice-first experience.",
    tech: ["Python", "Speech Recognition", "NLP", "AI/ML"],
    link: "https://github.com/aritra1243/VoiceAst",
    github: "https://github.com/aritra1243/VoiceAst",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Stock Market Anomaly Detection",
    description:
      "An ML-driven system that monitors live stock market data and flags statistical anomalies in real time. Uses time-series analysis and unsupervised learning to detect unusual price movements and volume spikes.",
    tech: ["Python", "Scikit-learn", "Pandas", "Time-Series"],
    link: "https://github.com/aritra1243/Stock-market-Anomaly-Detection",
    github: "https://github.com/aritra1243/Stock-market-Anomaly-Detection",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Online Mobile Store",
    description:
      "A responsive e-commerce platform for browsing and purchasing mobile devices. Features product listings, cart management, secure checkout flow, and an admin panel for inventory control.",
    tech: ["Django", "HTML/CSS", "JavaScript", "SQLite"],
    link: "https://github.com/aritra1243/Online-Mobile-Store",
    github: "https://github.com/aritra1243/Online-Mobile-Store",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/88 via-black/70 to-black/90 opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_60%)] blur-3xl opacity-70" />
      </div>
      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl shadow-sky-500/10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectList.map(({ title, description, tech, img, link, github }) => (
              <div
                key={title}
                className="flex flex-col h-full bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-[1.02]"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {title}
                  </h3>
                  <div className="w-full h-48 mb-6 overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tech.map((item) => (
                      <span
                        key={item}
                        className="bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm font-medium border border-blue-500/20 transition hover:bg-blue-500/20 hover:border-blue-500/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex justify-between items-center gap-4">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition font-medium relative group"
                    >
                      View Project
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition"
                      aria-label="View on GitHub"
                    >
                      <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" className="w-8 h-8 invert opacity-80 hover:opacity-100 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
