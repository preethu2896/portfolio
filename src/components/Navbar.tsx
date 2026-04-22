import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Projects", "About", "Education", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);

      // Detect active section
      const sections = navLinks.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-[padding] duration-500"
      style={{
        paddingTop: `${1.25 - scrollProgress * 0.5}rem`,
        paddingBottom: `${1.25 - scrollProgress * 0.5}rem`,
        backdropFilter: `blur(${scrollProgress * 24}px)`,
        backgroundColor: `hsl(var(--primary) / ${scrollProgress * 0.85})`,
        borderBottom: `1px solid hsl(var(--primary-foreground) / ${scrollProgress * 0.06})`,
        boxShadow: `0 8px 30px hsl(var(--primary) / ${scrollProgress * 0.3})`,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <motion.div
            className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg shadow-secondary/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-display font-bold text-secondary-foreground text-sm">P</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm leading-none tracking-tight text-primary-foreground">
              Preetham
            </span>
            <span className="text-[9px] text-primary-foreground/40 tracking-[0.15em] uppercase leading-none mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-0.5 bg-primary-foreground/[0.04] backdrop-blur-2xl border border-primary-foreground/8 rounded-full px-1.5 py-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-xs font-medium px-4 py-2 rounded-full transition-all duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-secondary/15 border border-secondary/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? "text-secondary" : "text-primary-foreground/60 hover:text-primary-foreground"
                  }`}
                >
                  {link}
                </span>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground rounded-full pl-5 pr-4 py-2 text-xs font-semibold group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Let's Talk
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.a>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/[0.06] border border-primary-foreground/10"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-2xl border-t border-primary-foreground/5 md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-6 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.toLowerCase();
                return (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm font-medium py-3 px-4 rounded-xl transition-all ${
                      isActive
                        ? "text-secondary bg-secondary/10"
                        : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/[0.03]"
                    }`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link}
                  </motion.a>
                );
              })}
              <motion.a
                href="https://drive.google.com/file/d/1C0adI43Y6LkqQUMv3hWaA822efIu30As/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="bg-primary-foreground/[0.06] border border-primary-foreground/10 text-primary-foreground rounded-full px-5 py-3 text-sm font-semibold text-center mt-3 hover:bg-primary-foreground/[0.1] transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                View Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-secondary text-secondary-foreground rounded-full px-5 py-3 text-sm font-semibold text-center mt-2 hover:brightness-110 transition flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                Let's Talk
                <ArrowUpRight size={14} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
