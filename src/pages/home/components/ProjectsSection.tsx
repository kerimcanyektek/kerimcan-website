
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const featuredProjects = [
    {
      title: "E-Ticaret Platformu",
      description: "React ve Redux kullanarak geliştirilen kapsamlı bir e-ticaret çözümü. Kullanıcı dostu arayüz ve güçlü altyapı.",
      image: "/placeholder.svg",
      tags: ["React", "Redux", "Styled Components"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com"
    },
    {
      title: "Finans Dashboard",
      description: "Finansal verileri görselleştiren, gerçek zamanlı güncellenen bir dashboard uygulaması.",
      image: "/placeholder.svg",
      tags: ["TypeScript", "Next.js", "TailwindCSS"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com"
    },
    {
      title: "Blog Platformu",
      description: "İçerik yönetim sistemi ve okuyucu deneyimi odaklı modern bir blog uygulaması.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects-section" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-heading font-bold mb-4",
            isVisible && "animate-slide-up"
          )}>
            Öne Çıkan Projelerim
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible && "animate-slide-up"
          )} style={{ animationDelay: '0.1s' }}>
            En son geliştirdiğim projelerden bazıları. Daha fazlası için projeler sayfasını ziyaret edin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20",
                isVisible && "animate-slide-up"
              )}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Demo <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  <a 
                    href={project.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Kaynak <Github className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/projects">
              Tüm Projeleri Görüntüle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
