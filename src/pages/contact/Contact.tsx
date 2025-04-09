
import { useEffect, useState, useRef } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use EmailJS to send the email
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formRef.current!,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    .then(() => {
      toast({
        title: "Mesajınız gönderildi!",
        description: "En kısa sürede size dönüş yapacağım.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      toast({
        title: "Gönderim başarısız!",
        description: "Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-8",
            isLoaded && "animate-slide-down"
          )}>
            İletişim
          </h1>
          <p className={cn(
            "text-lg text-muted-foreground text-center max-w-3xl mx-auto",
            isLoaded && "animate-slide-down"
          )} style={{ animationDelay: '0.1s' }}>
            Projenizi hayata geçirmek veya sorularınız için benimle iletişime geçin.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className={cn(
            "md:col-span-4",
            isLoaded && "animate-slide-from-left"
          )}>
            <h2 className="text-2xl font-heading font-bold mb-6">İletişim Bilgileri</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Adres</h3>
                  <address className="not-italic text-muted-foreground">
                    Mersin, Türkiye
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">E-posta</h3>
                  <a href="mailto:me@kerimcanyektek.com" className="text-muted-foreground hover:text-primary transition-colors">
                    me@kerimcanyektek.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={cn(
            "md:col-span-8",
            isLoaded && "animate-slide-from-right"
          )}>
            <h2 className="text-2xl font-heading font-bold mb-6">Mesaj Gönderin</h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Adınız <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Konu <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mesajınız <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>Gönderiliyor...</>
                ) : (
                  <>
                    Mesaj Gönder
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className={cn(
          "mt-16",
          isLoaded && "animate-slide-up"
        )} style={{ animationDelay: '0.3s' }}>
          <div className="bg-secondary aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
              Harita burada görünecek
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
