import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-brand-slate">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-gradient mb-2">YT.</h2>
            <p className="text-slate-500 text-sm max-w-xs">
              Building the future of the web, one pixel and one line of code at a time.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              {[
                { icon: <Github size={20} />, href: "https://github.com/yohannes-tu/" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                { icon: <Mail size={20} />, href: "mailto:yohannestulu21@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Yohannes Tulu. All Rights Reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-emerald-400 group-hover:border-emerald-500 transition-all">
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold group-hover:text-slate-400 transition-colors">
              Back to Top
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
