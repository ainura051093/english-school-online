import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ContactSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const whatsappUrl = `https://wa.me/77476746008?text=${encodeURIComponent(`Здравствуйте! Меня зовут ${formData.name}. ${formData.message || 'Хочу записаться на пробный урок.'}`)}`;
  const telegramUrl = "https://t.me/+77476746008";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Контакты
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Начните учиться{" "}
              <span className="text-gradient-accent">сегодня</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Запишитесь на бесплатный пробный урок и сделайте первый шаг к
              свободному владению английским языком
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <a
                    href="tel:+77476746008"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    +7 747 674 60 08
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:Kubayevaaiganym@gmail.com"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Kubayevaaiganym@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Формат</p>
                  <p className="text-lg font-medium text-foreground">
                    Онлайн по всему Казахстану
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Запишитесь на пробный урок
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Телефон
                </label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Сообщение (необязательно)
                </label>
                <Textarea
                  placeholder="Расскажите о ваших целях в изучении английского"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Отправить заявку
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* Messenger Choice Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Выберите мессенджер</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <span className="font-medium text-foreground">WhatsApp</span>
            </a>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                <Send className="w-7 h-7 text-white" />
              </div>
              <span className="font-medium text-foreground">Telegram</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
