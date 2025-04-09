
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Next.js", level: 80 },
    { name: "Redux", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Styled Components", level: 85 },
    { name: "UI/UX Design", level: 75 },
    { name: "Responsive Design", level: 90 },
  ];

  return (
    <section id="skills-section" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-heading font-bold mb-4",
            isVisible && "animate-slide-up"
          )}>
            Becerilerim
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible && "animate-slide-up"
          )} style={{ animationDelay: '0.1s' }}>
            Modern frontend geliştirme için kullandığım teknolojiler ve yeteneklerim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={cn(
                "bg-background rounded-lg p-4 shadow-sm",
                isVisible && "animate-slide-up"
              )}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
