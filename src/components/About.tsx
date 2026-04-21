import { motion } from "motion/react";
import { User, Code2, GraduationCap, Target } from "lucide-react";

export default function About() {
  const info = [
    {
      icon: <GraduationCap className="text-emerald-400" />,
      title: "Education",
      desc: "4th Year Computer Science student at Adama Science and Technology University (ASTU).",
    },
    {
      icon: <Code2 className="text-blue-400" />,
      title: "Specialization",
      desc: "Full Stack Web Development with focus on scalable Node.js backends and React frontends.",
    },
    {
      icon: <Target className="text-purple-400" />,
      title: "Goals",
      desc: "Aiming to build innovative solutions that solve real-world problems through clean code.",
    },
  ];

  return (
    <section id="about" className="bg-brand-slate/50 relative py-24">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass p-2">
              <img
                src="src/img/photo_2026-02-15_01-33-33.jpg"
                alt="Working"
                className="rounded-xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-3xl -z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-500/50 rounded-br-3xl -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <User size={20} />
              <span className="uppercase tracking-widest text-sm font-semibold">About Me</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Driven by <span className="text-emerald-400">Innovation</span>, Guided by <span className="text-blue-400">Logic</span>.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10 text-lg">
              I am a Full Stack Developer currently studying Computer Science and Engineering at ASTU. 
              I specialize in building scalable web applications and user-friendly interfaces. 
              I enjoy solving real-world problems and working on innovative projects that push the 
              boundaries of what's possible on the web.
            </p>

            <div className="grid gap-6">
              {info.map((item, i) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl glass glass-hover">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
