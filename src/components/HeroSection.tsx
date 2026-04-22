import { motion } from "framer-motion";
import BlurText from "./BlurText";
import Silk from "./Silk";

const HeroSection = () => {
  return (
    <section id="home" className="text-primary-foreground relative overflow-hidden min-h-screen flex items-center justify-center pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary-foreground/60 text-2xl md:text-3xl font-body mb-3">
            Hi, I'm
          </p>
          <BlurText
            text="Preetham Bhandary"
            className="text-5xl md:text-8xl font-display font-bold leading-[1.2] mb-8 text-primary-foreground max-w-4xl mx-auto"
            delay={150}
            animateBy="words"
            direction="top"
          />
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-body text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-primary-foreground">Turning Ideas into Scalable Tech Solutions.</span><br className="mb-2 hidden md:block" />
            I build real-time applications, cybersecurity systems, and modern web solutions using AI and automation.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1C0adI43Y6LkqQUMv3hWaA822efIu30As/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-full hover:brightness-110 transition text-sm shadow-lg shadow-secondary/20"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;