import { RevealOnScroll } from "../RevealOnScroll";

const skillGroups = [
  {
    label: "Languages",
    color: "blue",
    skills: ["Java", "Python", "JavaScript", "SQL", "C"],
  },
  {
    label: "Frameworks & Web",
    color: "cyan",
    skills: ["Spring Boot", "Django", "React", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    label: "Data Science & ML",
    color: "purple",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning", "Data Analysis"],
  },
  {
    label: "Databases",
    color: "emerald",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Concepts",
    color: "amber",
    skills: ["REST APIs", "Microservices", "DBMS", "OOP", "DSA", "Computer Networks"],
  },
];

const colorMap = {
  blue:    { pill: "bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.25)]", dot: "bg-blue-400" },
  cyan:    { pill: "bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.25)]", dot: "bg-cyan-400" },
  purple:  { pill: "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.25)]", dot: "bg-purple-400" },
  emerald: { pill: "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(52,211,153,0.25)]", dot: "bg-emerald-400" },
  amber:   { pill: "bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(251,191,36,0.25)]", dot: "bg-amber-400" },
};

export const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)] blur-3xl opacity-80" />
      </div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-5xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-lg shadow-sky-500/10">

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Professional Summary */}
          <div className="rounded-2xl p-8 border border-white/10 bg-black/40 hover:-translate-y-1 transition-all mb-6">
            <p className="text-gray-300 text-base leading-relaxed">
              Full-Stack Developer and Data Science professional with hands-on experience in backend development,
              machine learning, and data analysis. Proficient in{" "}
              <span className="text-blue-300 font-medium">Java, Python, Spring Boot, Django,</span> and{" "}
              <span className="text-blue-300 font-medium">React</span> with a strong foundation in REST APIs,
              Microservices, and database management. Currently pursuing a Credit-Linked Data Science program
              at <span className="text-cyan-300 font-medium">IIT Guwahati</span>. Adept at delivering scalable
              solutions and analytical insights.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="rounded-2xl p-8 border border-white/10 bg-black/40 hover:-translate-y-1 transition-all mb-6">
            <h3 className="text-xl font-bold mb-5 text-white">Technical Skills</h3>
            <div className="space-y-4">
              {skillGroups.map(({ label, color, skills }) => {
                const { pill, dot } = colorMap[color];
                return (
                  <div key={label} className="flex flex-wrap items-start gap-y-2 gap-x-3">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 w-40 shrink-0 pt-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                      {label}
                    </span>
                    <div className="flex flex-wrap gap-2 flex-1">
                      {skills.map((tech) => (
                        <span
                          key={tech}
                          className={`${pill} py-1.5 px-3 rounded-full text-sm transition`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Education */}
            <div className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-5 text-white">Education</h3>
              <div className="space-y-5 text-gray-300">
                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <p className="text-xs text-cyan-400/70 uppercase tracking-wider font-medium mb-1">Jan 2025 – Mar 2026</p>
                  <h4 className="font-semibold text-white text-sm leading-snug">
                    Credit-Linked Program in Data Science <span className="text-gray-400 font-normal">(Daksh Gurukul)</span>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Indian Institute of Technology (IIT) Guwahati<br />
                    in collaboration with NSDC &amp; Masai
                  </p>
                </div>
                <div className="border-l-2 border-blue-500/50 pl-4">
                  <p className="text-xs text-blue-400/70 uppercase tracking-wider font-medium mb-1">2020 – 2024</p>
                  <h4 className="font-semibold text-white text-sm leading-snug">
                    B.Tech in Electronics &amp; Communication Engineering
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Gargi Memorial Institute of Technology, MAKAUT<br />
                    <span className="text-emerald-400 font-medium">73.6%</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-5 text-white">Work Experience</h3>
              <div className="border-l-2 border-purple-500/50 pl-4">
                <p className="text-xs text-purple-400/70 uppercase tracking-wider font-medium mb-1">Aug 2024 – Present</p>
                <h4 className="font-semibold text-white text-sm">Training &amp; Development Specialist</h4>
                <p className="text-xs text-gray-400 mt-0.5 mb-3">Royal Research (Content Catalyst LLP)</p>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                    Worked on academic &amp; industrial research projects spanning full-stack development, data analysis, and machine learning.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                    Developed backend services with <span className="text-blue-300">React, Spring Boot,</span> and Microservices, integrating MySQL/PostgreSQL and RESTful APIs.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                    Built ML models with <span className="text-yellow-300">Pandas, NumPy, Scikit-learn,</span> and Matplotlib for data preprocessing and analysis.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                    Created dashboards and data visualizations delivered as research reports and technical documentation.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
