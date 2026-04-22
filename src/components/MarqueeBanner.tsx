import { Sparkles } from "lucide-react";

const items = ["UI/UX Design", "Frontend Development", "Figma", "React.js", "Full-Stack", "Database Design"];

const MarqueeBanner = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 mx-8 text-lg font-bold font-display">
            <Sparkles size={18} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
