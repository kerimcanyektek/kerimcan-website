
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

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
              As a Frontend Developer, I specialize in modern web technologies and user experience design. I build user-friendly and high-performance web applications.
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
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                Mersin, Turkey
              </li>
              <li>
                <a 
                  href="mailto:me@kerimcanyektek.com" 
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4 text-primary" />
                  me@kerimcanyektek.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Kerimcan Yektek. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

