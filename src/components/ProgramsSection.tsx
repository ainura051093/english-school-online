import { BookOpen, GraduationCap, MessageCircle, Target } from "lucide-react";

const programs = [
  {
    icon: MessageCircle,
    title: "Общий английский",
    description: "Разговорная практика, грамматика и расширение словарного запаса для повседневного общения",
    features: ["Все уровни от A1 до C1", "Разговорная практика", "Современные материалы"],
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Подготовка к IELTS",
    description: "Интенсивная подготовка к международному экзамену с отработкой всех модулей",
    features: ["Speaking, Writing, Reading, Listening", "Пробные тесты", "Стратегии сдачи"],
    color: "accent",
  },
  {
    icon: Target,
    title: "Бизнес-английский",
    description: "Деловая переписка, переговоры и презентации для профессионального роста",
    features: ["Деловая лексика", "Презентации", "Переговоры"],
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Английский для детей",
    description: "Увлекательные занятия с игровыми элементами для школьников",
    features: ["Игровой формат", "Помощь с школой", "Развитие интереса"],
    color: "accent",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Наши программы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Выберите свой путь к{" "}
            <span className="text-gradient-hero">успеху</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Программы обучения для любых целей и уровней подготовки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  program.color === "accent"
                    ? "bg-gradient-accent"
                    : "bg-gradient-hero"
                }`}
              >
                <program.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {program.description}
              </p>

              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      program.color === "accent" ? "bg-accent" : "bg-primary"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
