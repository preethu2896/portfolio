import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Canara Engineering College",
    location: "Mangalore, Karnataka",
    degree: "B.E. in Computer Science and Design",
    period: "2022 – Present",
    score: "CGPA: 8.06",
  },
  {
    institution: "PRN Amratha Bharathi PU College",
    location: "Hebri, Karnataka",
    degree: "Class 11 & 12 (Science)",
    period: "2020 – 2022",
    score: "Percentage: 80%",
  },
  {
    institution: "PRN Amratha Bharathi Vidya Kendra",
    location: "Hebri, Karnataka",
    degree: "SSLC",
    period: "2019 – 2020",
  },
];


const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="text-secondary font-semibold text-sm">⚡ Education</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          My <span className="text-secondary italic">Academic Journey</span>
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-secondary/30" />

        <div className="flex flex-col gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="relative pl-16 md:pl-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 md:left-5.5 top-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                <GraduationCap size={12} className="text-secondary-foreground" />
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="font-display text-lg font-bold">{edu.institution}</h3>
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{edu.degree}</p>
                <p className="text-xs text-muted-foreground">{edu.location}</p>
                {edu.score && <p className="text-sm font-semibold text-secondary mt-2">{edu.score}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default EducationSection;
