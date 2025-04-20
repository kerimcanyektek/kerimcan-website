
import { useEffect, useState } from 'react';
import { ArrowRight, Download, Calendar, Briefcase, GraduationCap, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js",
    "Node.js", "HTML5", "CSS3/SASS", "Tailwind CSS", "Styled Components",
    "RESTful APIs", "GraphQL", "Git", "Figma", "UI/UX Design",
    "Jest", "React Testing Library", "Webpack", "AWS"
  ];

  const experiences = [
    {
      position: "Frontend Engineer",
      company: "Jotform",
      period: "Haz 2020 - Şu an",
      description: "Jotform'un kapsamlı form oluşturma platformunda React ve TypeScript kullanarak yenilikçi özellikler ve arayüzler geliştiriyorum. PDF form işleme ve karmaşık veri görselleştirme araçları içeren yeni çözümler tasarladım."
    },
    {
      position: "Frontend Developer",
      company: "Hepsiburada.com",
      period: "Tem 2019 - Haz 2020",
      description: "Türkiye'nin lider e-ticaret platformunda Vue.js ve React kullanarak büyük ölçekli web uygulamaları geliştirdim. Performans optimizasyonu ile sayfa yüklenme sürelerini %30 azaltan geliştirmeler yaptım."
    },
    {
      position: "Frontend Developer",
      company: "Arçelik Global",
      period: "Eki 2018 - Tem 2019",
      description: "Arçelik'in çeşitli dijital projelerinde JavaScript, React ve Angular kullanarak inovatif kullanıcı arayüzleri geliştirdim. Responsive tasarım prensipleri ve test odaklı geliştirme yaklaşımıyla kaliteli kod ürettim."
    },
    {
      position: "Web Developer",
      company: "Yalova Üniversitesi",
      period: "Oca 2018 - Eyl 2018",
      description: "Üniversite web sitelerini ve iç uygulamalarını HTML, CSS ve JavaScript kullanarak geliştirdim. Kullanıcı deneyimine odaklanan erişilebilir web siteleri tasarladım."
    }
  ];

  const education = [
    {
      degree: "Bilgisayar Mühendisliği",
      institution: "Yalova Üniversitesi",
      period: "2014 - 2018",
      description: "Web geliştirme, veri yapıları, algoritmalar ve yazılım mühendisliği alanlarına odaklanarak bilgisayar bilimi eğitimi aldım."
    },
    {
      degree: "Erasmus+ Öğrenci Değişim Programı",
      institution: "Vilnius Gediminas Technical University",
      period: "2017",
      description: "Litvanya'da web teknolojileri ve yazılım geliştirme üzerine eğitim aldım."
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
            Kullanıcı deneyimine odaklanan, modern ve performans odaklı web uygulamaları geliştiren bir Frontend Engineer'im.
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
                src="/lovable-uploads/0db8acda-21b1-4f97-96c2-79d5227b1969.png" 
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
                    Merhaba! Ben Kerimcan, 5+ yıllık deneyime sahip bir Frontend Engineer'im. Modern web teknolojileri kullanarak kullanıcı dostu, performans odaklı ve erişilebilir web uygulamaları geliştiriyorum.
                  </p>
                  <p>
                    Şu anda Jotform'da Frontend Engineer olarak çalışıyorum. React ve TypeScript ile kompleks form çözümleri, PDF form işleme ve veri görselleştirme araçları geliştiriyorum. Mikro frontend mimarisi ve modern JavaScript kütüphaneleri konusunda uzmanlığım var.
                  </p>
                  <p>
                    Daha önce Hepsiburada.com ve Arçelik gibi büyük şirketlerde Vue.js ve React ile e-ticaret ve dijital çözümler geliştirdim. Performans optimizasyonu, kullanıcı deneyimi tasarımı ve test odaklı geliştirme konularında deneyimliyim.
                  </p>
                  <p>
                    Yazılım geliştirme süreçlerinde kaliteli kod üretmeye, teknik borçları azaltmaya ve sürekli öğrenmeye değer veriyorum. Yeni teknolojileri keşfetmeyi ve bilgilerimi ekibimle paylaşmayı seviyorum.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center">
                  İletişim Bilgileri
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    <a 
                      href="mailto:me@kerimcanyektek.com" 
                      className="hover:text-primary transition-colors"
                    >
                      me@kerimcanyektek.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    <span>Mersin, Türkiye</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center">
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
