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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Nishchay Gupta
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-2 px-4">
            AI & Full Stack Developer | TypeScript | Python | ML Enthusiast
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto px-4">
            I build, learn, and experiment with code, AI tools, and problem-solving.
          </p>
        </header>

        {/* Links */}
        <main className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-card border border-border rounded-xl p-4 sm:p-5 
                       transition-all duration-200 hover:scale-[1.02] hover:shadow-lg 
                       hover:border-primary/50 hover:bg-primary/5"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl" aria-hidden="true">
                    {link.emoji}
                  </span>
                  <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </main>

        {/* Footer */}
        <footer className="text-center space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built by Nishchay Gupta</span>
          </div>
          <div className="flex items-center justify-center">
            <QrCode className="w-4 h-4 text-muted-foreground/50" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
