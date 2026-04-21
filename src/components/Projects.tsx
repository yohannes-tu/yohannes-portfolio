import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Eyasu Barber Shop",
      desc: "A professional service booking platform for a barbershop, featuring real-time appointment scheduling and service management.",
      image: "src/img/eyasu-barber.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      features: ["Real-time Booking", "Admin Dashboard", "User Authentication", "Email Notifications"],
      links: { demo: "https://barber-shop-pied-ten.vercel.app/", github: "#https://github.com/yohannes-tu/BARBER-SHOP" },
      color: "from-amber-400 to-orange-600",
    },
    {
      title: "Waliya Travel",
      desc: "A comprehensive travel agency platform focused on Ethiopian tourism, providing tour packages and vehicle rental services.",
      image: "src/img/waliya-travel.png",
      tech: ["React", "Express", "MySQL", "Tailwind CSS"],
      features: ["Tour Explorer", "Booking System", "Interactive Maps", "Multilingual Support"],
      links: { demo: "#", github: "#" },
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "Ecommerce Platform",
      desc: "A high-performance online shopping destination with full checkout flow and product recommendation system.",
      image: "src/img/e-commerce.png",
      tech: ["React", "PostgreSQL", "Stripe API", "Redux"],
      features: ["Product Search", "Shopping Cart", "Payment Integration", "Order Tracking"],
      links: { demo: "#", github: "#" },
      color: "from-emerald-400 to-teal-600",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-brand-slate">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-emerald-400 uppercase tracking-[0.3em] text-xs font-bold mb-3">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-md text-sm md:text-right leading-relaxed"
          >
            A curated selection of my recent work, showcasing full-stack solutions and clean architectural patterns.
          </motion.p>
        </div>

        <div className="grid gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 group`}
            >
              {/* Project Image */}
              <div className="md:w-3/5 relative">
                <div className="relative overflow-hidden rounded-3xl glass p-2 group-hover:shadow-2xl group-hover:shadow-emerald-500/10 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <a href={project.links.demo} className="w-12 h-12 bg-white text-brand-slate rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform">
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="md:w-2/5 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/80 bg-emerald-500/5 px-2 py-1 rounded-md border border-emerald-500/10">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.desc}
                </p>

                <div className="space-y-3 mb-10">
                  {project.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-white font-bold hover:text-emerald-400 transition-colors group/link"
                  >
                    Live Demo <ExternalLink size={18} className="group-hover/link:translate-y-[-2px] group-hover/link:translate-x-[2px] transition-transform" />
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group/link"
                  >
                    View Code <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 text-center"
        >
          <a href="#" className="inline-flex items-center gap-3 glass glass-hover px-8 py-4 rounded-xl text-slate-300 hover:text-white transition-all capitalize font-medium">
            Explore more projects on Github <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
