import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.20 }
    );
    
    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  const testimonials = [
    {
      content: "We worked with Kerimcan on various content marketing processes related to software development. He is fast and well-versed in current trends. His SEO-friendly articles for the Coderspace Blog and contributions to our monthly developer newsletter, Codebrew, have added great value to our content.",
      author: "Ahmet Hoşgör",
      position: "Co-Founder",
      company: "Coderspace",
    },
    {
      content: "A motivated and determined developer — a true team player. He never shies away from responsibility and consistently keeps his lead and team updated throughout the process.",
      author: "Ahmet Yılmaz",
      position: "Frontend Team Lead",
      company: "GittiGidiyor",
    },
    {
      content: "I met Kerimcan in 2020 when I joined his blog content site as one of the writers. Since then, his ability to expand the scope of his work, grow his business, and move forward tirelessly with an entrepreneurial spirit has always been a source of inspiration for me. With his inner motivation and self-discipline, achieving his goals is always inevitable. 🚀✨",
      author: "Esmanur Yıldırım",
      position: "Learning & Development, Employer Braanding Executive - Professional Coach",
      company: "Yıldız Holding",
    }
  ];

  return (
    <section id="testimonials-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-heading font-bold mb-4 transition-all duration-700",
              isVisible ? "animate-slide-up opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "0.2s" }}
          >
            What Do They Say About Me?
          </h2>
          <p
            className={cn(
              "text-muted-foreground transition-all duration-700",
              isVisible ? "animate-fade-in opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "0.25s" }}
          >
            Experiences and feedback from the people I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-500 hover:shadow-md hover:border-primary/20",
                isVisible ? "animate-slide-up opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${0.35 + index * 0.15}s` }}
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-foreground mb-6">{testimonial.content}</p>
              <div className="flex items-center">
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
