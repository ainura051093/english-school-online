import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "+7 ",
    email: "",
    contactMethod: "whatsapp",
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith("+7")) {
      value = "+7 " + value.replace(/^\+?7?\s*/, "");
    }
    setFormData({ ...formData, phone: value });
  };

  const getContactMethodLabel = (method: string) => {
    switch (method) {
      case "whatsapp": return "WhatsApp";
      case "telegram": return "Telegram";
      case "call": return "Звонок";
      default: return method;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const telegramMessage = encodeURIComponent(
      `📩 Новая заявка!\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n${formData.email ? `📧 Email: ${formData.email}\n` : ''}💬 Способ связи: ${getContactMethodLabel(formData.contactMethod)}`
    );
    const telegramUrl = `https://t.me/+77476746008?text=${telegramMessage}`;
    
    window.open(telegramUrl, '_blank');
    
    toast({
      title: "Спасибо! Ваша заявка отправлена.",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    
    setFormData({ name: "", phone: "+7 ", email: "", contactMethod: "whatsapp" });
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
              Оставьте заявку
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Имя *
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
                  Телефон *
                </label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email (по желанию)
                </label>
                <Input
                  type="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-foreground">
                  Способ связи *
                </label>
                <RadioGroup
                  value={formData.contactMethod}
                  onValueChange={(value) =>
                    setFormData({ ...formData, contactMethod: value })
                  }
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="whatsapp" />
                    <Label htmlFor="whatsapp" className="flex items-center gap-2 cursor-pointer">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      WhatsApp
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="telegram" id="telegram" />
                    <Label htmlFor="telegram" className="flex items-center gap-2 cursor-pointer">
                      <Send className="w-4 h-4 text-blue-500" />
                      Telegram
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="call" id="call" />
                    <Label htmlFor="call" className="flex items-center gap-2 cursor-pointer">
                      <Phone className="w-4 h-4 text-primary" />
                      Звонок
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full mt-6">
                Отправить заявку
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
