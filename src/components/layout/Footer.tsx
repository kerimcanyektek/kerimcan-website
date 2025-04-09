
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <NavLink to="/" className="text-xl font-heading font-bold mb-4 inline-block">
              Kerimcan<span className="text-primary">.</span>Yektek
            </NavLink>
            <p className="text-muted-foreground max-w-md mt-2">
              Frontend geliştirici olarak modern web teknolojileri ve kullanıcı deneyimi tasarımı konusunda uzmanım. Kullanıcı dostu ve performanslı web uygulamaları geliştiriyorum.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/kerimcanyektek" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/kerimcanyektek" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/kerimcanyektek" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@kerimcanyektek.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Linkler</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Ana Sayfa
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımda
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projeler
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                İstanbul, Türkiye
              </li>
              <li>
                <a href="mailto:info@kerimcanyektek.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@kerimcanyektek.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Kerimcan Yektek. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
