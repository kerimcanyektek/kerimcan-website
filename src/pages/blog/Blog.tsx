import { useEffect, useState } from 'react';
import { Calendar, Clock, Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
};

const BlogPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "React'te Performans Optimizasyonu: 5 Temel Teknik",
      excerpt: "React uygulamalarınızı optimize etmek için kullanabileceğiniz en etkili teknikleri ve best practice'leri bu yazıda bulabilirsiniz.",
      date: "12 Mart 2023",
      readTime: "5 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["React", "Performance", "JavaScript"]
    },
    {
      id: "2",
      title: "Modern CSS: Flexbox ve Grid ile Responsive Layout",
      excerpt: "Modern CSS layout tekniklerini kullanarak responsive tasarımlar oluşturmanın temel prensipleri ve örnekleri.",
      date: "5 Şubat 2023",
      readTime: "7 dakika",
      category: "uiux",
      image: "/placeholder.svg",
      tags: ["CSS", "Responsive", "Layout"]
    },
    {
      id: "3",
      title: "TypeScript ile Daha Güvenli Kod Yazın",
      excerpt: "TypeScript'in sağladığı tip güvenliğini kullanarak daha sağlam ve hatasız kod yazma teknikleri.",
      date: "18 Ocak 2023",
      readTime: "6 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["TypeScript", "JavaScript", "Frontend"]
    },
    {
      id: "4",
      title: "Next.js 13 ile Server Side Rendering",
      excerpt: "Next.js 13'ün getirdiği yenilikler ve server side rendering avantajlarını inceliyoruz.",
      date: "3 Aralık 2022",
      readTime: "8 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["Next.js", "React", "SSR"]
    },
    {
      id: "5",
      title: "Frontend Mimari: Mikro Frontend Yaklaşımı",
      excerpt: "Büyük ölçekli frontend uygulamalarını mikro frontend mimarisi ile nasıl yönetebileceğinizi öğrenin.",
      date: "21 Kasım 2022",
      readTime: "10 dakika",
      category: "proje",
      image: "/placeholder.svg",
      tags: ["Architecture", "Micro Frontend", "React"]
    },
    {
      id: "6",
      title: "Redux Toolkit ile State Yönetimi",
      excerpt: "Redux Toolkit kullanarak React uygulamalarında state yönetimini basitleştirin.",
      date: "7 Ekim 2022",
      readTime: "6 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["Redux", "React", "State Management"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'yazilim', name: 'Yazılım Geliştirme' },
    { id: 'proje', name: 'Proje Yönetimi' },
    { id: 'uiux', name: 'UI & UX Design' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = filter === 'all' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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
            Blog
          </h1>
          <p className={cn(
            "text-lg text-muted-foreground text-center max-w-3xl mx-auto",
            isLoaded && "animate-slide-down"
          )} style={{ animationDelay: '0.1s' }}>
            Frontend geliştirme, web teknolojileri ve UI/UX tasarımı hakkında yazılar.
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
            {categories.map(category => (
              <Button 
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'} 
                onClick={() => handleFilterClick(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full md:w-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-border rounded-md w-full md:w-60 bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id}
                className={cn(
                  "bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20",
                  isLoaded && "animate-slide-up"
                )}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary/80">
                    Devamını Oku <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">Aradığınız kriterlere uygun blog yazısı bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
