import { ExternalLink, Github, Linkedin, Mail, QrCode } from "lucide-react";
import githubIcon from "@/assets/github-icon.png";
import linkedinIcon from "@/assets/linkedin-icon.png";
import emailIcon from "@/assets/email-icon.png";
import gymIcon from "@/assets/gym-icon.png";
import hackathonIcon from "@/assets/hackathon-icon.png";
import trackerIcon from "@/assets/tracker-icon.png";

const Index = () => {
  const links = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/nishchaydev",
      image: githubIcon,
      description: "View my code projects"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/nishchaydev",
      image: linkedinIcon,
      description: "Connect with me"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:nishchay.gupta@cdgi.edu.in",
      image: emailIcon,
      description: "Get in touch"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Gym Management System",
      url: "https://github.com/nishchaydev/tristar-fitness-clean",
      image: gymIcon,
      description: "Full-stack fitness app"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Smart India Hackathon Project",
      url: "https://github.com/nishchaydev/SIH-",
      image: hackathonIcon,
      description: "Innovation challenge"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Personal Tracker",
      url: "https://github.com/nishchaydev/tracker",
      image: trackerIcon,
      description: "Habit tracking app"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl mx-auto py-8 sm:py-12">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Nishchay Gupta
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-lg sm:text-xl text-foreground/80 mb-3 px-4 font-medium">
            AI & Full Stack Developer | TypeScript | Python | ML Enthusiast
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4 leading-relaxed">
            I build, learn, and experiment with code, AI tools, and problem-solving.
          </p>
        </header>

        {/* Links */}
        <main className="space-y-4 sm:space-y-5 mb-12 sm:mb-16 px-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden
                       transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]
                       hover:border-primary/50 hover:bg-card/90 hover:shadow-[0_12px_40px_-8px_hsl(217_91%_60%/0.3)]
                       shadow-[0_2px_12px_-2px_hsl(217_91%_60%/0.15)]
                       relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                       animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: 'backwards',
                animationDuration: '600ms'
              }}
            >
              <div className="flex items-center gap-5 sm:gap-6 p-5 sm:p-6 relative z-10">
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-background/50 border border-border/30 
                                transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/50
                                shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                    <img 
                      src={link.image} 
                      alt={link.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl opacity-0 
                                group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary 
                                   transition-colors duration-300 truncate">
                      {link.label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 
                               transition-colors duration-300 truncate">
                    {link.description}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center
                                transition-all duration-500 group-hover:bg-primary group-hover:rotate-45 group-hover:scale-110">
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground 
                                           transition-all duration-500" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </main>

        {/* Footer */}
        <footer className="text-center space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built by Nishchay Gupta</span>
          </div>
          <div className="flex items-center justify-center opacity-40">
            <QrCode className="w-4 h-4 text-muted-foreground" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
