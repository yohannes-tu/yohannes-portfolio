import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const activities = [
    {
      role: "Freelance Full Stack Developer",
      company: "Independent Projects",
      period: "2023 - Present",
      desc: "Developing custom web solutions for local businesses, focusing on modern stacks like React and Node.js. Successfully delivered multiple client projects from concept to deployment.",
      achievements: ["Built Eyasu Barber Shop system", "Developed Waliya Travel platform"],
    },
    {
      role: "CSE Student Researcher",
      company: "ASTU (Adama Science and Technology University)",
      period: "2021 - Present",
      desc: "Working on various academic and research-oriented projects as part of the CS & Engineering curriculum.",
      achievements: ["Top academic performance", "Active member of tech community"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-brand-slate/30">
      <div className="section-padding">
        <div className="grid lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-emerald-400 uppercase tracking-[0.3em] text-xs font-bold mb-3">Journey</h4>
            <h2 className="text-4xl font-bold mb-6">Experience & <span className="text-gradient">Timeline</span></h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              A brief overview of my professional growth, academic background, and project milestones.
            </p>
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 hidden lg:block">
              <span className="text-emerald-400 font-bold block mb-2">Did you know?</span>
              <p className="text-xs text-slate-500 italic">
                Currently focusing on mastering microservices architecture and cloud-native development.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-12 relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[21px] w-px bg-white/10 hidden sm:block" />

            {activities.map((item, idx) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-0 sm:pl-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-[42px] h-[42px] rounded-xl glass flex items-center justify-center z-10 hidden sm:flex group-hover:border-emerald-500/50 transition-colors">
                  <Briefcase className="text-emerald-400" size={20} />
                </div>

                <div className="glass p-8 rounded-2xl glass-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{item.role}</h3>
                      <p className="text-slate-500 text-sm font-medium">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 w-fit">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {item.achievements.map(a => (
                      <li key={a} className="text-xs text-emerald-400/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-0 sm:pl-16 group"
            >
               <div className="absolute left-0 top-0 w-[42px] h-[42px] rounded-xl glass flex items-center justify-center z-10 hidden sm:flex">
                <span className="text-emerald-400 font-bold">...</span>
              </div>
              <p className="text-slate-500 text-sm italic pl-4 border-l-2 border-white/10 sm:border-0 grow">
                Exploring more opportunities to learn and build...
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
