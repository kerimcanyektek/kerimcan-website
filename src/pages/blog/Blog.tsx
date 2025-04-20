import { useEffect, useState } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

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

const POSTS_PER_PAGE = 9;

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Javascript İçinde CSS Yazmak: Styled Components",
    url: "https://www.kerokod.com/javascript-icinde-css-yazmak-styled-components/",
    excerpt: "Javascript içinde stil yazmanın modern yolu: Styled Components ile kod ve stilleri aynı dosyada nasıl yönetebilirsin?",
    date: "05/5/2024",
    readTime: "6 minute",
    category: "yazilim",
    image: "src/assets/blog-images/1.svg",
    tags: ["JavaScript", "CSS", "Styled Components"],
  },
  {
    id: "2",
    title: "CSS Metodolojileri: Daha Temiz ve Daha Sürdürülebilir",
    url: "https://www.kerokod.com/css-metodolojileri-daha-temiz-ve-daha-surdurulebilir/",
    excerpt: "CSS'te sürdürülebilirlik BEM, OOCSS ve SMACSS prensipleriyle nasıl arttırılır? Pratik ve temiz çözümler.",
    date: "05/5/2024",
    readTime: "7 minute",
    category: "yazilim",
    image: "src/assets/blog-images/2.svg",
    tags: ["CSS", "BEM", "Temiz Kod"],
  },
  {
    id: "3",
    title: "React Tabanlı UI Kütüphanesi: Ant Design Nedir Nasıl Kullanılır?",
    url: "https://www.kerokod.com/react-tabanli-ui-kutuphanesi-ant-design-nedir-nasil-kullanilir/",
    excerpt: "Ant Design ile React projelerinde güçlü ve tutarlı arayüzler oluşturmanın püf noktaları.",
    date: "05/5/2024",
    readTime: "8 minute",
    category: "yazilim",
    image: "src/assets/blog-images/3.svg",
    tags: ["React", "Ant Design", "UI Kütüphanesi"],
  },
  {
    id: "4",
    title: "Vite Nedir? Yeni Nesil Hızlı Frontend Geliştirme",
    url: "https://www.kerokod.com/vite-nedir-yeni-nesil-hizli-frontend-gelistirme/",
    excerpt: "Vite ile gelen modern frontend dünyasındaki hız avantajlarını ve proje başlangıcını hızlıca öğren.",
    date: "05/5/2024",
    readTime: "5 minute",
    category: "yazilim",
    image: "src/assets/blog-images/4.svg",
    tags: ["Vite", "Frontend", "Performans"],
  },
  {
    id: "5",
    title: "Cursor AI Nedir? Yapay Zeka Destekli Kod Editörü",
    url: "https://www.patika.dev/blog/cursor-ai-nedir-yapay-zeka-destekli-kod-editoru",
    excerpt: "Cursor AI: Geliştiriciler için yapay zeka destekli yeni nesil kod editörü deneyimi nasıl olur?",
    date: "13/3/2025",
    readTime: "7 minute",
    category: "yazilim",
    image: "src/assets/blog-images/5.svg",
    tags: ["Yapay Zeka", "Kod Editörü", "Verimlilik"],
  },
  {
    id: "6",
    title: "Üretken Yapay Zeka (Generative AI) Nedir?",
    url: "https://www.patika.dev/blog/uretken-yapay-zeka-generative-ai-nedir",
    excerpt: "Generative AI dünyası: Temeller, kullanım alanları ve sektöre getirdiği yenilikler.",
    date: "14/2/2025",
    readTime: "8 minute",
    category: "yazilim",
    image: "src/assets/blog-images/6.svg",
    tags: ["Yapay Zeka", "Generative AI", "Teknoloji"],
  },
  {
    id: "7",
    title: "Yazılım Geliştirmede Hata Türleri",
    url: "https://www.patika.dev/blog/yazilim-gelistirmede-hata-turleri",
    excerpt: "Kodlamada en sık karşılaşılan hata türleri, örnekler ve nasıl önlenir?",
    date: "14/8/2024",
    readTime: "6 minute",
    category: "yazilim",
    image: "src/assets/blog-images/7.svg",
    tags: ["Hata Yönetimi", "Debugging", "Yazılım Kalitesi"],
  },
  {
    id: "8",
    title: "SOLID Prensipleri Nedir?",
    url: "https://www.patika.dev/blog/solid-prensipleri-nedir",
    excerpt: "Modern yazılım geliştirmede kodunuzu daha ölçeklenebilir ve sürdürülebilir yapan SOLID prensipleri.",
    date: "26/7/2024",
    readTime: "7 minute",
    category: "yazilim",
    image: "src/assets/blog-images/8.svg",
    tags: ["SOLID", "OOP", "Kod Kalitesi"],
  },
  {
    id: "9",
    title: "Yazılımcılar İçin Popüler GitHub Repoları",
    url: "https://www.patika.dev/blog/yazilimcilar-icin-populer-github-repolari",
    excerpt: "Geliştirici topluluğunda popüler olmuş, mutlaka göz atılması gereken GitHub repoları.",
    date: "1/8/2024",
    readTime: "6 minute",
    category: "yazilim",
    image: "src/assets/blog-images/9.svg",
    tags: ["GitHub", "Açık Kaynak", "Topluluk"],
  },
  {
    id: "10",
    title: "CSS Nedir? CSS Ne İşe Yarar?",
    url: "https://www.patika.dev/blog/css-nedir-css-ne-ise-yarar",
    excerpt: "CSS hakkında bilmeniz gereken temeller ve web tasarımdaki önemi.",
    date: "7/8/2024",
    readTime: "5 minute",
    category: "yazilim",
    image: "src/assets/blog-images/10.svg",
    tags: ["CSS", "Web Tasarım", "Frontend"],
  },
  {
    id: "11",
    title: "HTML Nedir? HTML Ne İşe Yarar?",
    url: "https://www.patika.dev/blog/html-nedir-html-ne-ise-yarar",
    excerpt: "Web dünyasının temeli HTML nedir? Temel özellikleri ve örnek uygulamalar.",
    date: "7/8/2024",
    readTime: "5 minute",
    category: "yazilim",
    image: "src/assets/blog-images/11.svg",
    tags: ["HTML", "Web", "Temel"],
  },
  {
    id: "12",
    title: "Frontend Uygulamalarında Optimizasyon İpuçları",
    url: "https://www.patika.dev/blog/frontend-uygulamalarinda-optimizasyon-ipuclari",
    excerpt: "Daha hızlı ve verimli frontend geliştirme için güncel optimizasyon teknikleri.",
    date: "25/7/2024",
    readTime: "9 minute",
    category: "yazilim",
    image: "src/assets/blog-images/12.svg",
    tags: ["Frontend", "Optimizasyon", "Performans"],
  },
  {
    id: "13",
    title: "Her Yazılımcının Mutlaka Bilmesi Gereken Beceriler",
    url: "https://www.kerokod.com/her-yazilimcinin-mutlaka-bilmesi-gereken-beceriler/",
    excerpt: "Yazılım geliştirme dünyasında ileriye gitmek için bilinmesi gereken kritik yetkinlikler.",
    date: "02 Tem 2022",
    readTime: "8 minute",
    category: "yazilim",
    image: "src/assets/blog-images/13.svg",
    tags: ["Yazılım", "Kariyer", "Beceri"],
  }
];

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'yazilim', name: 'Development' },
  { id: 'proje', name: 'Project Management' },
  { id: 'uiux', name: 'UI & UX Design' }
];

const BlogPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [animateList, setAnimateList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = filter === 'all' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  useEffect(() => {
    if (filteredPosts.length > 0) {
      setTimeout(() => setAnimateList(true), 50);
    } else {
      setAnimateList(false);
    }
    setCurrentPage(1); // Kategori veya arama değişince 1. sayfaya dön
  }, [filter, searchTerm]);

  useEffect(() => {
    // Sayfa değişince en üste kaydır
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleFilterClick = (category: string) => {
    setFilter(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  // Pagination sayfa numaralarını üret
  const paginationRange = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1, "...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...", totalPages);
      }
    }
    return pages;
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
            Articles about frontend development, web technologies, project management and UI/UX design.
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
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-border rounded-md w-full md:w-60 bg-background focus:outline-none focus:ring-2 focus:ring-primary shadow-[0_4px_20px_0_rgba(0,0,0,0.04)] transition"
              />
            </div>
          </div>
        </div>

        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
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
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary/80 group-hover:pl-2 transition-all"
                    asChild
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No blog posts were found matching your search criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center pt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                {paginationRange().map((page, idx) =>
                  page === "..." ? (
                    <PaginationItem key={page + idx}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => handlePageChange(Number(page))}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
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
