import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, MessageSquare, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: <Mail size={20} />, label: "Email", info: "yohannestulu21@gmail.com", href: "mailto:yohannestulu21@gmail.com" },
    { icon: <Github size={20} />, label: "Github", info: "https://github.com/yohannes-tu/", href: "https://github.com/yohannes-tu/" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", info: "linkedin.com/in/yohannestulu", href: "https://linkedin.com/in/yohannestulu" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-emerald-400 uppercase tracking-[0.3em] text-xs font-bold mb-3">Connect</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient">Work Together</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Have a project in mind or just want to chat about tech? 
              I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 rounded-xl glass border-white/5 hover:border-emerald-500/30 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{link.label}</p>
                    <p className="text-white font-medium flex items-center gap-2">
                       {link.info} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </a>
              ))}
              
              <div className="flex items-center gap-6 p-4">
                 <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <MapPin size={20} />
                 </div>
                 <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Based In</p>
                    <p className="text-white font-medium">Adama, Ethiopia (ASTU)</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-slate-400 font-bold ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-400 font-bold ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-slate-400 font-bold ml-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-brand-slate py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/10 transition-all active:scale-[0.98]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
            
            <div className="mt-8 flex items-center justify-center gap-3 text-slate-500 text-xs">
               <MessageSquare size={14} />
               <span>Usually responds within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
