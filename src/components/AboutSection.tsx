import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Projects Completed" },
  { value: "5+", label: "Technical Skills" },
  { value: "3+", label: "Years of Learning" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-semibold text-sm">⚡ About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Who is <span className="text-secondary italic">Preetham</span>?
          </h2>
          <p className="text-primary-foreground/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            I am a Computer Science & Design student at Canara Engineering College, passionate about building real-world tech solutions. My focus lies in cybersecurity, AutoML, and developing scalable systems that solve practical problems.
          </p>
          <p className="text-primary-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            I enjoy working on impactful projects, leading teams, and continuously improving my technical and design skills.
          </p>
          <div className="flex gap-8 justify-center">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">{s.value}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
