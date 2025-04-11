
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
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
    
    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills = [
    { 
      name: "Wordpress", 
      icon: "/wordpress-icon.svg", 
      category: "CMS"
    },
    { 
      name: "HTML", 
      icon: "/html-icon.svg", 
      category: "Frontend"
    },
    { 
      name: "CSS", 
      icon: "/css-icon.svg", 
      category: "Frontend"
    },
    { 
      name: "Javascript", 
      icon: "/javascript-icon.svg", 
      category: "Frontend"
    },
    { 
      name: "Typescript", 
      icon: "/typescript-icon.svg", 
      category: "Frontend"
    },
    { 
      name: "React", 
      icon: "/react-icon.svg", 
      category: "Frontend"
    },
    { 
      name: "Next.js", 
      icon: "/nextjs-icon.svg", 
      category: "Frontend"
    },
    { 
      name: "Figma", 
      icon: "/figma-icon.svg", 
      category: "Design"
    },
    { 
      name: "Adobe Photoshop", 
      icon: "/photoshop-icon.svg", 
      category: "Design"
    },
    { 
      name: "Git & Github", 
      icon: "/github-icon.svg", 
      category: "Tools"
    },
    { 
      name: "Agile / Scrum", 
      icon: "/agile-icon.svg", 
      category: "Methodology"
    },
  ];

  return (
    <section id="skills-section" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-heading font-bold mb-4",
            isVisible && "animate-slide-up"
          )}>
            Yeteneklerim
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible && "animate-slide-up"
          )} style={{ animationDelay: '0.1s' }}>
            Modern yazılım geliştirme için kullandığım teknolojiler ve yeteneklerim.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className={cn(
                "overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-primary/10",
                isVisible && "animate-slide-up"
              )}
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} icon`} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/48?text=" + skill.name.charAt(0);
                    }}
                  />
                </div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
                <Badge variant="secondary" className="mt-2 text-xs">
                  {skill.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
