import { RevealOnScroll } from "../RevealOnScroll";

/* ─── Professional SVG Icons ─────────────────────────────────────────────── */

const SoftwareDevIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-3">
    <defs>
      <linearGradient id="sdg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#818cf8" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" stroke="url(#sdg)" strokeWidth="2" strokeDasharray="6 3" />
    <path d="M20 32l-6 6 6 6M44 32l6 6-6 6" stroke="url(#sdg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 20l-8 24" stroke="url(#sdg)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="4" fill="url(#sdg)" />
  </svg>
);

const WebDevIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-3">
    <defs>
      <linearGradient id="wdg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="48" height="36" rx="4" stroke="url(#wdg)" strokeWidth="2"/>
    <path d="M8 22h48" stroke="url(#wdg)" strokeWidth="2"/>
    <circle cx="16" cy="17" r="2" fill="url(#wdg)" />
    <circle cx="23" cy="17" r="2" fill="url(#wdg)" />
    <path d="M20 34l-5 5 5 5M44 34l5 5-5 5" stroke="url(#wdg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M34 30l-4 14" stroke="url(#wdg)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 56h32" stroke="url(#wdg)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 48v8" stroke="url(#wdg)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-3">
    <defs>
      <linearGradient id="pyg1" x1="0" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient id="pyg2" x1="32" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M32 8C20 8 17 14 17 20v6h15v2H13c-6 0-9 4-9 12s3 12 9 12h4v-7c0-6 3-9 9-9h12c5 0 9-4 9-9V20c0-7-4-12-15-12z" fill="url(#pyg1)" opacity="0.9"/>
    <path d="M32 56C44 56 47 50 47 44v-6H32v-2h19c6 0 9-4 9-12s-3-12-9-12h-4v7c0 6-3 9-9 9H26c-5 0-9 4-9 9v11c0 7 4 12 15 12z" fill="url(#pyg2)" opacity="0.9"/>
    <circle cx="26" cy="18" r="2.5" fill="#0f172a"/>
    <circle cx="38" cy="46" r="2.5" fill="#0f172a"/>
  </svg>
);

const DjangoIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-3">
    <defs>
      <linearGradient id="djg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="10" fill="url(#djg)" opacity="0.15" />
    <rect x="6" y="6" width="52" height="52" rx="10" stroke="url(#djg)" strokeWidth="2"/>
    <text x="32" y="42" textAnchor="middle" fill="url(#djg)" fontSize="28" fontWeight="bold" fontFamily="serif">D</text>
    <path d="M12 50h40" stroke="url(#djg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M12 14h40" stroke="url(#djg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const MernIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-3">
    <defs>
      <linearGradient id="mg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="44" height="10" rx="3" fill="url(#mg)" opacity="0.9"/>
    <rect x="10" y="27" width="44" height="10" rx="3" fill="url(#mg)" opacity="0.7"/>
    <rect x="10" y="44" width="44" height="10" rx="3" fill="url(#mg)" opacity="0.5"/>
    <circle cx="57" cy="15" r="4" fill="#2dd4bf"/>
    <circle cx="57" cy="32" r="4" fill="#2dd4bf" opacity="0.7"/>
    <circle cx="57" cy="49" r="4" fill="#2dd4bf" opacity="0.5"/>
  </svg>
);

const SpringBootIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-3">
    <defs>
      <linearGradient id="sbg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="26" stroke="url(#sbg)" strokeWidth="2" opacity="0.4"/>
    <path d="M44 20C38 14 26 14 20 22c-5 7-4 18 4 24 2 2 5 3 8 3" stroke="url(#sbg)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 44C26 50 38 50 44 42c5-7 4-18-4-24-2-2-5-3-8-3" stroke="url(#sbg)" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="6" fill="url(#sbg)"/>
  </svg>
);

const MatlabIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-3">
    <defs>
      <linearGradient id="mlbg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <path d="M8 32 Q16 12 24 32 Q32 52 40 32 Q48 12 56 32" stroke="url(#mlbg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="8" y1="52" x2="56" y2="52" stroke="url(#mlbg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <line x1="8" y1="12" x2="8" y2="52" stroke="url(#mlbg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <circle cx="24" cy="32" r="3" fill="url(#mlbg)"/>
    <circle cx="40" cy="32" r="3" fill="url(#mlbg)"/>
  </svg>
);

const AiMlIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-3">
    <defs>
      <linearGradient id="aig" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="8" fill="url(#aig)" opacity="0.9"/>
    <circle cx="10" cy="20" r="5" stroke="url(#aig)" strokeWidth="2"/>
    <circle cx="54" cy="20" r="5" stroke="url(#aig)" strokeWidth="2"/>
    <circle cx="10" cy="44" r="5" stroke="url(#aig)" strokeWidth="2"/>
    <circle cx="54" cy="44" r="5" stroke="url(#aig)" strokeWidth="2"/>
    <circle cx="32" cy="8" r="5" stroke="url(#aig)" strokeWidth="2"/>
    <circle cx="32" cy="56" r="5" stroke="url(#aig)" strokeWidth="2"/>
    <line x1="15" y1="20" x2="24" y2="27" stroke="url(#aig)" strokeWidth="1.5"/>
    <line x1="49" y1="20" x2="40" y2="27" stroke="url(#aig)" strokeWidth="1.5"/>
    <line x1="15" y1="44" x2="24" y2="37" stroke="url(#aig)" strokeWidth="1.5"/>
    <line x1="49" y1="44" x2="40" y2="37" stroke="url(#aig)" strokeWidth="1.5"/>
    <line x1="32" y1="13" x2="32" y2="24" stroke="url(#aig)" strokeWidth="1.5"/>
    <line x1="32" y1="40" x2="32" y2="51" stroke="url(#aig)" strokeWidth="1.5"/>
  </svg>
);

/* ─── Service Data ────────────────────────────────────────────────────────── */

const services = [
  {
    title: "Software Development",
    description:
      "Custom software engineered with clean architectures, resilient APIs, and measurable delivery pipelines.",
    highlights: ["System Architecture", "Code Quality Reviews", "CI/CD Automation"],
    Icon: SoftwareDevIcon,
    gradient: "from-sky-500/20 to-indigo-500/20",
    border: "border-sky-500/30",
    glow: "rgba(14,165,233,0.3)",
    accentColor: "#38bdf8",
  },
  {
    title: "Web Development",
    description:
      "Pixel-perfect, responsive interfaces powered by progressive enhancement and modern performance budgets.",
    highlights: ["Design Systems", "Accessibility-First", "SSR/SPA Hybrids"],
    Icon: WebDevIcon,
    gradient: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/30",
    glow: "rgba(34,211,238,0.3)",
    accentColor: "#22d3ee",
  },
  {
    title: "Python Engineering",
    description:
      "Robust data tooling, task automation, and API-first services built with the Python ecosystem.",
    highlights: ["FastAPI / Flask", "Data Pipelines", "Automation Scripts"],
    Icon: PythonIcon,
    gradient: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/30",
    glow: "rgba(251,191,36,0.3)",
    accentColor: "#fbbf24",
  },
  {
    title: "Django Solutions",
    description:
      "Secure, scalable backends leveraging Django ORM, DRF, and async workers for complex products.",
    highlights: ["DRF + GraphQL", "Async Tasks", "Role-Based Auth"],
    Icon: DjangoIcon,
    gradient: "from-green-500/20 to-emerald-600/20",
    border: "border-green-500/30",
    glow: "rgba(74,222,128,0.3)",
    accentColor: "#4ade80",
  },
  {
    title: "MERN Stack Delivery",
    description:
      "Full MERN builds with reusable UI kits, typed APIs, and observability baked into every deployment.",
    highlights: ["Mongo Design", "Express APIs", "React + Node DevOps"],
    Icon: MernIcon,
    gradient: "from-teal-500/20 to-cyan-600/20",
    border: "border-teal-500/30",
    glow: "rgba(45,212,191,0.3)",
    accentColor: "#2dd4bf",
  },
  {
    title: "Spring Boot APIs",
    description:
      "Production-grade JVM services with Spring Boot, containerized workflows, and enterprise integrations.",
    highlights: ["Microservices", "Observability", "Security Hardening"],
    Icon: SpringBootIcon,
    gradient: "from-lime-500/20 to-green-500/20",
    border: "border-lime-500/30",
    glow: "rgba(134,239,172,0.3)",
    accentColor: "#86efac",
  },
  {
    title: "MATLAB Modeling",
    description:
      "Algorithm prototyping, signal processing, and simulation tooling accelerated with MATLAB toolboxes.",
    highlights: ["Control Systems", "Signal Analysis", "Simulation Suites"],
    Icon: MatlabIcon,
    gradient: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    glow: "rgba(251,146,60,0.3)",
    accentColor: "#fb923c",
  },
  {
    title: "AI / ML Projects",
    description:
      "End-to-end ML initiatives covering data readiness, experimentation, MLOps, and human-centered delivery.",
    highlights: ["Model Ops", "LLM Integrations", "Responsible AI"],
    Icon: AiMlIcon,
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    glow: "rgba(168,85,247,0.3)",
    accentColor: "#a855f7",
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(168,85,247,0.08),_transparent_55%)]" />
      </div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.45em] text-blue-300/60 mb-3 font-medium">
              What I Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent mb-4">
              Services &amp; Expertise
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              From MATLAB modeling to production-grade AI/ML deployments — full-stack
              engineering, thoughtfully delivered across every layer of the stack.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => {
              const { Icon, gradient, border, glow, accentColor } = service;
              return (
                <article
                  key={service.title}
                  className={`group relative overflow-hidden rounded-2xl border ${border} bg-white/[0.03] backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-1`}
                  style={{
                    boxShadow: "0 1px 30px rgba(0,0,0,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 40px ${glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 1px 30px rgba(0,0,0,0.4)";
                  }}
                >
                  {/* Card inner glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at top left, ${glow.replace("0.3", "0.08")}, transparent 60%)`,
                    }}
                  />

                  <div className="relative flex items-start gap-5">
                    {/* Icon Container */}
                    <div
                      className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} border ${border} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                      style={{ boxShadow: `0 0 20px ${glow}` }}
                    >
                      <Icon />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-white mb-1 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.highlights.map((item) => (
                          <span
                            key={item}
                            className="text-[10px] uppercase tracking-wider py-0.5 px-2.5 rounded-full border font-medium"
                            style={{
                              color: accentColor,
                              borderColor: `${accentColor}40`,
                              background: `${accentColor}12`,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
