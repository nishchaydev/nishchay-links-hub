import { ExternalLink, Github, Linkedin, Mail, QrCode } from "lucide-react";

const Index = () => {
  const links = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/nishchaydev",
      emoji: "💻"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/nishchaydev",
      emoji: "🔗"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:nishchay.gupta@cdgi.edu.in",
      emoji: "📧"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Gym Management System",
      url: "https://github.com/nishchaydev/tristar-fitness-clean",
      emoji: "🧠"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Smart India Hackathon Project",
      url: "https://github.com/nishchaydev/SIH-",
      emoji: "🌦️"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Personal Tracker",
      url: "https://github.com/nishchaydev/tracker",
      emoji: "💕"
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
              className="group block w-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-5 sm:p-6
                       transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                       hover:border-primary/50 hover:bg-card hover:shadow-[0_8px_24px_-4px_hsl(217_91%_60%/0.2)]
                       shadow-[0_2px_8px_-2px_hsl(217_91%_60%/0.1)]"
              style={{
                animationDelay: `${index * 60}ms`,
                animationFillMode: 'backwards'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-5">
                  <span 
                    className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110" 
                    aria-hidden="true"
                  >
                    {link.emoji}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {link.label}
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
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
