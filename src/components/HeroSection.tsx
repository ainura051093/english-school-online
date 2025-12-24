import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Award, MessageCircle, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const whatsappUrl = "https://wa.me/77476746008";
  const telegramUrl = "https://t.me/+77476746008";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Онлайн-обучение английскому
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Заговори на{" "}
              <span className="text-gradient-hero">английском</span>{" "}
              уверенно и свободно
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Индивидуальные занятия и групповые курсы с опытными преподавателями. 
              От разговорного английского до подготовки к IELTS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={() => setIsDialogOpen(true)}>
                Записаться на урок
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Узнать подробнее
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Студентов</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Card */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center">
                      <span className="text-3xl">🇬🇧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Пробный урок
                      </h3>
                      <p className="text-muted-foreground">Бесплатно</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">Определим ваш уровень</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">Подберём программу</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">Познакомитесь с преподавателем</span>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full" size="lg" onClick={() => setIsDialogOpen(true)}>
                    Записаться бесплатно
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
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

export default HeroSection;
