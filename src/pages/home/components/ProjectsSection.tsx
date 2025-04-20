
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
    {
      title: "Villa College",
      description: "A corporate website designed for Özel Tarsus Villa Koleji, featuring a user-friendly interface and modern design.",
      image: "src/assets/project-images/16.svg",
      tags: ["WordPress", "Responsive Design", "SEO", "WordPress Speed Optimization"],
      demoUrl: "https://villakoleji.k12.tr/"
    },
    {
      title: "Psikolog Mehmet Ali Yılmaz",
      description: "A personal website designed to strengthen the online presence of a professional and trusted psychologist.",
      image: "src/assets/project-images/15.svg",
      tags: ["WordPress", "Responsive Design", "SEO", "WordPress Speed Optimization"],
      demoUrl: "https://pskmehmetaliyilmaz.com/"
    },
    {
      title: "Poortre",
      description: "An innovative platform designed as a Psychological Drawing Analysis Platform, combining art and psychology.",
      image: "src/assets/project-images/14.svg",
      tags: ["WordPress", "Responsive Design", "SEO", "WordPress Speed Optimization"],
      demoUrl: "https://www.poortre.com"
    }
  ];

  return (
    <section id="projects-section" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-heading font-bold mb-4 transition-all duration-700",
              isVisible ? "animate-slide-up opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "0.2s" }}
          >
            Projects
          </h2>
          <p
            className={cn(
              "text-muted-foreground transition-all duration-700",
              isVisible ? "animate-fade-in opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "0.25s" }}
          >
            Here are some of my latest projects. Visit the projects page to see more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-500 hover:shadow-md hover:border-primary/20",
                isVisible ? "animate-slide-up opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${0.35 + index * 0.15}s` }}
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
                    Visit the Website <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/projects">
              All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
