
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
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
    
    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const testimonials = [
    {
      content: "Kerimcan ile çalışmak gerçekten harika bir deneyimdi. Projemizi zamanında ve beklentilerimizin ötesinde tamamladı.",
      author: "Ahmet Yılmaz",
      position: "Kurucu & CEO",
      company: "XYZ Teknoloji",
      avatar: "/placeholder.svg"
    },
    {
      content: "Profesyonel çalışma etiği ve teknik bilgisiyle fark yaratan bir geliştirici. Gelecek projelerimizde tekrar birlikte çalışmayı umuyorum.",
      author: "Zeynep Kaya",
      position: "Ürün Müdürü",
      company: "ABC Digital",
      avatar: "/placeholder.svg"
    },
    {
      content: "Kerimcan'ın geliştirdiği kullanıcı arayüzü hem estetik hem de kullanıcı dostu. Mobil cihazlarda da mükemmel çalışıyor.",
      author: "Mehmet Demir",
      position: "Pazarlama Direktörü",
      company: "123 E-Ticaret",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section id="testimonials-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-heading font-bold mb-4",
            isVisible && "animate-slide-up"
          )}>
            Müşteri Yorumları
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isVisible && "animate-slide-up"
          )} style={{ animationDelay: '0.1s' }}>
            Birlikte çalıştığım kişilerin deneyimleri ve geri bildirimleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20",
                isVisible && "animate-slide-up"
              )}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-foreground mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img 
                    className="h-10 w-10 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
