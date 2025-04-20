import { useEffect, useState } from 'react';
import { ExternalLink, Github, Search, Code, Layout, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProjectsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "Ricky and Morty",
      description:
        "A dynamic Rick and Morty character listing app built with Next.js and TypeScript, featuring Context API for state management and styled-components for modular design.",
      image: "src/assets/project-images/20.svg",
      category: "web",
      tags: ["React", "Redux", "Styled Components"],
      demoUrl: "https://github.com/kerimcanyektek/ricky-and-morty-app",
      sourceUrl: "https://github.com",
      featuredImage: true,
    },
    {
      title: "Poortre",
      description:
        "Poortre is a platform that analyzes children's drawings using psychological techniques. Expert psychologists help uncover children's emotions and thoughts through their artwork.",
      image: "src/assets/project-images/14.svg",
      category: "wordpress",
      tags: ["Wordpress", "Responsive Design", "SEO", "Optimization"],
      demoUrl: "https://poortre.com",
      featuredImage: false,
    },
    {
      title: "Psychologist Mehmet Ali Yılmaz",
      description:
        "I developed a user-friendly and mobile-responsive corporate website for psychologist Mehmet Ali Yılmaz, which introduces his services and allows users to book appointments online.",
      image: "src/assets/project-images/15.svg",
      category: "wordpress",
      tags: ["Wordpress", "Responsive Design", "SEO", "Optimization"],
      demoUrl: "https://pskmehmetaliyilmaz.com",
      featuredImage: false,
    },
    {
      title: "Villa College",
      description:
        "I built a modern, mobile-friendly website for Villa College that reflects the school’s identity and programs while making it easy for visitors to access information and get in touch.",
      image: "src/assets/project-images/16.svg",
      category: "wordpress",
      tags: ["Wordpress", "Responsive Design", "SEO", "Optimization"],
      demoUrl: "https://villakoleji.k12.tr",
      featuredImage: false,
    },
    {
      title: "Kahraman Agriculture",
      description:
        "I created a mobile-responsive and easy-to-navigate website for Kahraman Tarım, highlighting the company’s agricultural services and enabling potential partners to connect easily.",
      image: "src/assets/project-images/17.svg",
      category: "wordpress",
      tags: ["Wordpress", "Responsive Design", "SEO", "Optimization"],
      demoUrl: "https://kahramansebze.com",
      featuredImage: false,
    },
    {
      title: "Ritim Clinic",
      description:
        "I built a mobile-friendly website for Ritim Klinik that showcases its physiotherapy, diet, and Pilates services, while allowing users to book appointments with ease.",
      image: "src/assets/project-images/18.svg",
      category: "wordpress",
      tags: ["Wordpress", "Responsive Design", "SEO", "Optimization"],
      demoUrl: "https://ritimklinik.com",
      featuredImage: false,
    },
    {
      title: "KEROKOD",
      description:
        "I launched Kerokod in 2019 as a personal blog to share what I’ve learned in the software field, publishing SEO-friendly articles and insights from my journey.",
      image: "src/assets/project-images/19.svg",
      category: "wordpress",
      tags: ["Wordpress", "Responsive Design", "SEO", "Optimization"],
      demoUrl: "https://kerokod.com",
      featuredImage: false,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleFilterClick = (category: string) => {
    setFilter(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="animate-fade-in">
      <div className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-8",
              isLoaded && "animate-slide-down"
            )}
          >
            Projelerim
          </h1>
          <p
            className={cn(
              "text-lg text-muted-foreground text-center max-w-3xl mx-auto",
              isLoaded && "animate-slide-down"
            )}
            style={{ animationDelay: '0.1s' }}
          >
            Geliştirdiğim web siteleri, uygulamalar ve UI/UX tasarımları.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4",
            isLoaded && "animate-slide-up"
          )}
        >
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => handleFilterClick('all')}
              className="flex items-center gap-2"
            >
              <Monitor size={16} />
              Tümü
            </Button>
            <Button
              variant={filter === 'web' ? 'default' : 'outline'}
              onClick={() => handleFilterClick('web')}
              className="flex items-center gap-2"
            >
              <Code size={16} />
              Web Development
            </Button>
            <Button
              variant={filter === 'wordpress' ? 'default' : 'outline'}
              onClick={() => handleFilterClick('wordpress')}
              className="flex items-center gap-2"
            >
              <Layout size={16} />
              Wordpress
            </Button>
          </div>

          <div className="w-full md:w-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-border rounded-md w-full md:w-60 bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20",
                  isLoaded && "animate-slide-up"
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
                  <p
                    className="text-muted-foreground mb-4"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                      >
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
                      View Project <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    ></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Aradığınız kriterlere uygun proje bulunamadı.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;