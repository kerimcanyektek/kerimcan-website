
import { useEffect, useState } from 'react';
import { ArrowRight, Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Redux", "Next.js",
    "HTML5", "CSS3/SASS", "Tailwind CSS", "Styled Components",
    "RESTful APIs", "GraphQL", "Git", "Figma", "UI/UX Design",
    "Jest", "React Testing Library", "Webpack", "Node.js basics"
  ];

  const experiences = [
    {
      position: "Senior Frontend Developer",
      company: "ABC Digital",
      period: "2021 - Şu an",
      description: "Modern web uygulamaları geliştirmek için React ve TypeScript kullanıyorum. Mikro frontend mimarisiyle ölçeklenebilir ve bakımı kolay uygulamalar oluşturuyorum."
    },
    {
      position: "Frontend Developer",
      company: "XYZ Tech",
      period: "2019 - 2021",
      description: "React tabanlı uygulamalar geliştirdim ve kullanıcı deneyimini iyileştirmek için UI/UX tasarım prensiplerini uyguladım."
    },
    {
      position: "Junior Web Developer",
      company: "123 Web Agency",
      period: "2017 - 2019",
      description: "HTML, CSS ve JavaScript kullanarak duyarlı web siteleri oluşturdum. jQuery ve Bootstrap gibi kütüphanelerle çalıştım."
    }
  ];

  const education = [
    {
      degree: "Bilgisayar Mühendisliği",
      institution: "İstanbul Teknik Üniversitesi",
      period: "2013 - 2017",
      description: "Bilgisayar bilimi, veri yapıları, algoritmalar ve yazılım mühendisliği alanlarında eğitim aldım."
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-8",
            isLoaded && "animate-slide-down"
          )}>
            Hakkımda
          </h1>
          <p className={cn(
            "text-lg text-muted-foreground text-center max-w-3xl mx-auto",
            isLoaded && "animate-slide-down"
          )} style={{ animationDelay: '0.1s' }}>
            Frontend geliştirici olarak kullanıcı odaklı ve yüksek performanslı web uygulamaları oluşturuyorum.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className={cn(
              "rounded-xl overflow-hidden shadow-md",
              isLoaded && "animate-slide-from-left"
            )}>
              <img 
                src="/placeholder.svg" 
                alt="Kerimcan Yektek" 
                className="w-full h-auto"
              />
            </div>

            <div className={cn(
              "mt-8 space-y-8",
              isLoaded && "animate-slide-from-left"
            )} style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-xl font-medium mb-4">Becerilerim</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <Button asChild variant="outline" className="w-full">
                  <a href="/cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    CV'mi İndir
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 order-1 md:order-2">
            <div className={cn(
              "space-y-8",
              isLoaded && "animate-slide-from-right"
            )}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Ben Kimim?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Merhaba! Ben Kerimcan, İstanbul'da yaşayan tutkulu bir Frontend Developer'ım. 5+ yıllık deneyimle modern, kullanıcı dostu web uygulamaları geliştiriyorum.
                  </p>
                  <p>
                    Frontend geliştirmede React, TypeScript ve modern JavaScript ekosistemi konusunda uzmanlığa sahibim. Kullanıcı deneyimini ön planda tutarak, estetik ve fonksiyonel arayüzler tasarlıyorum. Responsive tasarım, performans optimizasyonu ve erişilebilirlik konularında titizlikle çalışıyorum.
                  </p>
                  <p>
                    Sadece kod yazmıyorum, aynı zamanda UI/UX tasarım prensiplerini de uygulayarak, kullanıcıların sorunlarını çözen ve onlara değer katan çözümler üretiyorum. Yeni teknolojileri yakından takip ediyor ve sürekli kendimi geliştiriyorum.
                  </p>
                  <p>
                    İşbirliğine açık bir ekip oyuncusuyum ve projeleri başarıyla tamamlamak için iletişimi önemsiyorum. Her projede kaliteli, temiz ve sürdürülebilir kod yazmayı hedefliyorum.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center">
                  <Briefcase className="mr-2 h-6 w-6 text-primary" />
                  Deneyimlerim
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4 pb-6 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                      <h3 className="text-xl font-medium">{exp.position}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center">
                  <GraduationCap className="mr-2 h-6 w-6 text-primary" />
                  Eğitim
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4 pb-6 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                      <h3 className="text-xl font-medium">{edu.degree}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span>{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
