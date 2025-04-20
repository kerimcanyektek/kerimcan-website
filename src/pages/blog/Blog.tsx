import { useEffect, useState } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type BlogPost = {
  id: string;
  title: string;
  url: string;
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
  const [animateList, setAnimateList] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Javascript İçinde CSS Yazmak: Styled Components",
      url: "https://www.kerokod.com/javascript-icinde-css-yazmak-styled-components/",
      excerpt: "Javascript içinde stil yazmanın modern yolu: Styled Components ile kod ve stilleri aynı dosyada nasıl yönetebilirsin?",
      date: "05 Haz 2022",
      readTime: "6 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["JavaScript", "CSS", "Styled Components"],
    },
    {
      id: "2",
      title: "CSS Metodolojileri: Daha Temiz ve Daha Sürdürülebilir",
      url: "https://www.kerokod.com/css-metodolojileri-daha-temiz-ve-daha-surdurulebilir/",
      excerpt: "CSS'te sürdürülebilirlik BEM, OOCSS ve SMACSS prensipleriyle nasıl arttırılır? Pratik ve temiz çözümler.",
      date: "11 Mar 2022",
      readTime: "7 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["CSS", "BEM", "Temiz Kod"],
    },
    {
      id: "3",
      title: "React Tabanlı UI Kütüphanesi: Ant Design Nedir Nasıl Kullanılır?",
      url: "https://www.kerokod.com/react-tabanli-ui-kutuphanesi-ant-design-nedir-nasil-kullanilir/",
      excerpt: "Ant Design ile React projelerinde güçlü ve tutarlı arayüzler oluşturmanın püf noktaları.",
      date: "21 Oca 2023",
      readTime: "8 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["React", "Ant Design", "UI"],
    },
    {
      id: "4",
      title: "Vite Nedir? Yeni Nesil Hızlı Frontend Geliştirme",
      url: "https://www.kerokod.com/vite-nedir-yeni-nesil-hizli-frontend-gelistirme/",
      excerpt: "Vite ile gelen modern frontend dünyasındaki hız avantajlarını ve proje başlangıcını hızlıca öğren.",
      date: "06 Nis 2023",
      readTime: "5 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["Vite", "Frontend", "Performans"],
    },
    {
      id: "5",
      title: "Cursor AI Nedir? Yapay Zeka Destekli Kod Editörü",
      url: "https://www.patika.dev/blog/cursor-ai-nedir-yapay-zeka-destekli-kod-editoru",
      excerpt: "Cursor AI: Geliştiriciler için yapay zeka destekli yeni nesil kod editörü deneyimi nasıl olur?",
      date: "23 May 2024",
      readTime: "7 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["Yapay Zeka", "Kod Editörü", "Verimlilik"],
    },
    {
      id: "6",
      title: "Üretken Yapay Zeka (Generative AI) Nedir?",
      url: "https://www.patika.dev/blog/uretken-yapay-zeka-generative-ai-nedir",
      excerpt: "Generative AI dünyası: Temeller, kullanım alanları ve sektöre getirdiği yenilikler.",
      date: "29 Şub 2024",
      readTime: "8 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["Yapay Zeka", "Generative AI", "Teknoloji"],
    },
    {
      id: "7",
      title: "Yazılım Geliştirmede Hata Türleri",
      url: "https://www.patika.dev/blog/yazilim-gelistirmede-hata-turleri",
      excerpt: "Kodlamada en sık karşılaşılan hata türleri, örnekler ve nasıl önlenir?",
      date: "14 Oca 2024",
      readTime: "6 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["Hata Yönetimi", "Debugging", "Yazılım Kalitesi"],
    },
    {
      id: "8",
      title: "SOLID Prensipleri Nedir?",
      url: "https://www.patika.dev/blog/solid-prensipleri-nedir",
      excerpt: "Modern yazılım geliştirmede kodunuzu daha ölçeklenebilir ve sürdürülebilir yapan SOLID prensipleri.",
      date: "17 Ara 2023",
      readTime: "7 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["SOLID", "OOP", "Kod Kalitesi"],
    },
    {
      id: "9",
      title: "Yazılımcılar İçin Popüler GitHub Repoları",
      url: "https://www.patika.dev/blog/yazilimcilar-icin-populer-github-repolari",
      excerpt: "Geliştirici topluluğunda popüler olmuş, mutlaka göz atılması gereken GitHub repoları.",
      date: "08 Kas 2023",
      readTime: "6 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["GitHub", "Açık Kaynak", "Topluluk"],
    },
    {
      id: "10",
      title: "CSS Nedir? CSS Ne İşe Yarar?",
      url: "https://www.patika.dev/blog/css-nedir-css-ne-ise-yarar",
      excerpt: "CSS hakkında bilmeniz gereken temeller ve web tasarımdaki önemi.",
      date: "17 Eki 2023",
      readTime: "5 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["CSS", "Web Tasarım", "Frontend"],
    },
    {
      id: "11",
      title: "HTML Nedir? HTML Ne İşe Yarar?",
      url: "https://www.patika.dev/blog/html-nedir-html-ne-ise-yarar",
      excerpt: "Web dünyasının temeli HTML nedir? Temel özellikleri ve örnek uygulamalar.",
      date: "12 Eyl 2023",
      readTime: "5 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["HTML", "Web", "Temel"],
    },
    {
      id: "12",
      title: "Frontend Uygulamalarında Optimizasyon İpuçları",
      url: "https://www.patika.dev/blog/frontend-uygulamalarinda-optimizasyon-ipuclari",
      excerpt: "Daha hızlı ve verimli frontend geliştirme için güncel optimizasyon teknikleri.",
      date: "10 Eyl 2023",
      readTime: "9 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["Frontend", "Optimizasyon", "Performans"],
    },
    {
      id: "13",
      title: "Her Yazılımcının Mutlaka Bilmesi Gereken Beceriler",
      url: "https://www.kerokod.com/her-yazilimcinin-mutlaka-bilmesi-gereken-beceriler/",
      excerpt: "Yazılım geliştirme dünyasında ileriye gitmek için bilinmesi gereken kritik yetkinlikler.",
      date: "02 Tem 2022",
      readTime: "8 dakika",
      category: "yazilim",
      image: "/placeholder.svg",
      tags: ["Yazılım", "Kariyer", "Beceri"],
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

  useEffect(() => {
    if (filteredPosts.length > 0) {
      setTimeout(() => setAnimateList(true), 50);
    } else {
      setAnimateList(false);
    }
  }, [filter, searchTerm]);

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
              "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-8 transition-all duration-700 origin-top animate-[slide-down_700ms_ease]",
              isLoaded ? "opacity-100" : "opacity-0 -translate-y-8"
            )}
          >
            Blog
          </h1>
          <p
            className={cn(
              "text-lg text-muted-foreground text-center max-w-3xl mx-auto transition-all duration-700 animate-fade-in",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "0.15s" }}
          >
            Frontend geliştirme, web teknolojileri ve UI/UX tasarımı hakkında yazılar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 transition-all duration-700 animate-[slide-up_700ms_ease]",
            isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "0.25s" }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                onClick={() => handleFilterClick(category.id)}
                className="transition-transform duration-200 focus:scale-105"
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="w-full md:w-auto relative">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-border rounded-md w-full md:w-60 bg-background focus:outline-none focus:ring-2 focus:ring-primary shadow-[0_4px_20px_0_rgba(0,0,0,0.04)] transition"
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
                  "bg-card rounded-xl overflow-hidden shadow-md border border-border transform transition duration-700 hover:scale-[1.035] hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 group",
                  animateList ? "animate-fade-in opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: `${0.1 + index * 0.10}s` }}
              >
                <div className="h-48 overflow-hidden relative group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={tag + idx}
                        className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground tracking-wide border border-border hover:bg-primary/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline text-xl font-semibold mb-2 text-primary transition-colors"
                  >
                    {post.title}
                  </a>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4 gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary/80 group-hover:pl-2 transition-all">
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

      <style>{`
        @keyframes slide-down {
          0% { opacity: 0; transform: translateY(-40px) scale(0.95);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(48px) scale(0.98);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        .animate-[slide-down_700ms_ease] {
          animation: slide-down 0.7s cubic-bezier(.6,.05,.15,1) 0s 1 both;
        }
        .animate-[slide-up_700ms_ease] {
          animation: slide-up 0.7s cubic-bezier(.6,.05,.15,1) 0s 1 both;
        }
        .animate-fade-in {
          animation: fade-in .5s cubic-bezier(.66,0,.34,1) 0s 1 both;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}
      </style>
    </div>
  );
};

export default BlogPage;
