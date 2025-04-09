
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Bir Projeniz Mi Var?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Projenizi hayata geçirmek için benimle iletişime geçin. 
            Modern ve kullanıcı dostu web uygulamaları geliştirmek için birlikte çalışalım.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-primary">
            <Link to="/contact">
              İletişime Geç
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
