
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
    "Cypress", "React Testing Library", "Webpack", "Agile/Scrum",
    "SEO", "WordPress", "Micro Frontend Architecture", "CI/CD"
  ];

  const education = [
    {
      degree: "Computer Programming",
      institution: "Akdeniz University",
      period: "2019 - 2021",
    },
  ];

  const experiences = [
    {
      position: "Frontend Developer (Freelancer)",
      company: "GRODEA",
      period: "Oct 2022 - Mar 2025",
      description: "I have worked as a freelancer, developing corporate websites for brands using HTML, CSS, JavaScript, React, Next.js, and WordPress technologies. Additionally, I have provided SEO-friendly article writing services in the Technology / Software category."
    },
    {
      position: "Frontend Developer",
      company: "SmartMessage",
      period: "Dec 2023 - Feb 2024",
      description: "I worked as a Frontend Developer at SmartMessage, supporting various projects. During this process, I contributed to frontend development while collaborating effectively with the team."
    },
    {
      position: "Frontend Developer",
      company: "eBay Turkey & GittiGidiyor",
      period: "Jun 2021 - Nov 2022",
      description: "In July 2021, I participated in the GittiGidiyor Technology Academy, organized by GittiGidiyor. After an intensive software engineering training program and hands-on projects under the guidance of GittiGidiyor's experienced software engineers, I received a job offer as a result of my success in the program. As of October 2021, I started working at GittiGidiyor as a Jr. Front-end Developer. For 1.5 years, I was part of the Scrum team responsible for the product detail page, contributing to frontend development processes and ensuring the successful delivery of projects together with the team."
    },
    {
      position: "SEO Content Writer (Tech)",
      company: "Coderspace.io",
      period: "Jan 2021 - Oct 2021",
      description: "While I was still a student, I founded Kerokod.com, where I shared my knowledge and experiences in software development while also managing a developer community. My work caught the attention of Coderspace, which offered me a project-based role in producing SEO-friendly technical content. Through this opportunity, I gained valuable experience by creating software and technology-focused content, allowing me to both learn new things and enhance my skills."
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
            About Me
          </h1>
          <p className={cn(
            "text-lg text-muted-foreground text-center max-w-3xl mx-auto",
            isLoaded && "animate-slide-down"
          )} style={{ animationDelay: '0.1s' }}>
            I am a Frontend Developer focused on user experience, building modern and performance-oriented web applications.
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

            <div className="pt-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center">
                  Contact Me
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
                    <span>Mersin, Turkey</span>
                  </div>
                </div>
              </div>

            <div className={cn(
              "mt-8 space-y-8",
              isLoaded && "animate-slide-from-left"
            )} style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-xl font-medium mb-4">Skills</h3>
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
                  <a href="/KerimcanYektek-CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
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
                  Who Am I ?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                  I have been actively working on web projects for over 4 years, meticulously ensuring that my projects comply with modern web standards. During the development process, I pay particular attention to W3C standards, browser compatibility, high performance, and search engine optimization (SEO).
                  </p>
                  <p>
                  My areas of expertise include WordPress, HTML, CSS (CSS Preprocessors, Bootstrap, Tailwind), JavaScript, TypeScript, React, Next.js, Node.js, Styled-Components, ANT Design, and GraphQL. Additionally, I work on micro frontend architecture and the development of modular structures.                  </p>
                  <p>
                  I have experience in the e-commerce sector, where I have developed SEO-friendly, high-performance, and scalable solutions. I am proficient in managing test processes, debugging, and improving software quality using Cypress and manual testing tools. I actively use DevOps tools such as Netlify, Vercel, and GitLab and have knowledge of CI/CD pipeline management.                  </p>
                  <p>
                  Furthermore, I have experience in project management and team coordination with Agile & Scrum methodologies, and I continue to improve myself in this field. In the future, I aim to specialize in technical leadership and process management, focusing on a Team Lead / Scrum Master role.
                  </p>
                  <p>
                  I am passionate about following new technologies, continuously learning, and improving myself.
                  </p>
                </div>
              </div>



              <div className="pt-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center">
                  Education
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
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center">
                  Experience
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
