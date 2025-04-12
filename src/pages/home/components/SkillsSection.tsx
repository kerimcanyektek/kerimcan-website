import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import GithubWhiteLogo from '@/assets/icons/github-white.svg';

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
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", 
      category: "CMS"
    },
    { 
      name: "HTML", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      category: "Frontend"
    },
    { 
      name: "CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      category: "Frontend"
    },
    { 
      name: "Javascript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      category: "Frontend"
    },
    { 
      name: "Typescript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
      category: "Frontend"
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      category: "Frontend"
    },
    { 
      name: "Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
      category: "Frontend"
    },
    { 
      name: "Figma", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", 
      category: "Design"
    },
    { 
      name: "Adobe Photoshop", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg", 
      category: "Design"
    },
    { 
      name: "Git & Github", 
      icon: GithubWhiteLogo, 
      category: "Tools"
    },
    { 
      name: "Agile / Scrum", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", 
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skills.slice(0, 8).map((skill, index) => (
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
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/48?text=${skill.name.charAt(0)}`;
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
          
          <div className="md:col-start-2 md:col-span-2 flex justify-center gap-4">
            {skills.slice(8).map((skill, index) => (
              <Card 
                key={skill.name}
                className={cn(
                  "overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-primary/10 w-full max-w-xs",
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
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/48?text=${skill.name.charAt(0)}`;
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
      </div>
    </section>
  );
};

export default SkillsSection;
