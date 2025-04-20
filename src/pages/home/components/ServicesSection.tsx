
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
      title: "Wordpress Services",
      description: "I create powerful and easy-to-manage corporate websites with customized WordPress solutions.",
      link: "https://grodea.com/hizmetler/wordpress/"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "I design fast, user-friendly, and visually impressive corporate websites using modern technologies.",
      link: "https://grodea.com/hizmetler/kurumsal-web-tasarim/"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "E-Ticaret Çözümleri",
      description: "I offer professional e-commerce solutions with IdeaSoft infrastructure to accelerate your digital transformation, simplify sales processes, and enhance customer satisfaction.",
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
            Services
          </h2>
          <p
            className={cn(
              "text-muted-foreground transition-all duration-700",
              isVisible ? "animate-fade-in opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "0.25s" }}
          >
            Tailored digital solutions to help your business grow online.
            From custom WordPress websites to full-scale e-commerce platforms, I provide user-friendly and performance-driven web development services.
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
