import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Vote, Shield, X, ChevronLeft, ChevronRight } from "lucide-react";

import electraHome from "@/assets/electra-home.png";
import electraRegister from "@/assets/electra-register.png";
import electraLogin from "@/assets/electra-login.png";
import electraVoting from "@/assets/electra-voting.png";
import electraWinners from "@/assets/electra-winners.png";
import autoctiLogin from "@/assets/autocti-login.png";
import autoctiDashboard from "@/assets/autocti-dashboard.png";

const projects = [
  {
    icon: Vote,
    title: "Electra - E-Voting System",
    year: "2024",
    desc: "Secure digital voting process with multi-tier user roles, encrypted data handling, and real-time vote counting.",
    tags: ["HTML", "CSS", "JavaScript", "SQL", "Security"],
    images: [electraHome, electraRegister, electraLogin, electraVoting, electraWinners],
    details: [
      "Secure voting system with admin & voter roles",
      "Authentication & encrypted voting",
      "Real-time vote counting",
      "SQL injection protection"
    ],
  },
  {
    icon: Shield,
    title: "AutoCTI - Cyber Threat Detection",
    year: "2025",
    desc: "Real-time system to detect, classify, and respond to cyber threats using AutoML, FastAPI backend, and a live dashboard.",
    tags: ["React.js", "Python", "FastAPI", "AutoML"],
    images: [autoctiLogin, autoctiDashboard],
    details: [
      "Real-time cyber threat detection system",
      "Built using FastAPI & AutoML",
      "Detects phishing, malware, brute-force attacks",
      "Live dashboard with alerts"
    ],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openProject = (i: number) => {
    setSelectedProject(i);
    setImageIndex(0);
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="text-secondary font-semibold text-sm">⚡ Projects</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          My Recent <span className="text-secondary italic">Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                <p.icon size={22} className="text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">{p.year}</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map((tag) => (
                <span key={tag} className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => openProject(i)}
              className="flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all"
            >
              View Details <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="bg-card rounded-2xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-xl border"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    {(() => { const Icon = projects[selectedProject].icon; return <Icon size={22} className="text-secondary" />; })()}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{projects[selectedProject].title}</h3>
                    <span className="text-xs text-muted-foreground">{projects[selectedProject].year}</span>
                  </div>
                </div>
                <button onClick={() => setSelectedProject(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selectedProject].tags.map((tag) => (
                  <span key={tag} className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image Carousel */}
              {projects[selectedProject].images.length > 0 && (
                <div className="mb-6 relative">
                  <div className="rounded-xl overflow-hidden border relative aspect-video bg-muted">
                    {projects[selectedProject].images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${projects[selectedProject].title} screenshot ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${idx === imageIndex ? "opacity-100" : "opacity-0"}`}
                      />
                    ))}
                  </div>
                  {projects[selectedProject].images.length > 1 && (
                    <div className="flex items-center justify-between mt-3">
                      <button
                        onClick={() => setImageIndex((prev) => (prev - 1 + projects[selectedProject!].images.length) % projects[selectedProject!].images.length)}
                        className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                      >
                        <ChevronLeft size={16} className="text-secondary" />
                      </button>
                      <div className="flex gap-1.5">
                        {projects[selectedProject].images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === imageIndex ? "bg-secondary w-4" : "bg-secondary/30"}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => setImageIndex((prev) => (prev + 1) % projects[selectedProject!].images.length)}
                        className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                      >
                        <ChevronRight size={16} className="text-secondary" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              <ul className="space-y-3">
                {projects[selectedProject].details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.06 }}
                  >
                    <span className="text-secondary mt-1">•</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
