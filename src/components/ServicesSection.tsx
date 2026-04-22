import { motion } from "framer-motion";
import { Code, Layout, Database, Wrench, Palette } from "lucide-react";

const services = [
  { icon: Code, title: "Programming", desc: "Java, Python (Basics)" },
  { icon: Layout, title: "Frontend", desc: "HTML, CSS" },
  { icon: Database, title: "Database", desc: "SQL, PostgreSQL" },
  { icon: Wrench, title: "Tools", desc: "Git, GitHub, VS Code" },
  { icon: Palette, title: "Design", desc: "Figma, User-Centered Design" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <span className="text-secondary font-semibold text-sm">⚡ Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Technical <span className="text-secondary italic">Skills</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-md transition-shadow group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
              <s.icon size={24} className="text-secondary group-hover:text-secondary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-2 font-medium">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
