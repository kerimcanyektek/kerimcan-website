
import { useEffect, useState } from 'react';
import { Code, Paintbrush, LayoutGrid, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
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
    
    const element = document.getElementById('services-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Geliştirme",
      description: "Modern JavaScript frameworkleri (React, Vue) ile duyarlı, hızlı ve kullanıcı dostu web uygulamaları geliştiriyorum."
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-primary" />,
      title: "UI/UX Tasarımı",
      description: "Kullanıcı odaklı arayüz tasarımları ve kullanıcı deneyimi planlaması yaparak projenizi farklı bir seviyeye taşıyorum."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Responsive Web Tasarımı",
      description: "Tüm cihazlarda mükemmel çalışan ve görünen, duyarlı web siteleri tasarlıyorum."
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-primary" />,
      title: "Web Animasyonları",
      description: "İlgi çekici ve etkileşimli kullanıcı deneyimleri için modern web animasyonları oluşturuyorum."
    }
  ];

  return (
    <section id="services-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-heading font-bold mb-4",
            isVisible && "animate-slide-up"
          )}>
            Hizmetlerim
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible && "animate-slide-up"
          )} style={{ animationDelay: '0.1s' }}>
            İhtiyaçlarınıza yönelik sunduğum özelleştirilmiş çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20",
                isVisible && "animate-slide-up"
              )}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
