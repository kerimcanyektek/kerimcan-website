import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    const el = document.getElementById("hero-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero-section"
      className="min-h-[90vh] flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <p
                className={`text-primary font-medium tracking-wide inline-flex items-center transition-all duration-700 ${
                  isVisible ? "animate-fade-in opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                FRONTEND DEVELOPER & AGILE PROJECT MANAGER
              </p>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight transition-all duration-700 ${
                  isVisible ? "animate-slide-down opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                Hello, I am <br />
                <span className="gradient-text">Kerimcan Yektek</span>
              </h1>
            </div>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-lg transition-all duration-700 ${
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              As a Frontend Developer, I specialize in modern web technologies and user experience design. I build user-friendly and high-performance web applications.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible ? "animate-slide-up opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <Button asChild size="lg">
                <Link to="/about">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>

            <div
              className={`flex items-center gap-6 pt-2 transition-all duration-700 ${
                isVisible ? "animate-slide-up opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <a 
                href="https://github.com/kerimcanyektek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/kerimcanyektek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/kerimcanyektek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div
            className={`md:col-span-5 flex justify-center md:justify-end transition-all duration-700 ${
              isVisible ? "animate-slide-from-right opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full p-2">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src="/lovable-uploads/0db8acda-21b1-4f97-96c2-79d5227b1969.png"
                  alt="Kerimcan Yektek"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
