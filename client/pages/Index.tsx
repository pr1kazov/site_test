import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Settings,
  Beaker,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[hsl(var(--mchs-light-blue))] py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[hsl(var(--mchs-accent-orange))]">
              <div className="relative">
                <div className="w-12 h-12 bg-[hsl(var(--mchs-accent-orange))] rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-[hsl(var(--mchs-primary-blue))] rounded-sm flex items-center justify-center">
                    <div
                      className="w-4 h-4 bg-white"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[hsl(var(--mchs-dark-text))] uppercase">
                ИСПЫТАТЕЛЬНАЯ ПОЖАРНАЯ ЛАБОРАТОРИЯ
              </h1>
              <p className="text-xs text-[hsl(var(--mchs-text-gray))] uppercase">
                ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="text-right">
              <div className="flex items-center space-x-2 text-[hsl(var(--mchs-dark-text))] font-bold">
                <Phone className="w-4 h-4" />
                <span>(812) 498-08-30</span>
              </div>
              <div className="flex items-center space-x-2 text-[hsl(var(--mchs-dark-text))] font-bold mt-1">
                <Mail className="w-4 h-4" />
                <span>ipl.spb@ipl.78.mchs.gov.ru</span>
              </div>
            </div>
            <Button variant="white" size="lg">
              Задать воп��ос
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[hsl(var(--mchs-primary-blue))] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Документы
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                О лаборатории
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Противодействие коррупции
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
        <div className="h-1 bg-[hsl(var(--mchs-accent-orange))]"></div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--mchs-primary-blue))] to-[hsl(var(--mchs-secondary-blue))] py-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-[hsl(var(--mchs-primary-blue))] font-bold text-2xl">
                  МЧС
                </div>
              </div>
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-2">МЧС России</h2>
                <div className="w-80 h-1 bg-[hsl(var(--mchs-accent-orange))] mb-4"></div>
                <p className="text-xl font-semibold">
                  Испытательная Пожарная Лаборатория
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-8 text-[hsl(var(--mchs-bright-accent))]">
                Почему нам доверяют
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white text-[hsl(var(--mchs-primary-blue))] rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <span className="text-lg">7 аттестованных специалистов</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white text-[hsl(var(--mchs-primary-blue))] rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <span className="text-lg">
                    9 допусков на самостоятельное проведение работ
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white text-[hsl(var(--mchs-primary-blue))] rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <span className="text-lg">
                    Современное испытательное оборудование
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white text-[hsl(var(--mchs-primary-blue))] rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <span className="text-lg">
                    Все виды проверок, аудит в области пожарной безопасности
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Service Card */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="bg-[hsl(var(--ipl-secondary-blue))] text-white p-8 rounded-lg h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="w-32 h-40 mx-auto mb-6 bg-white/20 rounded-lg flex items-center justify-center">
                    <Beaker className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Испытания противопожарных материалов
                  </h3>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-6 h-6 mx-auto" />
                </div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="bg-white border-2 border-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-24 mx-auto mb-4 bg-[hsl(var(--ipl-light-blue))] rounded-lg flex items-center justify-center">
                  <Users className="w-10 h-10 text-[hsl(var(--ipl-primary-blue))]" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--ipl-dark-text))] mb-4">
                  Экспертные заключения
                </h3>
                <ArrowRight className="w-4 h-4 mx-auto text-[hsl(var(--ipl-text-gray))] group-hover:text-[hsl(var(--ipl-primary-blue))] transition-colors" />
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-24 mx-auto mb-4 bg-[hsl(var(--ipl-light-blue))] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-[hsl(var(--ipl-primary-blue))]" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--ipl-dark-text))] mb-4">
                  Определение соответствия
                </h3>
                <ArrowRight className="w-4 h-4 mx-auto text-[hsl(var(--ipl-text-gray))] group-hover:text-[hsl(var(--ipl-primary-blue))] transition-colors" />
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-24 mx-auto mb-4 bg-[hsl(var(--ipl-light-blue))] rounded-lg flex items-center justify-center">
                  <Settings className="w-10 h-10 text-[hsl(var(--ipl-primary-blue))]" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--ipl-dark-text))] mb-4">
                  Испытания веществ и материалов
                </h3>
                <ArrowRight className="w-4 h-4 mx-auto text-[hsl(var(--ipl-text-gray))] group-hover:text-[hsl(var(--ipl-primary-blue))] transition-colors" />
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-24 mx-auto mb-4 bg-[hsl(var(--ipl-light-blue))] rounded-lg flex items-center justify-center">
                  <Award className="w-10 h-10 text-[hsl(var(--ipl-primary-blue))]" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--ipl-dark-text))] mb-4">
                  Сертификация продукции
                </h3>
                <ArrowRight className="w-4 h-4 mx-auto text-[hsl(var(--ipl-text-gray))] group-hover:text-[hsl(var(--ipl-primary-blue))] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-[hsl(var(--ipl-process-bg))]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[hsl(var(--ipl-dark-text))] mb-12">
            Этапы работы
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { number: 1, title: "Письмо-заявка" },
              { number: 2, title: "Регистрация" },
              { number: 3, title: "Заключение договора" },
              { number: 4, title: "Проведение работ" },
              { number: 5, title: "Оформление протокола" },
              { number: 6, title: "Подписание акта" },
            ].map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                    <span className="text-2xl font-bold text-[hsl(var(--ipl-primary-blue))]">
                      {step.number}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[hsl(var(--ipl-text-gray))] max-w-24">
                    {step.title}
                  </p>
                </div>
                {index < 5 && (
                  <ArrowRight className="w-6 h-6 text-[hsl(var(--ipl-text-gray))] mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--ipl-primary-blue))] to-[hsl(var(--ipl-secondary-blue))]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Свяжитесь с нами
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Ваше имя"
              className="h-15 px-4 rounded-lg border-0 bg-white text-[hsl(var(--ipl-dark-text))] placeholder-[hsl(var(--ipl-text-gray))] focus:ring-2 focus:ring-[hsl(var(--ipl-accent-orange))] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="(999) 999-99-99"
              className="h-15 px-4 rounded-lg border-0 bg-white text-[hsl(var(--ipl-dark-text))] placeholder-[hsl(var(--ipl-text-gray))] focus:ring-2 focus:ring-[hsl(var(--ipl-accent-orange))] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Ваш вопрос"
              className="h-15 px-4 rounded-lg border-0 bg-white text-[hsl(var(--ipl-dark-text))] placeholder-[hsl(var(--ipl-text-gray))] focus:ring-2 focus:ring-[hsl(var(--ipl-accent-orange))] focus:outline-none"
            />
            <div className="md:col-span-3 text-center">
              <Button variant="orange" size="lg" className="px-12">
                ОТПРАВИТЬ
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="h-1 bg-[hsl(var(--ipl-accent-orange))]"></div>
        <div className="bg-[hsl(var(--ipl-primary-blue))] py-8">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Документы
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                О лаборатории
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Противодействие коррупции
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Контакты
              </a>
            </div>
            <div className="text-white/70 text-sm">
              © 2024 ФГБУ СЭУФПС ИПЛ по МО
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
