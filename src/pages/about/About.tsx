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
      company: "GRODEA",
      position: "Freelance Web Developer",
      period: "2022 - 2025",
      description:
        "At Grodea, I developed corporate websites for brands to effectively reach their potential customers, using WordPress. Additionally, I offered freelance digital marketing services, including social media account management and strategic digital content production.",
    },
    {
      company: "SmartMessage",
      position: "Freelance Web Developer",
      period: "2023 - 2024",
      description: "",
    },
    {
      company: "eBay Turkey & GittiGidiyor",
      position: "Frontend Developer",
      period: "2021 - 2022",
      description:
        "In July 2021, I participated in the GittiGidiyor Technology Academy organized by GittiGidiyor. Following intensive software engineering training and hands-on projects guided by accomplished software engineers from GittiGidiyor, I transitioned into my role as a Jr. Front-end Developer starting October 2021, contributing actively to the team.",
    },
    {
      company: "Coderspace",
      position: "Freelance Tech Editor (Software Development)",
      period: "2021",
      description:
        "At Coderspace, the Technology Talent Career Platform, I curated the content for the monthly software developer's newsletter (CodeBrew), where we disseminate the latest advancements in the software industry, along with crafting SEO-friendly articles focusing on software and technology.",
    },
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
                <h2
                  className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center gap-2"
                  style={{
                    color: "#7E69AB",
                  }}
                >
                  {/* Lucide Briefcase ikonunu başlıkta kullanmak için */}
                  <span>
                    <svg width="28" height="28" fill="none" stroke="#7E69AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase mr-2"><rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 3v4M8 3v4m-5 7v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" /></svg>
                  </span>
                  Experience
                  <span
                    className="flex-1 h-px ml-3 mr-4 md:mr-8"
                    style={{
                      background:
                        "linear-gradient(90deg, #7E69AB 60%, rgba(158, 149, 183, 0.17) 100%)",
                      opacity: 0.5,
                      height: "2px",
                    }}
                  />
                </h2>
                <div className="relative ml-2 md:ml-6">
                  {/* Timeline dikey çizgisi */}
                  <div
                    className="absolute left-3 top-0 h-full w-[2px] z-0"
                    style={{
                      background:
                        "linear-gradient(180deg, #b59cdf 0%, #fadcb8 70%)",
                      minHeight: "96%",
                      opacity: 0.6,
                    }}
                  />
                  <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                      <div
                        key={exp.company}
                        className="relative flex"
                      >
                        {/* Nokta */}
                        <span
                          className="absolute -left-2 top-1.5 w-5 h-5 rounded-full flex items-center justify-center z-10"
                        >
                          <span
                            className="block w-3 h-3 rounded-full"
                            style={{
                              background: "#b59cdf",
                              border: "2.5px solid #f0e6f7",
                              boxShadow:
                                "0 0 0 2px rgba(115,84,188,0.18)",
                            }}
                          />
                        </span>

                        {/* İçerik */}
                        <div className="pl-8 flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                          <div className="flex-grow">
                            <span className="block font-bold text-lg md:text-xl text-[#5E527B]">{exp.company}</span>
                            <span className="block font-medium text-md text-[#8A898C] mb-1">{exp.position}</span>
                            {exp.description && (
                              <p className="mt-1 text-md text-[#616161] leading-relaxed max-w-2xl">{exp.description}</p>
                            )}
                          </div>
                          <span className="ml-4 font-medium text-[#7E69AB] text-md md:text-lg whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
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
