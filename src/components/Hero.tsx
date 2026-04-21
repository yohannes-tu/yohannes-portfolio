import { motion } from "motion/react";
import { ArrowRight, Download, Send } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-brand-slate">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative inline-block"
        >
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-emerald-400 to-cyan-400">
            <img
              src="src/img/photo_2026-02-15_01-33-33.jpg"
              alt="Yohannes Tulu"
              className="w-full h-full rounded-full object-cover border-4 border-brand-slate"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-2 right-0 glass px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-emerald-500/30"
          >
            Available for Hire
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-emerald-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Full Stack Developer
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
            I'm <span className="text-gradient">Yohannes Tulu</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            I am a fourth-year <span className="text-white font-normal">Computer Science and Engineering</span> student at ASTU and a passionate Full Stack Developer building modern web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-brand-slate font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-500/20"
          >
            View Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            Download Resume
            <Download size={20} />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            Contact Me
            <Send size={18} />
          </a>
        </motion.div>
      </div>

      {/* Hero Stats (Optional Decorative) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-12 text-slate-500 text-xs tracking-widest uppercase hidden md:flex"
      >
        <div className="flex items-center gap-2"><span className="text-emerald-400 font-bold">03+</span> Projects</div>
        <div className="flex items-center gap-2"><span className="text-emerald-400 font-bold">4th</span> Year student</div>
        <div className="flex items-center gap-2"><span className="text-emerald-400 font-bold">100%</span> Passion</div>
      </motion.div>
    </section>
  );
}
