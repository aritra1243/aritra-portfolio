import { RevealOnScroll } from "../RevealOnScroll";

const projectList = [
  {
    title: "Cloud Platform",
    description:
      "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
    tech: ["React", "Node.js", "AWS", "Docker"],
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "ML-powered data visualization platform with predictive analytics and interactive reports.",
    tech: ["Python", "TensorFlow", "D3.js", "Flask"],
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payments, and customizable inventory.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
    tech: ["Socket.IO", "Express", "React", "Redis"],
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                      className="text-blue-400 hover:text-blue-300 transition font-medium relative group"
                    >
                      View Project
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                    </a>
                    <a
                      href={github}
                      className="text-white/80 hover:text-white transition"
                      aria-label="View Code"
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
