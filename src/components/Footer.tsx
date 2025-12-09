import { BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              English<span className="text-accent">Pro</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#programs" className="hover:text-accent transition-colors">
              Программы
            </a>
            <a href="#pricing" className="hover:text-accent transition-colors">
              Цены
            </a>
            <a href="#benefits" className="hover:text-accent transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Контакты
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} EnglishPro. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
