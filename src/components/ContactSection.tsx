import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:preethambhandary385@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name} (${formData.email})`;
  };

  return (
    <section id="contact" className="text-primary-foreground py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-secondary font-semibold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-secondary/20 backdrop-blur-md bg-secondary/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            ⚡ Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-tight">
            Let's Build Something
            <br />
            <span className="text-secondary italic">Amazing Together</span>
          </h2>
          <p className="text-primary-foreground/50 mt-6 max-w-lg mx-auto font-body text-sm leading-relaxed">
            Open to internships, collaborations, and opportunities in software development and cybersecurity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info Cards */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Mail, label: "Email", value: "preethambhandary385@gmail.com", href: "mailto:preethambhandary385@gmail.com" },
              { icon: MapPin, label: "Location", value: "India", href: undefined },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-primary-foreground/8 backdrop-blur-xl bg-primary-foreground/[0.03] p-5 hover:border-secondary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <item.icon size={18} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-primary-foreground/40 uppercase tracking-[0.2em] font-medium">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-primary-foreground/80">{item.value}</p>
                    )}
                  </div>
                  {item.href && (
                    <ArrowUpRight size={14} className="text-primary-foreground/20 group-hover:text-secondary transition-colors" />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-3 mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/preethambhandary", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/preethu2896", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-xl backdrop-blur-xl bg-primary-foreground/[0.03] border border-primary-foreground/8 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:scale-105 transition-all duration-300"
                >
                  <social.icon size={17} className="text-primary-foreground/50 group-hover:text-secondary-foreground transition-colors" />
                </a>
              ))}
            </motion.div>

            {/* Decorative element */}
            <motion.div
              className="mt-auto hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="rounded-2xl border border-primary-foreground/5 backdrop-blur-xl bg-primary-foreground/[0.02] p-5">
                <p className="text-primary-foreground/30 text-xs font-body leading-relaxed">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p className="text-secondary/60 text-[10px] mt-2 tracking-wider uppercase">— Steve Jobs</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 relative overflow-hidden rounded-2xl border border-primary-foreground/8 backdrop-blur-xl bg-primary-foreground/[0.03] p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <h3 className="text-xl font-display font-bold mb-1">Send a Message</h3>
              <p className="text-primary-foreground/40 text-xs mb-8">Fill out the form and I'll get back to you soon.</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div className="group">
                  <label className="text-[10px] text-primary-foreground/40 uppercase tracking-[0.2em] font-medium mb-2 block">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-primary-foreground/[0.03] border border-primary-foreground/8 rounded-xl px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/20 focus:outline-none focus:border-secondary/40 focus:bg-primary-foreground/[0.05] transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] text-primary-foreground/40 uppercase tracking-[0.2em] font-medium mb-2 block">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-primary-foreground/[0.03] border border-primary-foreground/8 rounded-xl px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/20 focus:outline-none focus:border-secondary/40 focus:bg-primary-foreground/[0.05] transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[10px] text-primary-foreground/40 uppercase tracking-[0.2em] font-medium mb-2 block">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="w-full bg-primary-foreground/[0.03] border border-primary-foreground/8 rounded-xl px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/20 focus:outline-none focus:border-secondary/40 focus:bg-primary-foreground/[0.05] transition-all duration-300 resize-none backdrop-blur-sm"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="group bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-full hover:brightness-110 transition-all flex items-center gap-2.5 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
