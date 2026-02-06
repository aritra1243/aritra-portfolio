import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { RevealOnScroll } from "../RevealOnScroll";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software engineered with clean architectures, resilient APIs, and measurable delivery pipelines.",
    highlights: ["System architecture", "Code quality reviews", "CI/CD automation"],
    icon: { baseColor: "#0ea5e9", accentColor: "#c084fc", label: "SD", shape: "knot" },
  },
  {
    title: "Web Development",
    description:
      "Pixel-perfect, responsive interfaces powered by progressive enhancement and modern performance budgets.",
    highlights: ["Design systems", "Accessibility-first", "SSR/SPA hybrids"],
    icon: { baseColor: "#38bdf8", accentColor: "#22d3ee", label: "WEB", shape: "sphere" },
  },
  {
    title: "Python Engineering",
    description:
      "Robust data tooling, task automation, and API-first services built with the Python ecosystem.",
    highlights: ["FastAPI/Flask", "Data pipelines", "Automation scripts"],
    icon: { baseColor: "#fcd34d", accentColor: "#f59e0b", label: "Py", shape: "cube" },
  },
  {
    title: "Django Solutions",
    description:
      "Secure, scalable backends leveraging Django ORM, DRF, and async workers for complex products.",
    highlights: ["DRF + GraphQL", "Async tasks", "Role-based auth"],
    icon: { baseColor: "#22c55e", accentColor: "#15803d", label: "Dj", shape: "pyramid" },
  },
  {
    title: "MERN Stack Delivery",
    description:
      "Full MERN builds with reusable UI kits, typed APIs, and observability baked into every deployment.",
    highlights: ["Mongo design", "Express APIs", "React + Node devops"],
    icon: { baseColor: "#14b8a6", accentColor: "#2dd4bf", label: "MERN", shape: "capsule" },
  },
  {
    title: "Spring Boot APIs",
    description:
      "Production-grade JVM services with Spring Boot, containerized workflows, and enterprise integrations.",
    highlights: ["Microservices", "Observability", "Security hardening"],
    icon: { baseColor: "#22c55e", accentColor: "#84cc16", label: "SB", shape: "ring" },
  },
  {
    title: "MATLAB Modeling",
    description:
      "Algorithm prototyping, signal processing, and simulation tooling accelerated with MATLAB toolboxes.",
    highlights: ["Control systems", "Signal analysis", "Simulation suites"],
    icon: { baseColor: "#fb923c", accentColor: "#f97316", label: "MLB", shape: "diamond" },
  },
  {
    title: "AI / ML Projects",
    description:
      "End-to-end ML initiatives covering data readiness, experimentation, MLOps, and human-centered delivery.",
    highlights: ["Model ops", "LLM integrations", "Responsible AI"],
    icon: { baseColor: "#a855f7", accentColor: "#d946ef", label: "AI", shape: "star" },
  },
];

const shapeGeometry = (shape) => {
  switch (shape) {
    case "knot":
      return <torusKnotGeometry args={[0.7, 0.2, 120, 24]} />;
    case "sphere":
      return <icosahedronGeometry args={[0.85, 1]} />;
    case "cube":
      return <boxGeometry args={[1, 1, 1]} />;
    case "pyramid":
      return <coneGeometry args={[0.9, 1.2, 4]} />;
    case "capsule":
      return <capsuleGeometry args={[0.5, 1, 8, 16]} />;
    case "ring":
      return <torusGeometry args={[0.9, 0.15, 32, 64]} />;
    case "diamond":
      return <octahedronGeometry args={[0.9, 0]} />;
    case "star":
      return <dodecahedronGeometry args={[0.9, 0]} />;
    default:
      return <octahedronGeometry args={[0.8, 0]} />;
  }
};

const ServiceIcon = ({ icon }) => {
  const { baseColor, accentColor, label, shape } = icon;

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 55 }}
      dpr={[1, 2]}
      className="w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.6}>
          <mesh>
            {shapeGeometry(shape)}
            <meshStandardMaterial
              color={baseColor}
              metalness={0.5}
              roughness={0.3}
              emissive={accentColor}
              emissiveIntensity={0.2}
            />
          </mesh>
          <mesh position={[0, -1.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.1, 0.06, 32, 64]} />
            <meshStandardMaterial
              color={accentColor}
              emissive={accentColor}
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.7}
            />
          </mesh>
          <Text
            fontSize={0.45}
            color="#0f172a"
            position={[0, 0, 0.8]}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor={accentColor}
            maxWidth={2}
          >
            {label}
          </Text>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15),_transparent_60%)] blur-3xl opacity-70" />
      </div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl shadow-sky-500/10">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200/70 mb-2">
              Services
            </p>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Full-Stack Problem Solving
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              From MATLAB modeling to production-grade AI/ML deployments, every engagement comes
              with immersive 3D tech badges so you instantly see the stack depth behind each
              capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-lg transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_8px_30px_rgba(14,165,233,0.25)]"
              >
                <div className="relative flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-40 h-40 rounded-2xl bg-white/5 border border-white/10 shadow-inner shadow-black/40">
                    <ServiceIcon icon={service.icon} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-xs uppercase tracking-wide bg-blue-500/10 text-blue-100 py-1 px-3 rounded-full border border-blue-500/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
