
import { useEffect, useState } from 'react';
import { Code, ShoppingCart, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    const element = document.getElementById('services-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Wordpress Hizmetleri",
      description: "Özelleştirilmiş WordPress çözümleri ile güçlü ve yönetimi kolay web siteleri oluşturuyorum.",
      link: "https://grodea.com/hizmetler/wordpress/"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Geliştirme",
      description: "Modern teknolojiler kullanarak hızlı, kullanıcı dostu ve etkileyici kurumsal web siteleri tasarlıyorum.",
      link: "https://grodea.com/hizmetler/kurumsal-web-tasarim/"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "E-Ticaret Çözümleri",
      description: "IdeaSoft e-ticaret altyapısıyla, işletmenizin dijital dönüşümünü hızlandıracak, satış süreçlerini kolaylaştıracak ve müşteri memnuniyetini artıracak profesyonel e-ticaret çözümleri sunuyoruz.",
      link: "https://grodea.com/hizmetler/e-ticaret/"
    }
  ];

  return (
    <section id="services-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-heading font-bold mb-4 transition-all duration-700",
              isVisible ? "animate-slide-up opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "0.2s" }}
          >
            Hizmetlerim
          </h2>
          <p
            className={cn(
              "text-muted-foreground transition-all duration-700",
              isVisible ? "animate-fade-in opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "0.25s" }}
          >
            İhtiyaçlarınıza yönelik sunduğum özelleştirilmiş çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-500 hover:shadow-md hover:border-primary/20 hover:-translate-y-1",
                isVisible ? "animate-slide-up opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${0.35 + index * 0.15}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
