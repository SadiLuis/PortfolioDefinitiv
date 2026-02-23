"use client";
import { useReveal } from "@/hooks/useReveal";

const categories = [
  {
    label: "Web",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript"},
      { name: "Node.js / Express" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    label: "Mobile",
    color: "from-accent to-orange-400",
    skills: [
      { name: "React Native" },
      { name: "Native Integrations" },
      { name: "Redux" },
    ],
  },
  // {
  //   label: "Cloud & Tools",
  //   color: "from-purple-500 to-pink-400",
  //   skills: [
  //     { name: "AWS S3", level: 75 },
  //     { name: "Google Maps API", level: 78 },
  //     { name: "Git / GitHub", level: 88 },
  //   ],
  // },
  {
    label: "Product",
    color: "from-green-500 to-emerald-400",
    skills: [
      { name: "Product Strategy" },
      { name: "UX/UI Mindset" },
      { name: "Metrics Analysis" },
    ],
  },
];

const tagSkills = [
  "React.js", "Next.js", "TypeScript", "React Native",
  "Node.js", "Express.js", "Tailwind CSS", "ShadCN",
  "Redux", "AWS S3", "Google Maps API", "Git",
  "Product Management", "UX Design", "REST APIs",
];

export default function Skills() {
  const { ref } = useReveal();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-background relative"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 reveal">
          <p className="section-number mb-3">02. Skills</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Mi stack
            <span className="text-accent">.</span>
          </h2>
          <p className="font-body text-foreground-dim mt-4 max-w-lg mx-auto">
            Herramientas con las que construyo productos desde el diseño hasta el deploy.
          </p>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-14 reveal">
          {categories.map(({ label, color, skills }) => (
            <div
              key={label}
              className="glass border border-[#1C2333] rounded-xl p-6 hover:border-accent/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color}`} />
                <h3 className="font-mono text-sm text-foreground-dim tracking-widest uppercase">
                  {label}
                </h3>
              </div>
              <div className="space-y-4">
                {skills.map(({ name }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-sm text-foreground">{name}</span>
                      {/* <span className="font-mono text-xs text-muted">{level}%</span> */}
                    </div>
                    {/* <div className="h-1.5 bg-[#1C2333] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${level}%` }}
                      />
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-3 justify-center reveal">
          {tagSkills.map((skill, i) => (
            <span
              key={skill}
              className="font-mono text-sm border border-[#1C2333] text-foreground-dim px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
