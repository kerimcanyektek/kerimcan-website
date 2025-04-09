
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
      title: "E-Ticaret Platformu",
      description: "React ve Redux kullanarak geliştirilen kapsamlı bir e-ticaret çözümü. Kullanıcı dostu arayüz ve güçlü altyapı.",
      image: "/placeholder.svg",
      category: "web",
      tags: ["React", "Redux", "Styled Components"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com",
      featuredImage: true
    },
    {
      title: "Finans Dashboard",
      description: "Finansal verileri görselleştiren, gerçek zamanlı güncellenen bir dashboard uygulaması.",
      image: "/placeholder.svg",
      category: "web",
      tags: ["TypeScript", "Next.js", "TailwindCSS"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com",
      featuredImage: true
    },
    {
      title: "Blog Platformu",
      description: "İçerik yönetim sistemi ve okuyucu deneyimi odaklı modern bir blog uygulaması.",
      image: "/placeholder.svg",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com",
      featuredImage: true
    },
    {
      title: "Hava Durumu Uygulaması",
      description: "Gerçek zamanlı hava durumu verilerini gösteren PWA uyumu mobil uygulaması.",
      image: "/placeholder.svg",
      category: "mobile",
      tags: ["React", "PWA", "Weather API"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com",
      featuredImage: false
    },
    {
      title: "Film Veritabanı",
      description: "Film ve dizileri arayabileceğiniz, detaylı bilgilerini görebileceğiniz bir uygulama.",
      image: "/placeholder.svg",
      category: "mobile",
      tags: ["React Native", "TMDB API", "Redux"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com",
      featuredImage: false
    },
    {
      title: "Kurumsal Web Sitesi",
      description: "Modern ve şık bir kurumsal web sitesi tasarımı ve implementasyonu.",
      image: "/placeholder.svg",
      category: "ui",
      tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
      demoUrl: "https://demo.com",
      sourceUrl: "https://github.com",
      featuredImage: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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
          <h1 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-8",
            isLoaded && "animate-slide-down"
          )}>
            Projelerim
          </h1>
          <p className={cn(
            "text-lg text-muted-foreground text-center max-w-3xl mx-auto",
            isLoaded && "animate-slide-down"
          )} style={{ animationDelay: '0.1s' }}>
            Geliştirdiğim web siteleri, uygulamalar ve UI/UX tasarımları.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4",
          isLoaded && "animate-slide-up"
        )}>
          {/* Filter buttons */}
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
              Web Uygulamaları
            </Button>
            <Button 
              variant={filter === 'mobile' ? 'default' : 'outline'} 
              onClick={() => handleFilterClick('mobile')}
              className="flex items-center gap-2"
            >
              <Layout size={16} />
              Mobil Uygulamalar
            </Button>
            <Button 
              variant={filter === 'ui' ? 'default' : 'outline'} 
              onClick={() => handleFilterClick('ui')}
              className="flex items-center gap-2"
            >
              <Layout size={16} />
              UI/UX Tasarımları
            </Button>
          </div>

          {/* Search */}
          <div className="w-full md:w-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Projelerde ara..."
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
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">Aradığınız kriterlere uygun proje bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
