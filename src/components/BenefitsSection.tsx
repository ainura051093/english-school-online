import { Clock, Globe, Headphones, MonitorPlay, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: MonitorPlay,
    title: "Онлайн-занятия",
    description: "Учитесь из любой точки мира в удобное время через Zoom",
  },
  {
    icon: Headphones,
    title: "Опытные преподаватели",
    description: "Сертифицированные специалисты с многолетним опытом",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Выбирайте удобное время для занятий",
  },
  {
    icon: Zap,
    title: "Быстрый результат",
    description: "Заметный прогресс уже через месяц обучения",
  },
  {
    icon: Globe,
    title: "Современные методики",
    description: "Коммуникативный подход и актуальные материалы",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Бесплатный пробный урок и возврат средств",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Почему мы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Ваш путь к{" "}
            <span className="text-gradient-hero">свободному английскому</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы создаём комфортную среду для эффективного изучения языка
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex gap-5 p-6 rounded-2xl bg-card/50 hover:bg-card transition-all duration-300 border border-transparent hover:border-border/50 hover:shadow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
