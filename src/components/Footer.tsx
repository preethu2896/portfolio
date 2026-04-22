import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-primary-foreground border-t border-primary-foreground/10 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Preetham Bhandary. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:preethambhandary385@gmail.com" className="text-primary-foreground/60 hover:text-secondary transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/preethambhandary" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/preethu2896" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
