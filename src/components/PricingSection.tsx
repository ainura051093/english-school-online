import { Button } from "@/components/ui/button";
import { Check, Star, Users, User } from "lucide-react";

const generalEnglishPlans = [
  {
    name: "Мини-группа",
    description: "До 5 человек",
    price: "30 000",
    pricePerLesson: "2 500",
    icon: Users,
    features: [
      "12 занятий по 60 минут",
      "Групповая практика",
      "Домашние задания",
      "Чат с преподавателем",
    ],
    popular: false,
  },
  {
    name: "В паре",
    description: "Занятия вдвоём",
    price: "48 000",
    pricePerLesson: "4 000",
    icon: Users,
    features: [
      "12 занятий по 60 минут",
      "Парная практика",
      "Индивидуальный подход",
      "Гибкий график",
    ],
    popular: false,
  },
  {
    name: "Индивидуально",
    description: "Персональные занятия",
    price: "72 000",
    pricePerLesson: "6 000",
    icon: User,
    features: [
      "12 занятий по 60 минут",
      "100% внимания преподавателя",
      "Персональная программа",
      "Максимальный прогресс",
    ],
    popular: true,
  },
];

const ieltsPlans = [
  {
    name: "IELTS в паре",
    description: "Подготовка вдвоём",
    price: "75 000",
    pricePerLesson: "6 250",
    icon: Users,
    features: [
      "12 занятий по 60 минут",
      "Все модули экзамена",
      "Пробные тесты",
      "Стратегии сдачи",
    ],
    popular: false,
  },
  {
    name: "IELTS индивидуально",
    description: "Персональная подготовка",
    price: "120 000",
    pricePerLesson: "10 000",
    icon: Star,
    features: [
      "12 занятий по 60 минут",
      "Индивидуальная стратегия",
      "Детальный разбор ошибок",
      "Гарантия результата",
    ],
    popular: true,
  },
];

const PricingCard = ({
  plan,
  index,
}: {
  plan: (typeof generalEnglishPlans)[0];
  index: number;
}) => (
  <div
    className={`relative bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 border ${
      plan.popular
        ? "border-accent shadow-accent scale-105 z-10"
        : "border-border/50 shadow-soft hover:shadow-card"
    }`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {plan.popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="bg-gradient-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-accent">
          Популярный
        </span>
      </div>
    )}

    <div className="flex items-center gap-4 mb-6">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          plan.popular ? "bg-gradient-accent" : "bg-gradient-hero"
        }`}
      >
        <plan.icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </div>
    </div>

    <div className="mb-6">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl md:text-4xl font-bold text-foreground">
          {plan.price}
        </span>
        <span className="text-muted-foreground">₸</span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">
        {plan.pricePerLesson} ₸ за занятие
      </p>
    </div>

    <ul className="space-y-3 mb-8">
      {plan.features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${
              plan.popular ? "bg-accent/20" : "bg-primary/20"
            }`}
          >
            <Check
              className={`w-3 h-3 ${
                plan.popular ? "text-accent" : "text-primary"
              }`}
            />
          </div>
          {feature}
        </li>
      ))}
    </ul>

    <Button
      variant={plan.popular ? "hero" : "outline"}
      className="w-full"
      size="lg"
    >
      Выбрать
    </Button>
  </div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Стоимость обучения
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Прозрачные <span className="text-gradient-accent">цены</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите формат обучения, который подходит именно вам
          </p>
        </div>

        {/* General English */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">
            Общий английский
          </h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-4 max-w-5xl mx-auto items-center">
            {generalEnglishPlans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>

        {/* IELTS */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">
            Подготовка к IELTS
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {ieltsPlans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
