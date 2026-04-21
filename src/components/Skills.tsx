import { motion } from "motion/react";
import { Laptop, Database, PenTool, Layout, Server, Settings, Terminal, Globe } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-emerald-400" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="text-blue-400" />,
      skills: ["Node.js", "Express", "REST APIs", "Authentication"],
    },
    {
      title: "Database",
      icon: <Database className="text-purple-400" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma"],
    },
    {
      title: "Tools",
      icon: <Settings className="text-orange-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "NPM"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-emerald-400 uppercase tracking-[0.3em] text-xs font-bold mb-3">Tech Stack</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Skillset</span></h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl group hover:border-emerald-500/50 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-full border border-white/10 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Tools Row */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <div className="flex items-center gap-2"><Globe size={24} /> <span className="font-mono text-sm uppercase">Web Apps</span></div>
          <div className="flex items-center gap-2"><Terminal size={24} /> <span className="font-mono text-sm uppercase">CLI Tools</span></div>
          <div className="flex items-center gap-2"><Laptop size={24} /> <span className="font-mono text-sm uppercase">UI Design</span></div>
          <div className="flex items-center gap-2"><PenTool size={24} /> <span className="font-mono text-sm uppercase">Optimization</span></div>
        </motion.div>
      </div>
    </section>
  );
}
